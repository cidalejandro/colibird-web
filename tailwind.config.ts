import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7B2FBE",
          violet: "#6D28D9",
          magenta: "#C4187E",
          pink: "#DB2777",
          dark: "#08080F",
          surface: "#0F0F1A",
          card: "#141428",
          border: "#1E1E35",
          muted: "#2A2A45",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7B2FBE 0%, #C4187E 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(123,47,190,0.15) 0%, rgba(196,24,126,0.15) 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(123,47,190,0.35) 0%, transparent 70%)",
        "card-glow":
          "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(123,47,190,0.12) 0%, transparent 80%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        pulse_slow: "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
