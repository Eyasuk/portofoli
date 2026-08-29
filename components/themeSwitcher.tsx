"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette } from "lucide-react";
import { themes } from "@/lib/themes";
import { setTheme, useTheme } from "./useTheme";

export function ThemeSwitcher() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function pick(id: string) {
    setTheme(id);
    setOpen(false);
  }

  const current = themes.find((t) => t.id === theme) ?? themes[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Theme: ${current.label}. Change theme`}
        className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--fg-dim)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
      >
        <Palette className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="flex items-center gap-1" aria-hidden="true">
          {current.swatches.slice(0, 4).map((c) => (
            <span
              key={c}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Theme"
          className="absolute right-0 z-30 mt-2 w-64 overflow-hidden rounded-lg border border-[var(--border-strong)] bg-[var(--bg-deep)] py-1 shadow-lg"
        >
          {themes.map((t) => (
            <li key={t.id}>
              <button
                type="button"
                role="option"
                aria-selected={t.id === theme}
                onClick={() => pick(t.id)}
                className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--surface)]"
              >
                <Check
                  className={`h-3.5 w-3.5 shrink-0 ${t.id === theme ? "text-[var(--link)]" : "opacity-0"}`}
                  aria-hidden="true"
                />
                <span className="flex-1 text-[var(--fg)]">
                  {t.label}
                  {t.mine && (
                    <span className="ml-2 text-[10px] uppercase tracking-wide text-[var(--fg-dim)]">
                      mine
                    </span>
                  )}
                </span>
                <span className="flex shrink-0 items-center gap-1" aria-hidden="true">
                  {t.swatches.slice(0, 5).map((c) => (
                    <span
                      key={c}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
