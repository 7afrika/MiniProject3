module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        light_green_A701: "#58cc02",
        light_green_A700: "#62e002",
        light_blue_A200: "#3fbdf1",
        bluegray_800_a7: "#2e4051a7",
        light_blue_600: "#099ee3",
        red_500: "#ff3333",
        light_blue_400: "#1cb0f6",
        white_A700_95: "#ffffff95",
        black_900: "#000000",
        bluegray_800_90: "#2e405190",
        bluegray_800_9e: "#2e40519e",
        red_A200: "#ff6666",
        gray_800: "#353642",
        gray_900: "#1a242d",
        bluegray_100: "#ced9e3",
        orange_500: "#ff9600",
        teal_50: "#d7e8f0",
        pink_300_1e: "#d04d9d1e",
        orange_400: "#ffa424",
        gray_100: "#f1f4f7",
        bluegray_900: "#273645",
        bluegray_800: "#2e4051",
        yellow_500_59: "#ffe74959",
        bluegray_101: "#ccdde2",
        white_A700: "#ffffff",
      },
      boxShadow: {
        bs3: "0px 3px  0px 0px #ced9e3",
        bs: "0px 5px  0px 0px #ced9e3",
        bs1: "0px 5px  0px 0px #099ee3",
        bs2: "0px 4.306704044342041px  0px 0px #1a242d",
      },
      borderWidth: { bw3: "3px" },
      borderRadius: {
        radius12: "12px",
        radius17: "17px",
        radius25: "25px",
        radius35: "35px",
        radius50: "50px",
        radius501: "50%",
        radius85: "85px",
        radius335: "33.5px",
        radius54241: "542.41px",
      },
      fontFamily: { vazirmatn: "Vazirmatn" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
