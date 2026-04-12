export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--mat-deep)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[860px] mx-auto px-8 py-4 flex justify-between items-center">
        <span
          className="font-mono text-[11px]"
          style={{ color: "var(--text-dim)" }}
        >
          otri.dev — 2026
        </span>
        <span
          className="font-mono text-[11px]"
          style={{ color: "var(--text-dim)" }}
        >
          built with next.js · tailwind · vercel
        </span>
      </div>
    </footer>
  );
}