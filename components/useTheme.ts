"use client";

import { useSyncExternalStore } from "react";
import { STORAGE_KEY, defaultTheme, themeIds } from "@/lib/themes";

/**
 * The applied theme lives on <html data-theme>, written before first paint by
 * the inline script in layout.tsx. Treating that attribute as the single
 * source of truth keeps every consumer in sync. Change the theme in the
 * header and the theme cards update with it, with no provider to thread
 * through the tree.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme ?? defaultTheme;
}

function getServerSnapshot() {
  return defaultTheme;
}

export function setTheme(id: string) {
  if (!themeIds.includes(id)) return;
  document.documentElement.dataset.theme = id;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Private browsing or blocked storage, so the theme applies for this visit only.
  }
  listeners.forEach((listener) => listener());
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
