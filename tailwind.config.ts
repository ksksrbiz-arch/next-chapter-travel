import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm travel-journal palette — sun-faded paper, espresso ink, terracotta.
        ink: { DEFAULT: "#2A211A", soft: "#3E322A" }, // espresso brown (text + dark sections)
        paper: { DEFAULT: "#D9B68C", deep: "#CBA475" }, // warm tan / camel
        cream: { DEFAULT: "#F3E7D2", deep: "#EADBBF" }, // soft parchment (light bands + dark-section text)
        gold: { DEFAULT: "#B5663A", soft: "#C8804F" }, // terracotta accent
        clay: { DEFAULT: "#9C4A28", soft: "#BC6238" }, // deep rust
        sea: { DEFAULT: "#5E7A74", soft: "#7C968F" }, // muted sage-teal (cruise imagery)
        stone: { DEFAULT: "#7A6A57", soft: "#9A8A75" }, // warm taupe (muted text)
      },
      fontFamily: {
        script: ["var(--font-script)", "Pinyon Script", "cursive"],
        display: ["var(--font-mulish)", "system-ui", "sans-serif"],
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
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
        card: "0 1px 2px rgba(42,33,26,0.05), 0 12px 32px -12px rgba(42,33,26,0.22)",
        lift: "0 2px 4px rgba(42,33,26,0.07), 0 28px 60px -24px rgba(42,33,26,0.32)",
        glow: "0 0 0 1px rgba(42,33,26,0.04), 0 18px 50px -20px rgba(156,74,40,0.30)",
      },
      transitionTimingFunction: {
        fluid: "cubic-bezier(0.16,1,0.3,1)",
        spring: "cubic-bezier(0.34,1.56,0.64,1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
