import type { Config } from "tailwindcss";

// Shipstore brand: white surfaces + orange accent, dark navy text.
// Token names are kept (navy/brass/sand/ink/green) so existing component
// classNames recolor in place; `orange` is the explicit accent alias.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#f39200", dark: "#d67f00", light: "#ffb84d" },
        navy: { DEFAULT: "#123047", light: "#1c4766", deep: "#0c2233" },
        brass: { DEFAULT: "#f39200", dark: "#d67f00" }, // accent/CTA → orange
        sand: { DEFAULT: "#ffffff", dark: "#f2f5f8" },   // surfaces → white/light-grey
        ink: { DEFAULT: "#16212b", soft: "#3a4650" },
        green: { DEFAULT: "#f39200", dark: "#d67f00" },  // add-to-cart → orange
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};

export default config;
