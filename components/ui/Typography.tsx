"use client";

import { ElementType, ReactNode, HTMLAttributes, createElement } from "react";

/* ── SCALE CONFIG — ubah di sini untuk adjust semua teks sekaligus ── */
const SCALE = {
  heading: {
    h1: { size: "44px", lineHeight: "1.1",  letterSpacing: "-0.025em" },
    h2: { size: "28px", lineHeight: "1.2",  letterSpacing: "-0.02em"  },
    h3: { size: "20px", lineHeight: "1.3",  letterSpacing: "-0.01em"  },
  },
  body: {
    lg: { size: "20px", lineHeight: "1.8",  letterSpacing: "0"        },
    md: { size: "16px", lineHeight: "1.75", letterSpacing: "0"        },
    sm: { size: "12px", lineHeight: "1.7",  letterSpacing: "0"        },
  },
  label: {
    md: { size: "14px", lineHeight: "1.5",  letterSpacing: "0.08em"   },
    sm: { size: "10px", lineHeight: "1.5",  letterSpacing: "0.1em"    },
  },
  mono: {
    md: { size: "13px", lineHeight: "1.65", letterSpacing: "0.04em"   },
    sm: { size: "11px", lineHeight: "1.6",  letterSpacing: "0.06em"   },
  },
} as const;

/* ── WEIGHT MAP ── */
const WEIGHT_MAP = {
  normal: "400",
  medium: "500",
} as const;

/* ── DEFAULT TAG per variant + size ── */
function getDefaultTag(
  variant: Variant,
  size: string
): ElementType {
  if (variant === "heading") {
    if (size === "h1") return "h1";
    if (size === "h2") return "h2";
    if (size === "h3") return "h3";
  }
  if (variant === "label" || variant === "mono") return "span";
  return "p";
}

/* ── FONT FAMILY per variant ── */
function getFontFamily(variant: Variant): string {
  if (variant === "label" || variant === "mono") {
    return "var(--font-mono), monospace";
  }
  return "var(--font-sans), sans-serif";
}

/* ── COLOR per muted/dim flag ── */
function getColor(muted?: boolean, dim?: boolean): string {
  if (dim)   return "var(--text-dim)";
  if (muted) return "var(--text-muted)";
  return "var(--text)";
}

/* ── UPPERCASE for label ── */
function getTextTransform(variant: Variant): string {
  if (variant === "label") return "uppercase";
  return "none";
}

/* ── TYPES ── */
type Variant = keyof typeof SCALE;

type SizeOf<V extends Variant> = keyof (typeof SCALE)[V];

type TypographyProps<V extends Variant> = {
  variant: V;
  size?: SizeOf<V>;
  as?: ElementType;
  weight?: keyof typeof WEIGHT_MAP;
  muted?: boolean;
  dim?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "color">;

/* ── COMPONENT ── */
export function Typography<V extends Variant>({
  variant,
  size,
  as,
  weight = "normal",
  muted,
  dim,
  children,
  className = "",
  style,
  ...rest
}: TypographyProps<V>) {
  /* resolve size — default ke first key kalau tidak diisi */
  const resolvedSize = (size ?? Object.keys(SCALE[variant])[0]) as string;

  /* ambil scale values */
  const scale =
    (SCALE[variant] as Record<string, { size: string; lineHeight: string; letterSpacing: string }>)[resolvedSize];

  /* resolve tag */
  const tag = as ?? getDefaultTag(variant, resolvedSize);

  const computedStyle: React.CSSProperties = {
    fontSize:      scale.size,
    lineHeight:    scale.lineHeight,
    letterSpacing: scale.letterSpacing,
    fontWeight:    WEIGHT_MAP[weight],
    fontFamily:    getFontFamily(variant),
    color:         getColor(muted, dim),
    textTransform: getTextTransform(variant) as React.CSSProperties["textTransform"],
    ...style,
  };

  return createElement(tag, {
    className,
    style: computedStyle,
    ...rest,
  }, children);
}

/* ── USAGE EXAMPLES (hapus setelah paham) ──────────────────────────────

  // Heading
  <Typography variant="heading" size="h1">Frontend engineer</Typography>
  <Typography variant="heading" size="h2" weight="medium">About</Typography>

  // Body
  <Typography variant="body" size="lg">Paragraf utama yang panjang.</Typography>
  <Typography variant="body" size="md" muted>Teks sekunder.</Typography>
  <Typography variant="body" size="sm" dim>Teks tersier kecil.</Typography>

  // Label (uppercase, mono, untuk section annotation)
  <Typography variant="label" size="md" dim>01 — about</Typography>

  // Mono (untuk annotation, metadata, tag)
  <Typography variant="mono" size="md" muted>otri.dev</Typography>
  <Typography variant="mono" size="sm" dim>// coming soon</Typography>

  // Override tag
  <Typography variant="body" size="lg" as="span">Inline text</Typography>
  <Typography variant="heading" size="h2" as="div">Bukan heading semantic</Typography>

  // Override style tambahan
  <Typography variant="body" size="md" style={{ maxWidth: "500px" }}>
    Paragraf dengan max width.
  </Typography>

────────────────────────────────────────────────────────────────────── */