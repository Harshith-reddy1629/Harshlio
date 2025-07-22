"use client";
import useTriggerAction from "triggerAction";
import { useEffect } from "react";

declare global {
  interface Navigator {
    userAgentData: string;
  }
}

export default function DPRwrapper() {
  const { triggerAction } = useTriggerAction();

  useEffect(() => {
    const f = () => {
      const dpr = window.devicePixelRatio || 1;
      if (
        /**window?.devicePixelRatio * innerWidth >= 768 &&*/
        innerWidth >= 768 &&
        dpr <= 1.25
      ) {
        document.body.style.zoom = `${1.25 / dpr}`;
      }
    };
    f();
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("resize", f);
    };
  }, []);

  useEffect(() => {
    triggerAction?.();
  }, [triggerAction]);

  return null;
}
