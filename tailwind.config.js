/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  presets: [require("nativewind/preset")],
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6366f1",
        glass: "rgba(200, 200, 200, 0.6)",
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
