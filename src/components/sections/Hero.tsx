"use client";

import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Badge */}
        <div className="inline-block mb-8">
          <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-300 animate-fade-in">
            ✨ Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-slide-in">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {SITE_CONFIG.name}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          {SITE_CONFIG.title}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful, modern web experiences with cutting-edge technologies. 
          Specializing in full-stack development with a focus on user experience and performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="glass-effect-lg px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-400 hover:border-white hover:text-white transition-all duration-300">
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
