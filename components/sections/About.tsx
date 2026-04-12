"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { CornerMark } from "@/components/ui/CornerMark";
 
export function About() {
  return (
    <section id="about" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <SectionLabel num="01" label="about" />
      <div className="grid grid-cols-[1fr_176px] gap-11">
        {/* Bio */}
        <div className="text-[14px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
          <p className="mb-3">
            I`m Otri — a frontend developer based in Jakarta with a focus on
            design systems and component architecture.
          </p>
          <p className="mb-3">
            My best work happens at the intersection of engineering discipline
            and design sensibility: building systems that are easy to use, hard
            to misuse, and a pleasure to contribute to.
          </p>
          <p>
            Currently leading the FE Utils team at Hyperscal, building
            Breadboard UI on the side, and writing about frontend craft for
            developers who care about the details.
          </p>
        </div>
 
        {/* Side meta */}
        <div>
          <div
            className="relative w-[54px] h-[54px] rounded-[3px] flex items-center justify-center font-mono text-[15px] mb-4 border"
            style={{
              borderColor: "var(--border-strong)",
              background: "var(--card-bg)",
              color: "var(--text)",
            }}
          >
            OG
            <CornerMark />
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { key: "loc",   val: "Jakarta, ID"    },
              { key: "avail", val: "~May 2026"      },
              { key: "edu",   val: "Telkom Univ."   },
              { key: "focus", val: "Design Systems" },
            ].map((row) => (
              <div key={row.key} className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                {row.key}
                <span className="ml-1" style={{ color: "var(--text-muted)" }}>
                  {row.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 