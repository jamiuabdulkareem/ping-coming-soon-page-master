/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "hsl(223, 87%, 63%)",
      secondary: {
        100: "hsl(223, 100%, 88%)",
        200: "hsl(354, 100%, 66%)",
      },
      grey: {
        100: "hsl(0, 0%, 59%)",
        200: "hsl(209, 33%, 12%)",
      },
    },
    fontFamily: {
      sans: "Libre Franklin, sans-serif",
    },
  },
  plugins: [],
};
