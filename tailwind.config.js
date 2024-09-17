/** @type {import('tailwindcss').Config} */

const { color } = require('framer-motion')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-family)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 19s linear infinite',
      },
      backgroundImage: {
        circularLight: 
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 10%);',
        circularDark: 
        'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 10%);',
        circularLightLg: 
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 8px%);',
        circularDarkLg: 
        'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 8%);',
        circularLightMd: 
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 6px%);',
        circularDarkMd: 
        'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 6%);',
        circularLightSm: 
        'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 4px%);',
        circularDarkSm: 
        'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 4%);',

      }
      
      
    },
   screens: {
        // Pantallas grandes
        'min-2xl': { 'min': '1536px' }, // Para pantallas superiores a 1536px
        
        // Pantallas estándar
        '2xl': { 'max': '1535px' }, // => @media (max-width: 1535px)
        xl: { 'max': '1279px' },    // => @media (max-width: 1279px)
        lg: { 'max': '1023px' },    // => @media (max-width: 1023px)
        md: { 'max': '767px' },     // => @media (max-width: 767px)
        sm: { 'max': '639px' },     // => @media (max-width: 639px)
        xs: { 'max': '479px' },     // => @media (max-width: 479px)

        // Pantallas extremadamente pequeñas (añadir si es necesario)
        'xxs': { 'max': '359px' },  // => @media (max-width: 359px)
      },
    },
  plugins: [],
}