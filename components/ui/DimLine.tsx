export function DimLine({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-widest uppercase"
      style={{ color: "var(--text-dim)" }}
    >
      <span
        className="block h-px w-5"
        style={{ background: "var(--border)" }}
      />
      {label}
      <span
        className="flex-1 h-px"
        style={{ background: "var(--border)" }}
      />
    </div>
  );
}
 