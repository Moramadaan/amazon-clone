/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container:"1440px"
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        titleFont: "Roboto", 
        bodyFont: "Poppins", 
      },
      colors: {
        amazon_light:"#232f3e",
        amazon_blue: "#0F1111",
        amazon_yelow: "#febd69",
        textWhite: "#ffffff",
        textLight: "#ccc",
        boxQuantity: "#f0f2f2",
        footerbotton: "#131a22",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        inputShadow: "0px 0px 3px 2px rgba(288,121,17 / 50%",

      },
    },
  },
  plugins: [],
}