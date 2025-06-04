/** @type {import('tailwindcss').Config} */

const themeColor = require("./constants/Color");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      themeColor: {
        // light: {
        //   text: themeColor.forest_green,
        //   background: cambridge_blue,
        //   tint: brunswick_green,
        //   icon: forest_green,
        //   tabIconDefault: dim_gray,
        //   tabIconSelected: forest_green,
        // },
        // dark: {
        //   text: "#ECEDEE",
        //   background: "#151718",
        //   tint: bittersweet,
        //   icon: "#9BA1A6",
        //   tabIconDefault: "#9BA1A6",
        //   tabIconSelected: bittersweet,
        // },
      },
    },
    colors: {
      // Define your custom colors here
      primary: themeColor.forest_green,
      secondary: themeColor.cambridge_blue,
      accent: themeColor.brunswick_green,
      text: themeColor.forest_green,
      icon: themeColor.forest_green,
      grey: themeColor.dim_gray,
      tabIconDefault: themeColor.dim_gray,
      tabIconSelected: themeColor.forest_green,
      background: themeColor.mint_cream,
      red: themeColor.engineering_orange,
      yellow: themeColor.icterine,
      white: themeColor.white,
    },
    fontFamily: {
      // Define your custom fonts here
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Courier New", "monospace"],
    },
    fontSize: {
      // Mobile-appropriate font sizes
      xs: "0.8125rem", // 13px
      sm: "0.9375rem", // 15px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.5rem", // 40px
    },
    screens: {
      // Define your custom breakpoints here
      sm: "640px", // Small devices (phones)
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (desktops)
      xl: "1280px", // Extra large devices (large desktops)
      "2xl": "1536px", // 2x large devices
    },
  },
  plugins: [],
};
