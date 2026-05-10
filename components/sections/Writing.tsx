"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Typography } from "@/components/ui/Typography";

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
        <Typography variant="mono" size="sm" dim as="a">see all →</Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
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
            <Typography variant="label" size="sm" dim className="mb-2 block">
              {a.platform}
            </Typography>
            <Typography variant="mono" size="md" weight="medium" className="mb-2 block" style={{ lineHeight: "1.4" }}>
              {a.title}
            </Typography>
            <Typography variant="mono" size="sm" dim>
              {a.meta}
            </Typography>
          </a>
        ))}
      </div>
    </section>
  );
}