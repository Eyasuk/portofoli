"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { CustomDivider } from "./customDivide";
import { themes } from "@/lib/themes";
import { setTheme, useTheme } from "./useTheme";

const INSTALL_PREFIX = "omarchy-theme-install ";

function InstallCommand({ repo }: { repo: string }) {
  const [copied, setCopied] = useState(false);
  const command = INSTALL_PREFIX + repo;

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
    } catch {
      // Clipboard blocked, so the command is on screen to copy by hand.
    }
  }

  return (
    <div className="relative z-10 mt-4 flex items-start gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-deep)] px-3 py-2">
      <code className="min-w-0 flex-1 break-all text-xs leading-relaxed text-[var(--fg-dim)]">
        <span className="text-[var(--link)]">$</span> {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Command copied" : "Copy install command"}
        className="mt-0.5 shrink-0 text-[var(--fg-dim)] transition-colors hover:text-[var(--link)]"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export function ThemesSection() {
  const active = useTheme();

  return (
    <section id="themes" className="w-full">
      <CustomDivider />

      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:px-12">
        <h2 className="mb-4 text-2xl">Themes</h2>
        <p className="mb-10 max-w-2xl">
          I run{" "}
          <a
            href="https://omarchy.org"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--link)] hover:underline hover:underline-offset-4"
          >
            Omarchy
          </a>
          , an opinionated Arch and Hyprland setup, and I build themes for it.
          This whole page is wired to those palettes. Pick one and the site
          re-tints with it.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {themes.map((theme) => {
            const isActive = theme.id === active;
            return (
              <article
                key={theme.id}
                className={`relative flex flex-col rounded-lg border p-5 transition-colors ${
                  isActive
                    ? "border-[var(--border-strong)] bg-[var(--surface)]/40"
                    : "cursor-pointer border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[var(--surface)]/20"
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="text-lg">{theme.label}</h3>
                  {theme.mine && (
                    <span className="rounded-full border border-[var(--border-strong)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--link)]">
                      made by me
                    </span>
                  )}
                </div>

                <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
                  {theme.swatches.map((color) => (
                    <span
                      key={color}
                      title={color}
                      className="h-5 w-5 rounded-full border border-black/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm">{theme.note}</p>

                {theme.repo && <InstallCommand repo={theme.repo} />}

                {/*
                  The ::after stretches this button over the whole card, so a
                  click anywhere on the card applies the theme while the real
                  control stays a single focusable button. The install command
                  sits on z-10 to keep its copy button reachable above it.
                */}
                <button
                  type="button"
                  onClick={() => setTheme(theme.id)}
                  disabled={isActive}
                  className="mt-4 self-start text-sm font-medium text-[var(--link)] transition-opacity after:absolute after:inset-0 after:rounded-lg after:content-[''] hover:underline hover:underline-offset-4 disabled:opacity-50 disabled:no-underline"
                >
                  {isActive ? "Currently applied" : `Preview ${theme.label}`}
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <CustomDivider />
    </section>
  );
}
