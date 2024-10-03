/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #E6F5FF, #F3FAFF, #F7FCFF)",
      },
    },
  },
  plugins: [],
};
