/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7D73C1",
        secondary: "#FF727D",
        orangeEduSri: "#F3AC46",
        greenEduSri: "#C0FAC7",
        textColor: "#090526",
      },
    },
  },
  plugins: [],
};
