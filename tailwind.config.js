/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,tsx,jsx,ts}",
    "./components/**/*.{js,tsx,jsx,ts}",
    "./pages/**/*.{js,tsx,jsx,ts}",
  ],
  theme: {
    extend: {},
  },
  // Manual dark mode toggle extra config for
  //  document.body.classList.add('dark') to work properly...
  darkMode: 'class',
  plugins: [],
}

