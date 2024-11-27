/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",  // Adjusted to include all HTML files in subdirectories
    "./src/**/*.{js,jsx,ts,tsx}", // Added paths for your JavaScript/TypeScript files if you're using them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


