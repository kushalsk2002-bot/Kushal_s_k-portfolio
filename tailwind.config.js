/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F3EC",
          dim: "#EFE8DB",
          card: "#FBF8F2",
        },
        ink: {
          DEFAULT: "#1A1815",
          soft: "#3D3935",
          faint: "#8A8479",
        },
        ember: {
          DEFAULT: "#C75B39",
          soft: "#E0865F",
          dim: "#A4472B",
        },
        sage: {
          DEFAULT: "#7A8B7F",
          soft: "#9AAA9E",
        },
        nightpaper: {
          DEFAULT: "#15130F",
          dim: "#1E1B16",
          card: "#221F19",
        },
        nightink: {
          DEFAULT: "#F4F0E8",
          soft: "#C9C3B8",
          faint: "#6E6A60",
        },
        line: {
          light: "#D9D0BF",
          dark: "#332F28",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "ticker": "ticker 28s linear infinite",
      },
    },
  },
  plugins: [],
};
