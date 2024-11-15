const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontSize: {
        huge: "11rem",
      },
      colors: {
        primary: "#106592", // Warna biru khusus
        secondary: "#BEEAF7", // Warna hitam khusus
        accent: "#FFAD1F", // Warna kuning khusus
        softGrey: "#F3F3F3",
      },
      boxShadow: {
        custom: "-2px 4px 17.1px 9px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFF 5%, rgba(132, 185, 239, 0.50) 65%, #FFF 95%)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
