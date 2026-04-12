"use client";

import Link from "next/link";
import { GridBackground } from "@/components/ui/GridBackground";
import { DimLine } from "@/components/ui/DimLine";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "var(--mat)" }}
    >
      <GridBackground />

      {/* fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-2 pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to bottom, transparent, var(--body-bg))",
        }}
      />

      <div className="relative z-3 max-w-215 mx-auto px-8">
        <Navbar />

        <div className="pt-[66px] pb-[110px]">
          {/* Open to work badge */}
          <div
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.04em] border rounded-[3px] px-2.5 py-1 mb-8"
            style={{
              color: "var(--text)",
              borderColor: "var(--border-strong)",
              background: "var(--tag-bg)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--green-dot)" }}
            />
            open to work · remote friendly
          </div>

          {/* Headline */}
          <h1
              className="w-full text-[40px] md:text-[44px] font-medium leading-[1.1] tracking-[-0.025em] mb-4"
                style={{ color: "var(--text)" }}

            >
            Frontend engineer
            <br />
            <em
              className="not-italic"
              style={{ color: "var(--text-muted)" }}
            >
              obsessed with
            </em>
            <br />
            design systems.
          </h1>

          {/* Subheadline */}
          <p
            className="text-[15px] leading-[1.75] max-w-125 mb-9"
            style={{ color: "var(--text-muted)" }}
          >
            I build the layer between design and code — scalable component
            libraries, consistent UI systems, and the tooling that keeps teams
            moving.
          </p>

          {/* CTAs */}
          <div className="flex gap-2.5 mb-12.5">
            <Button asChild>
                <a href="/otri-cv.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="outline">
                <Link href="/#projects">
                View projects →
                </Link>
            </Button>

          </div>
          {/* Stats */}
          <DimLine label="stats" />
          <div
            className="flex border rounded-[3px] overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { value: "150+", label: "components shipped"   },
              { value: "3",    label: "teams · Breadboard UI" },
              { value: "4 yrs", label: "frontend experience"  },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className="flex-1 px-7 py-4"
                style={{
                  borderRight:
                    i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  className="text-[22px] font-medium mb-0.5"
                  style={{ color: "var(--text)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-[11px]"
                  style={{ color: "var(--text-dim)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}