import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0b2238", light: "#14324f", deep: "#071829" },
        brass: { DEFAULT: "#c8a24c", dark: "#a5822f" },
        sand: { DEFAULT: "#f6f2ea", dark: "#efe7d6" },
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
