/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gov-blue': '#66D3EE',
      },
      spacing: {
        '128': '28rem',
      },
      maxHeight: {
        '128': '72rem',
      },
    },
  },
  plugins: [],
}