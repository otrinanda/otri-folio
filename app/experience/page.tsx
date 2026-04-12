
import Link from "next/link";
import { experiences } from "@/data/experience";
import { GridBackground } from "@/components/ui/GridBackground";
import { Tag } from "@/components/ui/Tag";
import { CornerMark } from "@/components/ui/CornerMark";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — otri.dev",
  description: "Four years of frontend work across enterprise platforms and product startups.",
};

export default function ExperiencePage() {
  return (
    <main>
      {/* ── HERO ZONE ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--mat)" }}
      >
        <GridBackground />
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
          style={{
            height: "140px",
            background: "linear-gradient(to bottom, transparent, var(--body-bg))",
          }}
        />

        <div className="relative z-[3] max-w-[860px] mx-auto px-8">
          <nav
            className="flex justify-between items-center py-5 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <Link
              href="/"
              className="font-mono text-[13px] tracking-[0.05em]"
              style={{ color: "var(--text)" }}
            >
              otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
            </Link>
            <Link
              href="/"
              className="font-mono text-[12px] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
            //   onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            //   onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              ← back
            </Link>
          </nav>

          <div className="pt-[52px] pb-[96px]">
            <div
              className="font-mono text-[10px] tracking-[0.1em] uppercase mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              career history
            </div>
            <h1
              className="text-[38px] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ color: "var(--text)" }}
            >
              Where I&apos;ve been,
              <br />
              what I&apos;ve built.
            </h1>
            <p
              className="text-[15px] leading-[1.7] max-w-[520px]"
              style={{ color: "var(--text-muted)" }}
            >
              Four years of frontend work across enterprise platforms and product
              startups. Each step taught me something the last one couldn&apos;t.
            </p>
          </div>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div style={{ background: "var(--body-bg)" }}>
        <div className="max-w-[860px] mx-auto px-8 py-[56px]">

          {/* Chapter heading */}
          <ChapterHeading num="01" label="work experience" />

          {/* Experience entries */}
          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="grid gap-x-10 pb-12 relative"
                style={{ gridTemplateColumns: "180px 1fr" }}
              >
                {/* Vertical connector line */}
                {i < experiences.length - 1 && (
                  <div
                    className="absolute top-2 pointer-events-none"
                    style={{
                      left: "179px",
                      bottom: 0,
                      width: "1px",
                      background: "var(--border)",
                    }}
                  />
                )}

                {/* Left — meta */}
                <div className="pt-0.5 relative">
                  <div
                    className="font-mono text-[11px] leading-relaxed mb-2.5"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {exp.period}
                    <br />
                    {exp.location}
                  </div>
                  <div
                    className="text-[14px] font-medium mb-0.5"
                    style={{ color: "var(--text)" }}
                  >
                    {exp.company}
                  </div>
                  <div
                    className="font-mono text-[11px]"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {exp.location}
                  </div>

                  {/* Timeline dot */}
                  <div
                    className="absolute top-1.5 rounded-full border"
                    style={{
                      right: "-5px",
                      width: "9px",
                      height: "9px",
                      background: exp.isCurrent ? "var(--text)" : "var(--body-bg)",
                      borderColor: exp.isCurrent ? "var(--text)" : "var(--border-strong)",
                    }}
                  />
                </div>

                {/* Right — narrative */}
                <div className="pl-7">
                  <div
                    className="font-mono text-[11px] mb-4 opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.role}
                  </div>

                  {/* Narrative paragraphs */}
                  <div className="flex flex-col gap-3 mb-5">
                    {exp.narrative.map((para, j) => (
                      <p
                        key={j}
                        className="text-[14px] leading-[1.8]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-col gap-2 mb-5">
                    {exp.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex gap-2.5 text-[13px] leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span
                          className="font-mono flex-shrink-0 mt-px"
                          style={{ color: "var(--text-dim)" }}
                        >
                          —
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((t) => (
                      <Tag key={t} variant="default">{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chapter heading — education */}
          <ChapterHeading num="02" label="education" />

          <div
            className="grid gap-x-10 pb-12"
            style={{ gridTemplateColumns: "180px 1fr" }}
          >
            <div
              className="font-mono text-[11px] pt-0.5"
              style={{ color: "var(--text-dim)" }}
            >
              2019 · GPA 3.34
            </div>
            <div className="pl-7">
              <div
                className="text-[14px] font-medium mb-0.5"
                style={{ color: "var(--text)" }}
              >
                Telkom University
              </div>
              <div
                className="font-mono text-[11px] mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                S1 Teknik Elektro · Electrical Engineering
              </div>
              <p
                className="text-[13px] leading-[1.75]"
                style={{ color: "var(--text-muted)" }}
              >
                Foundation in systems thinking, signal processing, and
                engineering principles — a different angle than most frontend
                developers, and one I still draw on when thinking about
                component architecture and state systems.
              </p>
            </div>
          </div>

          {/* Contact nudge */}
          <div
            className="relative flex justify-between items-center rounded-[3px] border px-8 py-7 mt-4"
            style={{
              borderColor: "var(--border)",
              background: "var(--card-bg)",
            }}
          >
            <CornerMark />
            <p className="text-[14px]" style={{ color: "var(--text-muted)" }}>
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                Available from late May 2026.
              </span>{" "}
              Open to design system, frontend, or tech lead roles — remote or
              Jakarta-based.
            </p>
            <Link
              href="/#contact"
              className="font-mono text-[11px] px-4 py-2 rounded-[3px] ml-8 flex-shrink-0 transition-opacity duration-200 hover:opacity-85"
              style={{
                background: "var(--text)",
                color: "var(--mat)",
              }}
            >
              get in touch →
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

/* ── Chapter heading sub-component ── */
function ChapterHeading({ num, label }: { num: string; label: string }) {
  return (
    <div
      className="flex items-center gap-3 mb-9 mt-14 first:mt-0"
      style={{}}
    >
      <span
        className="font-mono text-[10px]"
        style={{ color: "var(--text-dim)" }}
      >
        {num}
      </span>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
      <span
        className="font-mono text-[10px] tracking-[0.08em] uppercase"
        style={{ color: "var(--text-dim)" }}
      >
        {label}
      </span>
    </div>
  );
}