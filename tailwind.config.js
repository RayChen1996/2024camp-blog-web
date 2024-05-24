/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
  darkMode: false,
  plugins: [daisyui],
  daisyui: {
    theme: ["light"],
  },
};
