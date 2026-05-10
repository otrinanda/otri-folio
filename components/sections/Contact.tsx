"use client";

import { GridBackground } from "@/components/ui/GridBackground";
import { CornerMark } from "@/components/ui/CornerMark";
import { Typography } from "@/components/ui/Typography";
 
export function Contact() {
  return (
    <div
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--mat)" }}
    >
      <GridBackground />
 
      {/* fade top */}
      <div
        className="absolute top-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to top, transparent, var(--body-bg))",
        }}
      />
 
      <div className="relative z-[3] max-w-[860px] mx-auto px-8 py-[72px]">
        <div
          className="relative border rounded-[3px] px-10 py-[50px] text-center bg-primary-foreground/70"
          style={{
            borderColor: "var(--border-strong)",
            // background: "var(--card-bg)",
          }}
        >
          <CornerMark />
 
          {/* Coordinate annotations */}
          <Typography variant="mono" size="sm" dim className="absolute top-2 left-3 opacity-40">
            x: 0.00 · y: 0.00
          </Typography>
          <Typography variant="mono" size="sm" dim className="absolute bottom-2 right-3 opacity-40">
            ref: otri.dev/contact
          </Typography>
 
          <Typography variant="heading" size="h2" weight="medium" as="h2" className="mb-2.5">
            Looking for a design
            <br />
            system engineer?
          </Typography>
          <Typography variant="body" size="sm" muted className="mb-8">
            Available for full-time roles from late June 2026. Remote-friendly,
            open to relocation.
          </Typography>
 
          <div className="flex justify-center gap-2.5 flex-wrap">
            <a
              href="mailto:otrinanda31@gmail.com"
              className="font-mono text-[11px] px-4 py-[7px] rounded-[3px] transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--text)",
                color: "var(--mat)",
                border: "1px solid var(--text)",
              }}
            >
              send an email
            </a>
            {[
              { label: "linkedin", href: "https://linkedin.com/in/otrinanda-gandhi/" },
              { label: "github",   href: "https://github.com/otrinanda"      },
              { label: "download cv", href: "/OtrinandaGandhi_CV_March_2026.pdf" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] px-4 py-[7px] rounded-[3px] border transition-all duration-200"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}