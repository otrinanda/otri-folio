"use client";

import Link from "next/link";
import { GridBackground } from "@/components/ui/GridBackground";
import { DimLine } from "@/components/ui/DimLine";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "../ui/button";
import { IconHome } from "@tabler/icons-react";
import { Typography } from "../ui/Typography";
import { CornerMark } from "../ui/CornerMark";

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
        {/* <div className="flex gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex gap-2">
          <Button size="xs">xs</Button>
          <Button size="sm">sm</Button>
          <Button size="default">default</Button>
          <Button size="lg">Large</Button>
          <IconHome size={24} stroke="1.5" className="" />
          <Button size="icon"><IconHome size={24} stroke="1.5" className="" /></Button>
          <Button size="icon-sm"><IconHome size={20} stroke="1.5" className="" /></Button>
          <Button size="icon-xs"><IconHome size={16} stroke="1.5" className="" /></Button>
        </div> */}

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
            <Button asChild size="lg" className="py-2 px-8">
                <a href="/otri-cv.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="py-2 px-8">
                <Link href="/#projects">
                View projects →
                </Link>
            </Button>

          </div>
          {/* Stats */}
          <DimLine label="stats" />
          <div
            className="grid grid-cols-1 md:grid-cols-3 border border-1 rounded-[3px] overflow-hidden bg-primary-foreground/70 border-border divide-y-1 md:divide-x-1 divide-border"
          >
            {[
              { value: "150+", label: "components shipped"   },
              { value: "3",    label: "teams · Breadboard UI" },
              { value: "4 yrs", label: "frontend experience"  },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex-1 px-7 py-4"
                // style={{
                //   borderRight:
                //     i < arr.length - 1 ? "1px solid var(--border)" : "none",
                // }}
              >
                <Typography variant="body" size="lg">{stat.value}</Typography>
                <Typography variant="mono" size="md" className="">{stat.label}</Typography>
              </div>
            ))}
                        <CornerMark />
            
          </div>
        </div>
      </div>
    </div>
  );
}