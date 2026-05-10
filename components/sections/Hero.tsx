"use client";

import Link from "next/link";
import { GridBackground } from "@/components/ui/GridBackground";
import { DimLine } from "@/components/ui/DimLine";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "../ui/button";
import { Typography } from "../ui/Typography";
import { CornerMark } from "../ui/CornerMark";
import { Separator } from "../ui/Separator";

export function Hero() {
  return (
    <div
      id="hero"
      className="relative overflow-hidden md:h-[95vh]"
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

      <div className="relative z-3 max-w-360 mx-auto px-8">
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

        <div className="pt-12 pb-24">
          {/* Open to work badge */}
          <div
            className="inline-flex items-center gap-2 border rounded-[3px] px-2.5 py-1 "
            style={{
              borderColor: "var(--border-strong)",
              background: "var(--tag-bg)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--green-dot)" }}
            />
            <Typography variant="mono" size="sm" as="span">
              open to work · remote friendly
            </Typography>
          </div>

          {/* Headline */}
          <Typography variant="heading" size="h1" weight="medium" as="h1" className="w-full mt-6 mb-8" style={{lineHeight:1.0}}>
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
          </Typography>

          {/* Subheadline */}
          <Typography variant="body" size="sm" className="max-w-125 mb-9" style={{lineHeight:1.3}}>
            I build the layer between design and code.
            <br /> Scalable component
            libraries, consistent UI systems, and the tooling that keeps teams
            moving.
          </Typography>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-2.5 mb-12.5">
            <Button asChild size="lg" className="py-4 px-12">
                <a href="/OtrinandaGandhi_CV_March_2026.pdf" download>Download CV</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="py-4 px-12">
                <Link href="/#projects">
                View projects →
                </Link>
            </Button>

          </div>
          <DimLine label="stats" />
          <div className="relative flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-primary-foreground/70">
            {[
              { value: "150+", label: "components shipped"   },
              { value: "3",    label: "teams · Breadboard UI" },
              { value: "5 yrs", label: "frontend experience"  },
            ].map((stat, i, arr) => (
              <div key={stat.label} className="contents">
                <div className="flex-1 px-7 py-4">
                  <Typography variant="body" size="md">{stat.value}</Typography>
                  <Typography variant="mono" size="sm">{stat.label}</Typography>
                </div>
                {i < arr.length - 1 && (
                  <>
                    <Separator className="md:hidden" opacity={0.2} />
                    <Separator orientation="vertical" className="hidden md:inline-block" opacity={0.2} />
                  </>
                )}
              </div>
            ))}
            <CornerMark size={20} radius="4px" />
          </div>
        </div>
      </div>
    </div>
  );
}