/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // COLORS
      colors: {
        "blue-900": "#0B0D17",
        "blue-300": "#D0D6F9",
        white: "#fff",
        "opaque-white": "rgba(255,255,255,0.25)",
        "nav-bg-color": "rgba(255,255,255,0.05",
      },
      // FONTS
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },

      // SPACING
      spacing: {
        "spacing-25": ".2rem",
        "spacing-150": "1.2rem",
        "spacing-200": "1.6rem",
        "spacing-300": "2.4rem",
        "spacing-400": "3.2rem",
        "spacing-500": "4rem",
        "spacing-600": "4.8rem",
        "spacing-800": "6.4rem",
        "spacing-1000": "8rem",
      },
      

      // MEDIA QUERY
      screens: {
        "big-desktop": { max: "87.499em" }, // 1400px
        laptop: { max: "80em" }, // 1280px
        "tab-land": { max: "74.999em" }, // 1200px
        "custom-1050": { max: "65.624em" }, // 1050px
        "tab-port": { max: "61.999em" }, // 992px
        "custom-915": { max: "57.187em" }, // 915px
        "custom-850": { max: "53.124em" }, // 850px
        "land-phone": { max: "47.999em" }, // 768px
        "custom-680": { max: "42.499em" }, // 680px
        phone: { max: "35.999em" }, // 576px
      },
    },
  },
  plugins: [],
};
