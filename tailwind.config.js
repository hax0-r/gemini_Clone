/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colgray': '#f0f4f9',
        'colBlack': '#444746',
      },
      animation: {
        'fade': 'fade 1.5s',
        "spinItem": "spinItem 20s linear infinite"
      }
    },
  },
  plugins: [],
}