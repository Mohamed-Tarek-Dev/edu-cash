/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    fontFamily: {
      clashExtraLight: ['ClashDisplay-Extralight'],
      clashLight: ['ClashDisplay-Light'],
      clashRegular: ['ClashDisplay-Regular'],
      clashMedium: ['ClashDisplay-Medium'],
      clashSemiBold: ['ClashDisplay-Semibold'],
      clashBold: ['ClashDisplay-Bold']
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        navyColor: 'hsl(226, 57%, 10%)',
        blueColor: 'hsl(215, 71%, 52%)',
        paraColor: '#bdbdbd'
      }
    }
  },
  plugins: []
}
