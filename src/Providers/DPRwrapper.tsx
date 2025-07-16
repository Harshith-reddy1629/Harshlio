"use client";
import React, { useEffect } from "react";

export default function DPRwrapper() {
  useEffect(() => {
    const f = () => {
      const dpr = window.devicePixelRatio;
      document.body.style.zoom = `${1.25 / dpr}`;
    };
    f();
    window.addEventListener("resize", f);
    return () => {
      window.removeEventListener("resize", f);
    };
  }, []);
  return <></>;
}
