/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#f7f3ea',
          dark: '#14120e',
        },
        surface: {
          light: '#ffffff',
          'light-2': '#fbf8f0',
          dark: '#1c1a15',
          'dark-2': '#26231d',
        },
        ink: {
          light: '#211c14',
          'light-soft': '#5c5548',
          'light-faint': '#948c7a',
          dark: '#f3efe4',
          'dark-soft': '#c4bca8',
          'dark-faint': '#7e7666',
        },
        line: {
          light: '#e7dfcb',
          dark: '#332f26',
        },
        clay: {
          50: '#fbf1e8',
          100: '#f2d9c1',
          300: '#d99a5f',
          500: '#b5662f',
          600: '#96501f',
          700: '#743d18',
        },
        moss: {
          50: '#eef3e4',
          100: '#d3e2b8',
          300: '#94b364',
          500: '#5c7f37',
          600: '#476226',
          700: '#334a1a',
        },
        soil: {
          red: '#a8562f',
          black: '#332e27',
          alluvial: '#547a3d',
          laterite: '#8a3b2e',
        },
      },
      fontFamily: {
        display: ['"Zilla Slab"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['13.5px', { lineHeight: '1.55' }],
        base: ['15px', { lineHeight: '1.65' }],
        lg: ['17px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.4' }],
        '2xl': ['26px', { lineHeight: '1.25' }],
        '3xl': ['34px', { lineHeight: '1.15' }],
        '4xl': ['46px', { lineHeight: '1.08' }],
        '5xl': ['60px', { lineHeight: '1.02' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        fadeIn: 'fadeIn 0.4s ease both',
      },
    },
  },
  plugins: [],
}
