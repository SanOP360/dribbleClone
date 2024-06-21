/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "left-bottom": "1px 3px 3px 1px gray",
      },
      borderColor: {
        "custom-gray": "gray",
      },
    },
  },
  plugins: [require("daisyui")],
};
