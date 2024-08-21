import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#26536d",
          "50": "#eff9fc",
          "100": "#d6f0f7",
          "200": "#b2e0ef",
          "300": "#7dcae3",
          "400": "#41aacf",
          "500": "#258eb5",
          "600": "#227298",
          "700": "#225e7c",
          "800": "#26536d",
          "900": "#224257",
          "950": "#112a3b",
        },
        secondary: {
          DEFAULT: "#a58ad6",
          "50": "#f7f6fc",
          "100": "#f1eef9",
          "200": "#e4dff5",
          "300": "#d0c6ec",
          "400": "#b7a5e0",
          "500": "#a58ad6",
          "600": "#8c63c4",
          "700": "#7b51b0",
          "800": "#674394",
          "900": "#553979",
          "950": "#362451",
        },
        accent: {
          DEFAULT: "#80389f",
          "50": "#fbf6fd",
          "100": "#f5ecfb",
          "200": "#ead8f6",
          "300": "#dbb9ee",
          "400": "#c68fe3",
          "500": "#ac63d2",
          "600": "#9143b6",
          "700": "#80389f",
          "800": "#642d7b",
          "900": "#552966",
          "950": "#351141",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
