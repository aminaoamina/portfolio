"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { scrollPosition } = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const activeIndex = (() => {
    const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
    return index === -1 ? 0 : index;
  })();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-150",
        scrollPosition > 30
          ? "glass-effect-lg backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/icons/top-icon.png"
            alt={`${SITE_CONFIG.name} logo`}
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        <div className="hidden md:flex items-center justify-end flex-1 gap-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                index === activeIndex ? "text-white" : "text-gray-300 hover:text-white"
              )}
            >
              <span className="relative px-2 py-1">
                {item.name}
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-[3px] w-6 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#7fc9ff] transition-all duration-150",
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  )}
                />
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-sm font-semibold px-4 py-2 rounded-full border border-white/20 text-white"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 sm:px-6 pb-4">
          <div className="glass-effect-lg p-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
