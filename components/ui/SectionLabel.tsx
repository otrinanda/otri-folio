"use client";

export function SectionLabel({
  num,
  label,
}: {
  num: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-6">
      <span
        className="font-mono text-[10px] tracking-widest uppercase"
        style={{ color: "var(--text-muted)" }}
      >
        {num} —
      </span>
      <span
        className="font-mono text-[10px] tracking-widest uppercase"
        style={{ color: "var(--text-dim)" }}
      >
        {label}
      </span>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
    </div>
  );
}