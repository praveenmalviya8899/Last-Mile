/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Approved Palette (Requirement #3)
        brand: {
          green: '#168E6A',
          'green-hover': '#127355',
          'green-light': '#E8F6F1',
          'green-soft': '#D1ECE3',
          'green-dark': '#0E5C44',
          yellow: '#FBB03B',
          'yellow-hover': '#E69F30',
          'yellow-light': '#FFF7EB',
          'yellow-border': '#FDE6BE',
          grey: '#B4B6B7',
          'grey-light': '#E2E5E3',
          'grey-border': '#EAECEA',
          dark: '#292D32',
          'dark-surface': '#33383F',
          'dark-card': '#3A4048',
          'dark-border': '#495059',
          bg: '#F7F8F7',
          surface: '#F1F3F2',
          card: '#FFFFFF',
        },
        status: {
          green: '#168E6A',
          'green-light': '#E8F6F1',
          yellow: '#FBB03B',
          'yellow-light': '#FFF7EB',
          rose: '#E53935',
          'rose-light': '#FDE8E8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 12px -2px rgba(41, 45, 50, 0.05), 0 2px 6px -1px rgba(41, 45, 50, 0.03)',
        'modal': '0 20px 30px -10px rgba(41, 45, 50, 0.12), 0 10px 15px -5px rgba(41, 45, 50, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out forwards',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
