/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oswald', ...defaultTheme.fontFamily.sans],
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans], // Default for general text
      },
      colors: {
        'gfg-dark-bg': '#140000',      // Very dark red-black background
        'gfg-card-bg': '#2C0000',      // Darker red-black for cards/surfaces
        'gfg-red': '#A70000',          // A desaturated, deep red
        'gfg-red-hover': '#CC0000',    // Slightly brighter red for hover states
        'gfg-gold': '#F2B500',         // The prominent gold/yellow
        'gfg-gold-hover': '#FFD700',   // Brighter gold for hover states
        'gfg-text-light': '#F5F5DC',   // Off-white/cream for main text
        'gfg-text-dark': '#808080',    // Dark grey for secondary text/placeholders
        'gfg-border': '#5A0000',       // Dark red for borders
        'gfg-gradient-start': '#3A0000', // For background gradients
        'gfg-gradient-end': '#140000',   // For background gradients
      }
    },
  },
  plugins: [],
}