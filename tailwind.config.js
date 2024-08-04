/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector"],
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "hsl(209, 23%, 22%)",
        verydarkblue: "hsl(207, 26%, 17%)",
        darkbluetext: "hsl(200, 15%, 8%)",
        darkgray: "hsl(0, 0%, 52%)",
        verylightgray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        nunito: ["'Nunito Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
