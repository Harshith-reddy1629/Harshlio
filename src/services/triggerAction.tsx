"use client";
import { USER_ACTIONS } from "@/constants/USER_ACTIONS";
import { getSessionStorage, setSessionStorage } from "@/utils/storages/session";
import { useCallback, useRef } from "react";

export default function useTriggerAction() {
  const triggerAction = useCallback(async (action?: string) => {
    if (typeof window === "undefined") return;

    const visited = getSessionStorage("_v__i");

    const resolvedAction =
      (action && USER_ACTIONS.clicked?.(action)) ||
      (visited ? USER_ACTIONS.refresh : USER_ACTIONS.visit);

    try {
      const res = await fetch("/api/rsc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: resolvedAction,
          url: window.location.href,
        }),
      });

      if (res.ok) {
        await res.json();
        setSessionStorage("_v__i", "tuk tuk tuk");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleClickAction = useCallback(
    (value: string) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        triggerAction(value);
      }, 500);
    },
    [triggerAction],
  );

  return { triggerAction, handleClickAction };
}
