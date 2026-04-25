import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Daruma brand tokens
        daruma: {
          red: '#E94256',
          'red-soft': '#F58592',
          slate: '#364550',
          'slate-soft': '#5A6B78',
          cream: '#F5F1EA',
          'cream-deep': '#EBE3D5',
          ink: '#1F2A33',
          line: '#E5DED2',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        soft: '14px',
        card: '20px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,42,51,0.04), 0 8px 24px rgba(31,42,51,0.06)',
        lift: '0 10px 30px rgba(31,42,51,0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
