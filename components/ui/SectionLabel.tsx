"use client";

import { Typography } from "@/components/ui/Typography";

export function SectionLabel({
  num,
  label,
}: {
  num: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <Typography variant="label" size="lg" muted as="span">
        {num} —
      </Typography>
      <Typography variant="label" size="lg" dim as="h2" className="uppercase">
        {label}
      </Typography>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
    </div>
  );
}