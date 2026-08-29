export function CustomDivider() {
  return (
    <div
      className="h-px w-full opacity-60"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, var(--border-strong) 0 8px, transparent 8px 14px)",
      }}
    />
  );
}
