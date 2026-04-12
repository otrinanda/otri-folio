export function CornerMark({ size = 7 }: { size?: number }) {
  const base = "absolute border-[var(--border-strong)] border-solid opacity-60";
  const s = `${size}px`;
  return (
    <>
      <span
        className={`${base} top-[-1px] left-[-1px]`}
        style={{ width: s, height: s, borderWidth: "1px 0 0 1px" }}
      />
      <span
        className={`${base} top-[-1px] right-[-1px]`}
        style={{ width: s, height: s, borderWidth: "1px 1px 0 0" }}
      />
      <span
        className={`${base} bottom-[-1px] left-[-1px]`}
        style={{ width: s, height: s, borderWidth: "0 0 1px 1px" }}
      />
      <span
        className={`${base} bottom-[-1px] right-[-1px]`}
        style={{ width: s, height: s, borderWidth: "0 1px 1px 0" }}
      />
    </>
  );
}