/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "var(--accent-color)",
        "primary-text-dark-navy": "var(--primary-text-dark-navy)",
        primaryblue: "var(--primaryblue)",
        primarygreen: "var(--primarygreen)",
        "scondary-light-green": "var(--scondary-light-green)",
        "secondary-light-blue": "var(--secondary-light-blue)",
        "secondary-text-muted-grey": "var(--secondary-text-muted-grey)",
      },
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        "heading-1": "var(--heading-1-font-family)",
        "heading-2": "var(--heading-2-font-family)",
        "heading-3": "var(--heading-3-font-family)",
        "heading-4": "var(--heading-4-font-family)",
        "UI-text": "var(--UI-text-font-family)",
      },
    },
  },
  plugins: [],
};
