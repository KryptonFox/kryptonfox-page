/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
        emoji: ['var(--font-emoji)'],
      },
      keyframes: {
        introTop: {
          '0%': { transform: 'translateY(-50vh)', opacity: 0 },
        },
      },
      animation: {
        introTop: 'introTop 1s',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
