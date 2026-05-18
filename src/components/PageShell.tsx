"use client";

import LiquidEther from "@/components/LiquidEther";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({ children, className }: PageShellProps) {
  return (
    <main className={cn("relative z-10 min-h-screen w-full pt-24 pb-24", className)}>
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={["#6b4cff", "#b78bff", "#9a7dff"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.4}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#6b4cff"
          color1="#b78bff"
          color2="#9a7dff"
        />
        <div className="absolute inset-0 bg-[#0a1222]/70" />
      </div>
      {children}
    </main>
  );
}
