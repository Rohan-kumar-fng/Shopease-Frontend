/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],  // Make sure these paths match your project structure
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),  // Ensure this plugin is installed
  ],
}
