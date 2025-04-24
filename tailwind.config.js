/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
      animation: {
        flip: 'flip 1s forwards',
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline-black': {
          textShadow: `
          -2px -2px 0 black,
          2px -2px 0 black,
          -2px 2px 0 black,
          2px 2px 0 black,
          0px -2px 0 black,
          0px 2px 0 black,
          -2px 0px 0 black,
          2px 0px 0 black
          `,
        },
      });
    },
  ],
};