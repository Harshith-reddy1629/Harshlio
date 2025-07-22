import mongoConnection from "@/config/db";
import { NextRequest } from "next/server";
import visitedUser from "@/models/visitedUser";
import { USER_ACTIONS } from "@/constants/USER_ACTIONS";
import HTTPS_STATUS from "@/constants/HTTPS_STATUS.json";

const in_memory_ips: Map<string, string> = new Map();

export async function POST(request: NextRequest) {
  await mongoConnection();

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    (request as unknown as { ip: string })?.ip ??
    "unknown";

  const userAgent = request.headers.get("user-agent") ?? "unknown";

  let action: string = USER_ACTIONS.visit;

  let url: string | null = null;

  try {
    const body = await request.json();

    action = body.action ?? USER_ACTIONS.visit;

    url = body.url ?? null;
  } catch (error) {
    console.error("Failed to parse request body:", error);
  }

  let ipInfo = "";

  try {
    const ip_key = JSON.stringify(ip).trim();

    if (in_memory_ips.has(ip_key)) {
      ipInfo = in_memory_ips.get(ip_key) ?? "";
    } else {
      const ipRes = await fetch(
        `https://ipinfo.io/${ip_key}?token=${process.env.IPINFO_TOKEN}`,
      );

      if (ipRes.ok) {
        ipInfo = await ipRes.text();

        in_memory_ips.set(ip_key, ipInfo);
      } else {
        console.error("Failed to fetch IP info:", await ipRes.text());
      }
    }
  } catch (error) {
    console.error("IP info fetch error:", error);
  }

  try {
    const activity = {
      action,
      url,
    };

    await visitedUser.updateOne(
      { ip },
      {
        $setOnInsert: {
          ipInfo,
          lastVisitedAt: new Date(),
        },
        $addToSet: {
          userAgent,
        },
        $push: {
          ...(action === USER_ACTIONS.visit ? { visits: new Date() } : {}),
          userActivity: {
            $each: [activity],
          },
        },
        $inc: {
          ...(action === USER_ACTIONS.visit && { visitCount: 1 }),
        },
      },
      { upsert: true },
    );

    return new Response(JSON.stringify({ success: true }), {
      status: HTTPS_STATUS.CREATED,
      headers: { "Content-Type": "application/json" },
    });
  } catch (dbError) {
    console.error("DB Insert Error:", dbError);

    return new Response(
      JSON.stringify({ success: false, error: "Database error" }),
      {
        status: HTTPS_STATUS.INTERNAL_SERVER_ERROR,
      },
    );
  }
}
