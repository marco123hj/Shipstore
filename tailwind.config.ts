import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b2238",
          light: "#14324f",
          deep: "#071829",
        },
        brass: {
          DEFAULT: "#c8a24c",
          light: "#e0c079",
          dark: "#a5822f",
        },
        sand: "#f6f2ea",
        sea: "#1f6f8b",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
