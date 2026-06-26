/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        caveat: ['"Caveat"', 'cursive'],
        fira: ['"Fira Code"', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        yellow: 'var(--yellow)',
        accent: 'var(--accent)',
        pink: 'var(--pink)',
        white: 'var(--white)',
        cyan: 'var(--cyan)',
      },
      borderRadius: { DEFAULT: '0', neo: '0' },
      borderWidth: { neo: '3px', neoSm: '2px', neoLg: '4px' },
      boxShadow: {
        neo: '8px 8px 0 var(--border)',
        neoSm: '4px 4px 0 var(--border)',
        neoLg: '12px 12px 0 var(--border)',
      },
      animation: {
        'gradient-move': 'gradientMove 8s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
