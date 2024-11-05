/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "black-whiteblack": "var(--black-whiteblack)",
        "black-whitewhite": "var(--black-whitewhite)",
        "dark-modebackground": "var(--dark-modebackground)",
        "dark-modefooter": "var(--dark-modefooter)",
        "light-modefooter": "var(--light-modefooter)",
        "light-modenavbar": "var(--light-modenavbar)",
        "neutral-100": "var(--neutral-100)",
        "neutral-200": "var(--neutral-200)",
        "neutral-300": "var(--neutral-300)",
        "neutral-400": "var(--neutral-400)",
        "neutral-50": "var(--neutral-50)",
        "neutral-500": "var(--neutral-500)",
        "neutral-600": "var(--neutral-600)",
        "neutral-700": "var(--neutral-700)",
        "neutral-800": "var(--neutral-800)",
        "neutral-900": "var(--neutral-900)",
        "neutral-950": "var(--neutral-950)",
        "tanamanku-1": "var(--tanamanku-1)",
        "tanamanku-2": "var(--tanamanku-2)",
        "tanamanku-3": "var(--tanamanku-3)",
        "tanamanku-4": "var(--tanamanku-4)",
        "tanamanku-5": "var(--tanamanku-5)",
        "tanamanku-6": "var(--tanamanku-6)",
        "tanamanku-7": "var(--tanamanku-7)",
      },
    },
  },
  plugins: [],
};
