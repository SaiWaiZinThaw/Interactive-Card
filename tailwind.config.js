/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        LightGrayishViolet: "hsl(270, 3%, 87%)",
        DarkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
        FromGradient: "hsl(249, 99%, 64%)",
        ToGradient: "hsl(278, 94%, 30%)",
        ErrorRed: "hsl(0, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
