/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "custom": "200px"
      },
      colors: {
        "smecher": "#d3d3d3"
      }
    },
  },
  plugins: [],
}
