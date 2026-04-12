"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";

export function Writing() {
  const articles = [
    {
      platform: "Medium · Bahasa Indonesia",
      title: "Frontend Developer dan Lego: cara berpikir komponen yang lebih masuk akal",
      meta: "Artikel 0 · Personal branding series",
      href: "#",
    },
    {
      platform: "Dev.to · English",
      title: "Why I built a design system instead of shipping features",
      meta: "// coming soon",
      href: "#",
    },
  ];
 
  return (
    <section id="writing" className="py-[52px]" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="flex justify-between items-baseline mb-6">
        <SectionLabel num="05" label="writing" />
        <a className="font-mono text-[12px]" style={{ color: "var(--text-dim)" }} href="#">
          see all →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        {articles.map((a) => (
          <a
            key={a.title}
            href={a.href}
            className="relative block rounded-[3px] border p-[18px] transition-all duration-200"
            style={{ borderColor: "var(--border)", background: "var(--card-bg)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-strong)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div
              className="font-mono text-[9px] uppercase tracking-[0.08em] mb-2"
              style={{ color: "var(--text-dim)" }}
            >
              {a.platform}
            </div>
            <div
              className="text-[13px] font-medium leading-[1.4] mb-2"
              style={{ color: "var(--text)" }}
            >
              {a.title}
            </div>
            <div className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>
              {a.meta}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}