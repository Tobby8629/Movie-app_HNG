/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '5.5/12': '46%',
        '3.5/12': '30%',
        '2.8/12': '22%',
        '8.5/12': '70%',
      },
      borderWidth: {
        '1': '1px'
      },
      height: {
        '5.5/6': "90%"
      },
      fontSize: {
        '0.5': '0.70rem'
      }
    },
  },
  plugins: [],
}
