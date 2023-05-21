/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-green": "#03C03C",
        "c-blue": "#0070FF",
        "c-text": "#090446",
      },
    },
  },
  plugins: [],
};
