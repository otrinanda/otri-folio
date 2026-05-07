type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  opacity?: number;
  className?: string;
};

export function Separator({
  orientation = "horizontal",
  opacity = 1,
  className = "",
}: SeparatorProps) {
  const style = {
    background: `color-mix(in srgb, var(--border) ${opacity * 100}%, transparent)`,
  };

  if (orientation === "vertical") {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={`inline-block w-px self-stretch ${className}`}
        style={style}
      />
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={`w-full h-px border-none ${className}`}
      style={style}
    />
  );
}
