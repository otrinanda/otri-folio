type TagVariant = "default" | "core" | "os";
type TagSize = "sm" | "md" | "lg";

export function Tag({
  children,
  variant = "default",
  size = "md",
}: {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
}) {
  const base = "font-mono rounded-[3px] border inline-block";

  const sizes: Record<TagSize, string> = {
    sm: "text-[10px] px-1.5 py-px",
    md: "text-[12px] px-2.5 py-[3px]",
    lg: "text-[16px] px-3 py-1",
  };

  const variants: Record<TagVariant, string> = {
    default: "border-[var(--border)] text-[color:var(--text-muted)] bg-[var(--tag-bg)]",
    core:    "border-[var(--border-strong)] text-[color:var(--text)]  bg-[var(--tag-bg)]",
    os:      "border-[rgba(110,231,183,0.2)] text-[#6ee7b7] bg-[rgba(110,231,183,0.08)]",
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]}`}>{children}</span>
  );
}