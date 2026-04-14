import { Typography } from "./Typography";

export function DimLine({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-2 mb-2 tracking-widest"
      style={{ color: "var(--text-dim)" }}
    >
      <span
        className="block h-px w-5"
        style={{ background: "var(--border)" }}
      />
      <Typography variant="body" size="lg" className="!font-mono !uppercase">{label}</Typography>
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
    </div>
  );
}
 