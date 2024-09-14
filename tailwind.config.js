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
        "max-xs": { max: "385px" }, // This applies for screens smaller than 385px
        "max-lg": { max: "1286px" }, // This applies for screens smaller than 1286px
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        upDown: "upDown 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
