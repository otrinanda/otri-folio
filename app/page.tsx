"use client";

export default function Home() {
  return (
    <main
      className="min-h-screen p-10"
      style={{ background: "var(--body-bg)" }}
    >
      {/* Test 1 — CSS variable (cutting mat color) */}
      <div
        className="mb-6 p-4 rounded-sm border"
        style={{
          background: "var(--mat)",
          borderColor: "var(--border-strong)",
        }}
      >
        <p style={{ color: "var(--text)" }} className="font-mono text-sm">
          ✓ CSS variables working — cutting mat background
        </p>
      </div>

      {/* Test 2 — Tailwind utility classes */}
      <div className="mb-6 p-4 bg-mat rounded-sm">
        <p className="font-mono text-sm text-ink">
          ✓ Tailwind @theme tokens working — bg-mat + text-ink
        </p>
      </div>

      {/* Test 3 — Font Inter */}
      <p className="mb-3 text-2xl font-medium" style={{ color: "var(--text)" }}>
        Inter font — Frontend engineer obsessed with design systems.
      </p>

      {/* Test 4 — Font JetBrains Mono */}
      <p className="mb-6 font-mono text-sm" style={{ color: "var(--text-muted)" }}>
        JetBrains Mono — otri.dev · open to work · remote friendly
      </p>

      {/* Test 5 — Grid background */}
      <div
        className="mb-6 grid-bg rounded-sm border"
        style={{
          height: "120px",
          borderColor: "var(--border)",
        }}
      />

      {/* Test 6 — Light mode toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle("light")}
        className="font-mono text-xs px-3 py-2 rounded-sm border"
        style={{
          borderColor: "var(--border-strong)",
          color: "var(--text)",
          background: "var(--tag-bg)",
        }}
      >
        toggle light mode
      </button>
    </main>
  );
}