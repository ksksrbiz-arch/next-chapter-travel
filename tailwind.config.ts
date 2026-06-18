import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Golden-hour palette — the light at the threshold of a journey
        ink: { DEFAULT: "#14333A", soft: "#1C434B" }, // deep dusk teal
        paper: { DEFAULT: "#F7F2E9", deep: "#EFE7D7" }, // warm paper
        gold: { DEFAULT: "#BE7B25", soft: "#D89A3F" }, // golden hour
        clay: { DEFAULT: "#C0543C", soft: "#D2705A" }, // sunset clay
        sea: { DEFAULT: "#2F6F66", soft: "#3E8579" }, // jade sea
        stone: { DEFAULT: "#6B6256", soft: "#8C8375" }, // warm gray
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,51,58,0.04), 0 12px 32px -12px rgba(20,51,58,0.18)",
        lift: "0 2px 4px rgba(20,51,58,0.06), 0 28px 60px -24px rgba(20,51,58,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
