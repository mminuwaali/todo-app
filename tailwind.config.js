/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  presets: [require("nativewind/preset")],
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.0rem",
        "5xl": "2.5rem",
        "6xl": "3.0rem",
        "7xl": "3.5rem",
        "8xl": "4.0rem",
        "9xl": "4.5rem",
        "10xl": "5.0rem",
      },
      spacing: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
