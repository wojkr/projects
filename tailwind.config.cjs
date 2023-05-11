/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-black": "#0D0C0A",
        "main-dark": "#174C4F",
        "main-white": "#FFF",

        "orange-dark": "#FF9666",
        "orange-light": "#F5E9BE",

        "gray-20": "#F5F5F5",
        "gray-50": "#E6E6E6",
        "gray-100": "#D2D2D2",
        "gray-500": "#979797",
        "primary-50": "#E5F2FF",
        "primary-100": "#DBEDFF",
        "primary-300": "#8FB3D6",
        "primary-500": "#007AFF",
        "secondary-400": "#FFB2B2",
        "secondary-500": "#FF4D4D",
      },
      backgroundImage: (theme) => ({}),
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
        normal: ["Anonymous Pro", "monospace"],
        title: ["Bebas Neue", "cursive"],
      },
      content: {
        bg: "url('../public/assets/bg.png')",
      },
      transitionDelay: {
        600: "600ms",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      xl: "1920px",
      xxl: "2500px",
      xxxl: "3500px",
    },
  },
  plugins: [],
};
