/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          100: '#E0F7FC',
          300: '#00A5CE',
          500: '#0082A3',
          700: '#005F78',
          900: '#003D4D',
        },
        sage: {
          100: '#E8F5E9',
          300: '#BCDBC1',
          500: '#8FBC8F',
          700: '#5F8575',
          900: '#2F4F4F',
        },
        coral: {
          100: '#FFE5E5',
          300: '#FFB3B3',
          500: '#FF8C8C',
          700: '#E66767',
          900: '#B23B3B',
        },
        sand: {
          100: '#FFF6ED',
          300: '#F2D4B1',
          500: '#E6A570',
          700: '#C17B43',
          900: '#8B4513',
        }
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}