import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#122a3a", deep: "#0c1e2b", soft: "#26536b" },
        paper: { DEFAULT: "#f1e7d3", warm: "#ece0c8", dark: "#e2d3b4" },
        rust: { DEFAULT: "#c0492c", dark: "#9c3a22", light: "#d8654a" },
        brass: { DEFAULT: "#b5893c", light: "#d3ad63" },
        sea: { DEFAULT: "#2c6e77", dark: "#1f5158" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};

export default config;
