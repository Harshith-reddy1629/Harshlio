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
  // rounded-3xl data-[active=true]:shadow-[inset_1px_5px_5px_#ffffff40_,_inset_-1px_-5px_5px_#000000ff,_inset_-1px_-5px_10px_#ffffff30,_2px_2px_4px_#0005]
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      data-active={isActive}
      className="relative py-2 data-[active=true]:text-white tracking-widest text-white/60 opacity-90 transition-all duration-1000 after:absolute after:bottom-1 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-[radial-gradient(circle,_var(--text)_,_transparent)] after:transition-all after:duration-500 after:content-[''] hover:text-white after:hover:w-1/2 data-[active=true]:opacity-100 data-[active=true]:after:w-1/2 data-[active=true]:after:bg-[radial-gradient(circle,_#ffffff,_transparent)] group-data-[scrolled=true]:data-[active=true]:after:h-[0.5px] group-data-[scrolled=true]:data-[active=true]:after:w-2/3"
      href={href}
    >
      {children}
    </Link>
  );
}
