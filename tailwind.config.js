/** @type {import('tailwindcss').Config} */
module.exports = {
content: [,
   "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color': 'var(--base-color)',
        'line-color': 'var(--line-color)',
        'hover-color': 'var(--hover-color)',
        'text-color': 'var(--text-color)',
        'accent-color': 'var(--accent-color)',
        'secondary-text-color': 'var(--secondary-text-color)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

