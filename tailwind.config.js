/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      colors: {
        kahoot: {
          purple: '#46178F',
          purpleDark: '#25076B',
          purpleLight: '#6535B5',
          red: '#E21B3C',
          redDark: '#B0102B',
          blue: '#1368CE',
          blueDark: '#0D4B96',
          yellow: '#D89E00',
          yellowDark: '#A37600',
          green: '#26890C',
          greenDark: '#1A6107',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2.4s infinite',
        'pop-in': 'popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.85) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};
