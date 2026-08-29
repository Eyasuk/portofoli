"use client";

import { SocialIcon } from "react-social-icons";
import { socials } from "./socials";

/**
 * Icons inherit the theme via `currentColor` rather than using brand colours,
 * so the row re-tints with the rest of the page when the theme changes.
 */
export function SocialRow({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <span
          key={social.name}
          className="inline-flex text-[var(--fg-dim)] transition-colors hover:text-[var(--link)]"
        >
          <SocialIcon
            url={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            fgColor="currentColor"
            bgColor="transparent"
            style={{ height: size, width: size }}
          />
        </span>
      ))}
    </div>
  );
}
