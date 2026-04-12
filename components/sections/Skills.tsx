"use client";

import { Tag } from "@/components/ui/Tag";
import { SectionLabel } from "@/components/ui/SectionLabel";
 
export function Skills() {
  const groups = [
    {
      label: "core stack",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      variant: "core" as const,
    },
    {
      label: "tooling",
      tags: ["Turborepo", "pnpm", "Storybook", "Vite"],
      variant: "default" as const,
    },
    {
      label: "specialty",
      tags: ["Design Systems", "Atomic Design", "Design Tokens", "WCAG 2.1"],
      variant: "default" as const,
    },
  ];
 
  return (
    <section id="skills" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <SectionLabel num="02" label="skills & stack" />
      <div className="grid grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.label}>
            <div
              className="font-mono text-[10px] tracking-[0.08em] uppercase mb-2.5"
              style={{ color: "var(--text-dim)" }}
            >
              {g.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.tags.map((t) => (
                <Tag key={t} variant={g.variant}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}