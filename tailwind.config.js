/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      top: {
        32: "32px",
      },
      left: {
        64: "30px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#EC4899",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      screens: {
        "max-sm": { max: "639px" }, // This applies for screens smaller than 640px
        "max-xs": { max: "385px" }, // This applies for screens smaller than 640px
      },
    },
  },
  plugins: [],
};
