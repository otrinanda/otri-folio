export function CornerMark({ size = 7, radius }: { size?: number; radius?: number | string }) {
  const base = "absolute border-[var(--border-strong)] border-solid opacity-80";
  const s = `${size}px`;
  const r = radius !== undefined ? (typeof radius === "number" ? `${radius}px` : radius) : undefined;
  return (
    <>
      <span
        className={`${base} -top-px -left-px`}
        style={{ width: s, height: s, borderWidth: "2px 0 0 2px", borderTopLeftRadius: r }}
      />
      <span
        className={`${base} -top-px -right-px`}
        style={{ width: s, height: s, borderWidth: "2px 2px 0 0", borderTopRightRadius: r }}
      />
      <span
        className={`${base} -bottom-px -left-px`}
        style={{ width: s, height: s, borderWidth: "0 0 2px 2px", borderBottomLeftRadius: r }}
      />
      <span
        className={`${base} -bottom-px -right-px`}
        style={{ width: s, height: s, borderWidth: "0 2px 2px 0", borderBottomRightRadius: r }}
      />
    </>
  );
}