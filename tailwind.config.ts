import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f8f7f4",
        text: "#1f2933",
        accent: "#4f6d7a",
        muted: "#eef2f5",
        line: "#dbe3e8"
      },
      boxShadow: {
        card: "0 6px 24px rgba(15, 23, 42, 0.06)"
      },
      borderRadius: {
        soft: "14px"
      },
      maxWidth: {
        prose: "70ch"
      }
    }
  },
  plugins: []
};

export default config;
