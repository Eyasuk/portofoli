export function CustomDivider() {
  return (
    <div
      className="h-px w-full opacity-35"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, rgba(255,255,255,0.35) 0 8px, transparent 8px 14px)",
      }}
    />
  );
}
