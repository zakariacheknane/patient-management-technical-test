/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'steel-blue': '#50799E',
        'custom-placeholder': '#50799E26',
        'cyan': '#1AA5C0',
        'light-grey': "#E5EBF0",
        'dark-royal-blue': "#335D84",
        'gray':"#858585",
        'custom-gray': '#6B7280',
      },

      backgroundImage: {
        'custom-gradient-navbar': "linear-gradient(89.8deg, #E6F5FF -0.13%, #F3FAFF 23.56%, #F7FCFF 99.83%)",
        'custom-gradient-div': "linear-gradient(89.36deg, #FDFDFD 8.29%, #EEFCFD 98.21%)",
        'custom-gradient-button': "linear-gradient(108.56deg, #20A8D3 5.8%, #01D1FF 122.34%)",
        'custom-background': "url('./assets/images/Background.png')",
        'custom-gradient-2': "linear-gradient(90.84deg, #2786DD 2.37%, #19C8D3 101.75%)", 

      },
      boxShadow: {
        'custom': '0px 2px 4px 0px #00000040', 
        'custom-navbar': '0px 1px 4px 0px #00467740',
        'custom-div': "2.86px 3.81px 3.81px 0px #0D88B4",
        'custom-second': "0px 4px 4px 0px #50799E57",
        'custom-rendez':"0px 2.5px 5px 0px #00000040",
        'custom-pagination':"0px 1.3px 5.2px 0px #0000001F",
        'custom-pagination-item':"0px 1.46px 5.85px 0px #1A1A431A",

      },
      
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
    

  },


  plugins: [],
};

