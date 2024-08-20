/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        "blue-900": "#0B0D17",
        "blue-300": "#D0D6F9",
        "white": "#fff",
        "nav-bg-color": "rgba(255, 255, 255, 0.05"
      },
      // backgroundImage: {
      //   "home-bg-desktop": "url('/assets/home/background-home-desktop.jpg')",
      // }
    },
  },
  plugins: [],
}

