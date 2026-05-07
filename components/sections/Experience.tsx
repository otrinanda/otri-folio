"use client";

import { experiences } from "@/data/experience";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Typography } from "@/components/ui/Typography";
import { Separator } from "../ui/Separator";

export function ExperienceSection() {
  return (
    <section id="experience" className="pb-14">
      <Separator className="mb-14"/>
      <SectionLabel num="04" label="experience" />
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <>
          
          <div
            key={exp.company}
            className="grid gap-4 py-5 grid-1 md:grid-cols-[144px_1fr]"
          >
            {/* Left — period */}
            <div className="pt-0.5 gap-2 md:gap-4 flex flex-row md:flex-col md:justify-start justify-between items-start">
              <Typography variant="mono" size="sm" dim as="div">{exp.period}</Typography>
              <Typography variant="mono" size="sm" muted as="div">{exp.location}</Typography>
            </div>

            {/* Right — content */}
            <div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center justify-between mb-2">
                <Typography variant="mono" size="md" weight="medium" className="">{exp.company}</Typography>
                <Typography variant="mono" size="sm" muted className="opacity-80">{exp.role}</Typography>
              </div>
              <div className="flex flex-col gap-4">
                {exp.highlights.slice(0, 3).map((h) => (
                  <div key={h} className="flex gap-2 items-start">
                    <div className="h-2 w-2 rounded-full bg-text-muted shrink-0 mt-2 md:mt-3"></div>
                    {/* <Typography variant="mono" size="sm" dim as="span" style={{ flexShrink: 0 }}>—</Typography> */}
                    <Typography variant="body" size="sm" muted>{h}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
            {i < experiences.length - 1 && <Separator key={`separator-${i}`} className="my-4" />}
          </>
        ))}
      </div>
    </section>
  );
}