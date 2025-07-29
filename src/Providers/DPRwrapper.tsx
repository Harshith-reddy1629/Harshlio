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
    triggerAction?.();
  }, [triggerAction]);

  return null;
}
