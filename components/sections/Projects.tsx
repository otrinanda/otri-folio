"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CornerMark } from "@/components/ui/CornerMark";
import { Tag } from "@/components/ui/Tag";
import { Typography } from "@/components/ui/Typography";

 
export function Projects() {
  return (
    <section id="projects" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="flex justify-between items-baseline mb-6">
        <SectionLabel num="03" label="featured projects" />
        <Link href="/projects">
          <Typography variant="mono" size="sm" dim >
            see all →
          </Typography>
        </Link>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="relative block rounded-[3px] border p-4 transition-all duration-200"
            style={{
              borderColor: "var(--border-strong)",
              background: "var(--card-bg)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-border)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-strong)")
            }
          >
            <CornerMark size={16} />
 
            <div className="flex justify-between items-start mb-2">
              <Typography variant="mono" size="md" weight="medium">{p.name}</Typography>
              {p.isOpenSource && <Tag variant="os">open source</Tag>}
            </div>
 
            <Typography variant="body" size="sm" muted className="mb-4">
              {p.tagline}
            </Typography>
 
            <div className="flex flex-wrap gap-4">
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