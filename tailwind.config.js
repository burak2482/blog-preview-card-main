/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        customNormal: ['MyCustomFont1', 'sans-serif'],
        customSemiBold: ['MyCustomFont2', 'sans-serif'],
        customItalic: ['MyCustomFont3', 'sans-serif'],
        customExtraBold: ['MyCustomFont4', 'sans-serif'],
      },
      colors: {
        customYellow: 'rgb(244, 208, 78)', 
        customGrey: 'rgb(107, 107, 107)', 
        customBlack: 'rgb(18, 18, 18)',
      },
    },
  },
  plugins: [],
};
