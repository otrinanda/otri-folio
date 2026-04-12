type TagVariant = "default" | "core" | "os";
 
export function Tag({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: TagVariant;
}) {
  const base =
    "font-mono text-[11px] px-2.5 py-[3px] rounded-[3px] border inline-block";
 
  const variants: Record<TagVariant, string> = {
    default: "border-[var(--border)] text-[color:var(--text-muted)] bg-[var(--tag-bg)]",
    core:    "border-[var(--border-strong)] text-[color:var(--text)]  bg-[var(--tag-bg)]",
    os:      "border-[rgba(110,231,183,0.2)] text-[#6ee7b7] bg-[rgba(110,231,183,0.08)]",
  };
 
  return (
    <span className={`${base} ${variants[variant]}`}>{children}</span>
  );
}