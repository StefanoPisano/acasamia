/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        colors: {
            "almost-white": "#FEFDFF",
            "silver": "#C1BFB5",
            "powder-blue": "#8EB1C7",
            "golden-gate-bridge": "#EB4511",
            "rufous": "#B02E0C"
        },
        fontFamily: {
            title: ["Indie Flower", "sans-serif"]
        }
    },
  },
  plugins: [],
}