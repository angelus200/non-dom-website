import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#00B4D8",
          light: "#48CAE4",
          mid: "#0096C7",
          dark: "#0077B6",
        },
        navy: {
          DEFAULT: "#0A1628",
          light: "#0D1F3C",
          deep: "#061020",
        },
        brand: {
          red: "#FF3B30",
        },
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
