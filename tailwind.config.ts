import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'brand-blue': '#237ebc',
        'brand-light-blue': '#c3eaff',
        
        // Secondary Colors
        'brand-coral': '#ff7979',
        'brand-light-coral': '#ffd1d1',
        'brand-cyan': '#68f1fa',
        'brand-light-cyan': '#cffcff',
        
        // Neutral Colors
        'brand-black': '#231f20',
        'brand-gray': '#ada7a9',
        'brand-light-gray': '#e9e6e6',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config 