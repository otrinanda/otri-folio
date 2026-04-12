"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CornerMark } from "@/components/ui/CornerMark";
import { Tag } from "@/components/ui/Tag";

 
export function Projects() {
  return (
    <section id="projects" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="flex justify-between items-baseline mb-6">
        <SectionLabel num="03" label="featured projects" />
        <Link
          href="/projects"
          className="font-mono text-[12px]"
          style={{ color: "var(--text-dim)" }}
        >
          see all →
        </Link>
      </div>
 
      <div className="grid grid-cols-2 gap-3.5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="relative block rounded-[3px] border p-[18px] transition-all duration-200"
            style={{
              borderColor: p.slug === "breadboard-ui" ? "var(--border-strong)" : "var(--border)",
              background: "var(--card-bg)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-strong)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor =
                p.slug === "breadboard-ui" ? "var(--border-strong)" : "var(--border)")
            }
          >
            {p.slug === "breadboard-ui" && <CornerMark />}
 
            <div className="flex justify-between items-start mb-2">
              <span className="text-[13px] font-medium" style={{ color: "var(--text)" }}>
                {p.name}
              </span>
              {p.isOpenSource && <Tag variant="os">open source</Tag>}
            </div>
 
            <p className="text-[12px] leading-[1.65] mb-3.5" style={{ color: "var(--text-muted)" }}>
              {p.tagline}
            </p>
 
            <div className="flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map((t) => (
                <Tag key={t} variant="default">{t}</Tag>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}