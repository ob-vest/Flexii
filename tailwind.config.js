/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FECE00", // Replace with your desired primary color
        secondary: "#FFFFFF", // Replace with your desired secondary color
        mainBG: "#000000",
      },
    },
  },
  plugins: [],
};
