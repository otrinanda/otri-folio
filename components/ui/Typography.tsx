"use client";

import { ElementType, ReactNode, HTMLAttributes, createElement } from "react";

/* ── SCALE CONFIG — ubah di sini untuk adjust semua teks sekaligus ── */
/* ── FLUID TYPOGRAPHY: clamp(mobile, calc(offset + slope*vw), desktop)
     mobile  = ukuran asal  (< 768px)
     desktop = ukuran ×1.5  (> 1280px)
     formula : offset = mobile - slope*768 ; slope = (desktop-mobile)/512
   ── */
const SCALE = {
  heading: {
    h1: { size: "clamp(40px, calc(10px + 3.906vw), 60px)", lineHeight: "1.1",  letterSpacing: "0.025em" },
    h2: { size: "clamp(32px, calc(8px + 3.125vw), 48px)",  lineHeight: "1.2",  letterSpacing: "0.02em"  },
    h3: { size: "clamp(24px, calc(6px + 2.344vw), 36px)",  lineHeight: "1.3",  letterSpacing: "0.01em"  },
  },
  body: {
    xl: { size: "clamp(24px, calc(6px + 2.344vw), 36px)",  lineHeight: "1.8",  letterSpacing: "0"        },
    lg: { size: "clamp(20px, calc(5px + 1.953vw), 30px)",  lineHeight: "1.8",  letterSpacing: "0"        },
    md: { size: "clamp(16px, calc(4px + 1.563vw), 24px)",  lineHeight: "1.75", letterSpacing: "0"        },
    sm: { size: "clamp(13px, calc(2.5px + 1.367vw), 20px)", lineHeight: "1.7", letterSpacing: "0"        },
  },
  label: {
    lg: { size: "clamp(16px, calc(4px + 1.563vw), 24px)",  lineHeight: "1.5",  letterSpacing: "0.08em"   },
    md: { size: "clamp(14px, calc(3.5px + 1.367vw), 21px)", lineHeight: "1.5", letterSpacing: "0.08em"   },
    sm: { size: "clamp(11px, calc(2px + 1.172vw), 17px)",  lineHeight: "1.5",  letterSpacing: "0.1em"    },
  },
  mono: {
    xl: { size: "clamp(20px, calc(5px + 1.953vw), 30px)",  lineHeight: "1.65", letterSpacing: "0.04em"   },
    lg: { size: "clamp(16px, calc(4px + 1.563vw), 24px)",  lineHeight: "1.65", letterSpacing: "0.04em"   },
    md: { size: "clamp(14px, calc(3.5px + 1.367vw), 21px)", lineHeight: "1.65", letterSpacing: "0.04em"  },
    sm: { size: "clamp(11px, calc(2px + 1.172vw), 17px)",  lineHeight: "1.6",  letterSpacing: "0.06em"   },
  },
} as const;

/* ── WEIGHT MAP ── */
const WEIGHT_MAP = {
  normal:   "400",
  medium:   "500",
  semibold: "600",
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