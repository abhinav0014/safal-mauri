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
        honey: {
          50:  "#FFF8ED",
          100: "#FFF0D6",
          200: "#FDDCA8",
          300: "#FBC270",
          400: "#F8A030",
          500: "#E8870A",
          600: "#C96B05",
          700: "#A05008",
          800: "#7D3F0E",
          900: "#68340F",
        },
        forest: {
          50:  "#F3F7EE",
          100: "#E2EDD8",
          200: "#C5DBB4",
          300: "#9DC286",
          400: "#78A85E",
          500: "#5A8C43",
          600: "#456E33",
          700: "#38572B",
          800: "#2F4625",
          900: "#293C21",
        },
        cream: {
          50:  "#FDFAF5",
          100: "#FAF3E8",
          200: "#F5E6CE",
          300: "#EDD4AB",
          400: "#E2BB7F",
          500: "#D6A05A",
        },
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"],
        sans: ["Trebuchet MS", "Helvetica Neue", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "honey-gradient": "linear-gradient(135deg, #FFF8ED 0%, #FFF0D6 50%, #FDDCA8 100%)",
        "hero-overlay": "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
