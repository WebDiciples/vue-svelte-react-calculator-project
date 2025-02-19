/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "color-60": "#f6fafd",
        "color-30": "#e5eaed",
        "color-10": "#fa6035",
        "dark-color-60": "#20232a",
        "dark-color-30": "#2b2f38",
        "dark-color-10": "#fa6735",
      },
    },
  },
  plugins: [],
};
