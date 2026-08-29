export type Theme = {
  id: string;
  label: string;
  /** Themes I authored, as opposed to ones shipped with Omarchy. */
  mine: boolean;
  note: string;
  repo?: string;
  /** Palette shown as swatches on the theme cards. */
  swatches: string[];
};

/**
 * Palettes are lifted from the colors.toml of each Omarchy theme. The `dim`
 * and `link` tones are picked from within each palette to clear 4.5:1 against
 * that theme's background, since a few of the raw accents sit below it.
 */
export const themes: Theme[] = [
  {
    id: "ethiopia",
    label: "Ethiopia",
    mine: true,
    note: "Gondarine church murals and Orthodox icon painting. Parchment, church gold, terracotta and indigo over an umber ground.",
    repo: "https://github.com/eyasuk/omarchy-ethiopia",
    swatches: ["#d9a441", "#e06547", "#d17f36", "#849755", "#649896", "#6291bd", "#be7690"],
  },
  {
    id: "osaka-jade",
    label: "Osaka Jade",
    mine: false,
    note: "Deep jade and warm bone. The one I actually run most days.",
    swatches: ["#509475", "#FF5345", "#a2734b", "#549e6a", "#2DD5B7", "#8CD3CB", "#D2689C"],
  },
  {
    id: "miasma",
    label: "Miasma",
    mine: false,
    note: "Muted olive and rust on charcoal. Low contrast on purpose, easy on long sessions.",
    swatches: ["#78824b", "#685742", "#8d6242", "#5f875f", "#c9a554", "#b36d43", "#bb7744"],
  },
  {
    id: "solitude",
    label: "Solitude",
    mine: false,
    note: "Almost no hue at all. When I want the editor to disappear.",
    swatches: ["#798186", "#565d60", "#707070", "#9fa5a9", "#d9dbdc", "#a5aeb4", "#aeaeae"],
  },
];

export const themeIds = themes.map((t) => t.id);
export const defaultTheme = "solitude";
export const STORAGE_KEY = "theme";
