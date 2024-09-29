/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": "url('./assets/background.jpg')",
      },
      fontFamily: {
        nunito: "'Nunito',sans-serif",
      },
    },
  },
  plugins: [],
};
