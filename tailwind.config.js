/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '5000': '5000ms'
      },
      animation: {
        'animate-ping-2': 'animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;'
      }
    },
  },
  plugins: [],
}

