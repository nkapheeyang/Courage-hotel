/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'dark-gold': '#B8860B',
        black: '#1A1A1A',
        'dark-gray': '#2D2D2D',
        'light-gray': '#F5F5F5',
        'cream': '#FFF8F0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
};
