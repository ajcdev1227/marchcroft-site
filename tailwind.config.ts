/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    fontSize: {
      nav: `1rem;`,
      'nav-lg': `1rem;`,
      title: `2.5rem;`,
      'title-lg': `3rem;`,
      paragraph: `1.125rem;`,
      'paragraph-lg': `1.5rem;`,
      button: `1.25rem;`,
      'button-lg': `1.5rem;`,
    },
    extend: {
      margin: {
        'm-5%': '5%', // p-80% - should work
      },
      screens: {
        'xl': '1113px',
      },
      colors: {
        primary: {
          500: '#FFF;',
          800: '#FFF;',
        }
      },
      fontFamily: {
        objektivMk2: ['"Objektiv-Mk2"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
