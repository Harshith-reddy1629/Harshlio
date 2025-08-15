"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Fader() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.style.transition = "all 0.9s";
          targetElement.removeAttribute("data-fader");

          setTimeout(() => {
            targetElement.style.removeProperty("transition");
          }, 1000);
        }
      });
    });
    const elements = document.querySelectorAll("[data-fader=true]");

    elements.forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return <></>;
}
