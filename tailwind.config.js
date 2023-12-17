/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "'Noto Serif TC' , serif",
      },
      colors: {
        // NOTE background
        "background-dark": "#3D3D40", // 這裡使用自訂的顏色碼
        "background-50": "#F9F9FC",
        "background-100": "#F3F3F6",
        "background-200": "#EAEAED",
        "background-300": "#D1D1E8",
        "background-400": "#B8B8BB",
        "background-500": "#98989B",
        "background-800": "#3D3D40",
        // text
        "text-main": "#4A4A68",
        "text-100": "#CACDD8",
        "text-200": "#EAEAED",
        "text-300": "#898CA1",
        "text-400": "#71738D",
        "text-500": "#8C8CA1",
        "text-600": "#646478",
        "text-700": "#515164",
        "text-800": "#333345",
        "text-900": "#131424",
        "text-subtext": "#8C8CA1",
        //
        "thirdly-700": "#278364",
        // others
        // primary
        "primary-120": "#FFF5E1",
        "primary-100": "#BF9D7D",
        "primary-80": "#AE9984",
        "primary-60": "#E1D1C2",
        "primary-40": "#F1EAE4",
        "primary-Tint": "#FAF7F5",

        //Neutral
        "Neutral-120": "#140F0A",
        "Neutral-100": "#000000",
        "Neutral-80": "#4B4B4B",
        "Neutral-60": "#909090",
        "Neutral-40": "#ECECEC",
        "Neutral-10": "#F9F9F9",
        "Neutral-0": "#FFFFFF",

        "alert-120": "#C22538",
        "alert-100": "#DA3E51",
        "alert-20": "#F5CCD1",
        "alert-10": "#FDECEF",

        "info-120": "#1D66AC",
        "info-100": "#3BADEF",
        "info-20": "#B1EFFD",
        "info-10": "#E6FBFE",

        "success-120": "#299F65",
        "success-100": "#52DD7E",
        "success-20": "#BCFBBD",
        "success-10": "#E8FEE7",

        // secondary
        "secondary-600": "#F5CF1B",
        // thirdly
        "thirdly-400": "#40B091",
        // "teritary"
        "teritary-200": "#8AD2BD",

        "teritary-800": "#217357",
        thirdly: "#2D9474",
        teritary: "#5EBFA4",
      },

      screens: {
        sm: "480px",
        md: "768px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
