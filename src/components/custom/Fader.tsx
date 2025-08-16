"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Fader() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = entry.target as HTMLElement;
            targetElement.style.transition = "all 0.6s";
            targetElement.removeAttribute("data-scroll-effect");

            setTimeout(() => {
              targetElement.style.removeProperty("transition");
            }, 1000);
          }
        });
      },
      {
        threshold: 0.25,
      },
    );
    const elements = document.querySelectorAll("[data-scroll-effect=true]");

    elements.forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return <></>;
}
