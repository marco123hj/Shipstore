import type { Config } from "tailwindcss";

// Shipstore brand — tokens extracted from the live Logic4 theme (main.css).
// Orange #ff7f00, petrol-dark #06384d, green add-to-cart #4caf50, cream #fff7e8.
// Token names kept (navy/brass/sand/ink/green) so component classNames recolor
// in place; `orange` is the explicit accent alias.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#ff7f00", dark: "#e47507", light: "#ffae19" },
        navy: { DEFAULT: "#06384d", light: "#0a4a63", deep: "#052126" },
        brass: { DEFAULT: "#ff7f00", dark: "#e47507" }, // accent/CTA → orange
        sand: { DEFAULT: "#ffffff", dark: "#fff7e8" },   // surfaces → white / warm cream
        ink: { DEFAULT: "#101010", soft: "#1a1e23" },
        green: { DEFAULT: "#4caf50", dark: "#3d8b40" },  // add-to-cart (shipstore green)
      },
      fontFamily: {
        display: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};

export default config;
