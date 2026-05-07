"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { CornerMark } from "@/components/ui/CornerMark";
import { Typography } from "@/components/ui/Typography";
 
export function About() {
  return (
    <section id="about" className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <SectionLabel num="01" label="about" />
      <div className="grid grid-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Bio */}
        <div className="flex flex-col gap-3">
          <Typography variant="body" size="lg" muted>
            I`m Otri — a frontend developer based in Jakarta with a focus on
            design systems and component architecture.
          </Typography>
          <Typography variant="body" size="lg" muted>
            My best work happens at the intersection of engineering discipline
            and design sensibility: building systems that are easy to use, hard
            to misuse, and a pleasure to contribute to.
          </Typography>
          <Typography variant="body" size="lg" muted>
            Currently leading the FE Utils team at Hyperscal, building
            Breadboard UI on the side, and writing about frontend craft for
            developers who care about the details.
          </Typography>
        </div>
 
        {/* Side meta */}
        <div>
          <div
            className="relative w-16 h-16 rounded-lg flex items-center justify-center mb-4 border"
            style={{
              borderColor: "var(--border-strong)",
              background: "var(--card-bg)",
            }}
          >
            <Typography variant="mono" size="md">OG</Typography>
            <CornerMark radius="4px"/>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { key: "loc",   val: "Jakarta, ID"    },
              { key: "avail", val: "June 2026"      },
              { key: "edu",   val: "Telkom Univ."   },
              { key: "focus", val: "Design Systems" },
            ].map((row) => (
              <div key={row.key} className="grid grid-cols-6 gap-4">
                <Typography variant="mono" size="md" dim className="col-span-2">{row.key}</Typography>
                <Typography variant="mono" size="md" muted className="col-span-4">{row.val}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 