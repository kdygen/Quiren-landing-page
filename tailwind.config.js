/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Noto Serif"', 'serif'],
        display: ['"Unbounded"', 'sans-serif'],
      },
    },
  },
}
