"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkButton({
  href = "/",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      data-active={isActive}
      className="hover:underline  underline-offset-[8px] tracking-widest decoration-2 decoration-primary data-[active=true]:underline"
      href={href}
    >
      {children}
    </Link>
  );
}
