/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
        colors: {
            "pallet-white": "#f7f8f9",
            "pallet-purple": "#a226d0",
            "pallet-black": "#160b30",
            "pallet-blue": "#00baff",
        }
    },
  },
  plugins: [],
}
