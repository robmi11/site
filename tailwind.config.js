/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: ["selector"],
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      oxford: {
        50: "#f2f8f9",
        100: "#deebef",
        200: "#c1d7e0",
        300: "#95bacb",
        400: "#6395ad",
        500: "#477a93",
        600: "#3e647c",
        700: "#375367",
        800: "#334757",
        900: "#2b3945",
        950: "#1b2731",
      },
    },
    fontFamily: {
      nunito: ["'Nunito Sans'", "sans-serif"],
    },
  },
  plugins: [daisyui],
};
