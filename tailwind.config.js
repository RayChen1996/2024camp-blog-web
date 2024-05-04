/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  darkMode: false,
  plugins: [daisyui],
  daisyui: {
    theme: ["light"],
  },
};
