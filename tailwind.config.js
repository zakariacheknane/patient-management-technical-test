/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'steel-blue':'#50799E',
        'custom-placeholder': '#50799E26',
        'cyan':'#1AA5C0',
        'light-grey':"#E5EBF0",
      },
      backgroundImage: {
        "custom-gradient":"linear-gradient(to right, #E6F5FF, #F3FAFF, #F7FCFF)",
        'custom-gradient-button':' linear-gradient(108.56deg, #20A8D3 5.8%, #01D1FF 122.34%)',
        'custom-background': "url('./assets/images/Background.png')",
      },
    },
  },
  plugins: [],
};
