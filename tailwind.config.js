/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 2px 4px 0px rgba(0, 0, 0, 0.10)',
        custom1: '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
     
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.96%, rgba(0, 0, 0, 0.60) 71.87%)',
      },
    },
  },
  plugins: [],
}