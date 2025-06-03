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
  },
  plugins: [],
};
