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
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        marker: ["Permanent Marker", "cursive"],
        normal: ["Anonymous Pro", "monospace"],
        title: ["Bebas Neue", "cursive"],
      },
      content: {
        evolvetext: "url('./assets/BrandText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
