import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundColor: {
        primary: "#2B3530",
        secondary: "#CED1BF",
        lightgreen: "#30493D",
      },
      textColor: {
        primary: "#CFCABD",
        secondary: "#C37A55",
      },
      screens: {
        sm: "450px",
      },
    },
  },
  plugins: [],
} satisfies Config;
