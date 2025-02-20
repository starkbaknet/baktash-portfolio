import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        primary: "#00aaff",
        secondary: "#111827",
        cardBg: "#1f2937",
        textLight: "#d1d5db",
      },
    },
  },
  plugins: [],
} satisfies Config;
