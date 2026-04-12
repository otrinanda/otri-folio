"use client";

import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <nav
      className="flex justify-between items-center py-5 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-mono text-[13px] tracking-[0.05em]"
        style={{ color: "var(--text)" }}
      >
        otri<span style={{ color: "var(--text-muted)" }}>.dev</span>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        {[
          { label: "about",      href: "/#about"      },
          { label: "projects",   href: "/#projects"   },
          { label: "experience", href: "/#experience" },
          { label: "writing",    href: "/#writing"    },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-[12px] transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="font-mono text-[11px] px-3 py-[5px] rounded-[3px] border transition-all duration-200"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--border-strong)";
            e.currentTarget.style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-muted)";
          }}
        >
          {theme === "dark" ? "light" : "dark"}
        </button>

        {/* Hire me */}
        <Link
          href="/#contact"
          className="font-mono text-[11px] px-3 py-[5px] rounded-[3px] border transition-all duration-200"
          style={{
            borderColor: "var(--border-strong)",
            color: "var(--text)",
            background: "var(--tag-bg)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.10)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--tag-bg)")
          }
        >
          [ hire me ]
        </Link>
      </div>
    </nav>
  );
}