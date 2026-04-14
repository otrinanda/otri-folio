"use client";

import { experiences } from "@/data/experience";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <SectionLabel num="04" label="experience" />
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="grid gap-x-5 py-5 grid-1 md:grid-cols-[144px_1fr]"
            style={{
              // gridTemplateColumns: "144px 1fr",
              borderBottom: i < experiences.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            {/* Left — period */}
            <div
              className="font-mono text-[11px] leading-relaxed pt-0.5"
              style={{ color: "var(--text-dim)" }}
            >
              {exp.period}
              <br />
              {exp.location}
            </div>
 
            {/* Right — content */}
            <div>
              <div className="text-[13px] font-medium mb-0.5" style={{ color: "var(--text)" }}>
                {exp.company}
              </div>
              <div
                className="font-mono text-[11px] mb-2.5 opacity-80"
                style={{ color: "var(--text-muted)" }}
              >
                {exp.role}
              </div>
              <div className="flex flex-col gap-1">
                {exp.highlights.slice(0, 3).map((h) => (
                  <div key={h} className="flex gap-2 text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    <span className="font-mono" style={{ color: "var(--text-dim)", flexShrink: 0 }}>—</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}