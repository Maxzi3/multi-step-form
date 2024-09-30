/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "hsl(213, 96%, 18%)",
        secondary: "#f1c40f",
        secondary2: "hsl(243, 100%, 62%)",
        primary2: " hsl(231, 11%, 63%)",
        cool: " hsl(229, 24%, 87%)",
        cool2: " hsl(228, 100%, 84%)",
      },
      backgroundImage: {
        nav: "url('./assets/bg-sidebar-desktop.svg')",
        navMobile: "url('./assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
