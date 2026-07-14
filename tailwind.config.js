/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1238ED',
          light: '#3B5CF6',
        },
        dark: {
          DEFAULT: '#121421',
          light: '#1A1D2E',
        },
        gray: {
          muted: '#919CC9',
        },
      },
      borderRadius: {
        card: '12px',
        button: '20px',
      },
    },
  },
  plugins: [],
};
