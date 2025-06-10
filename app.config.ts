export default {
  expo: {
    name: "AgriSense",
    slug: "AgriSense",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icons/typoLogo.png",
    scheme: "agrisense",
    splash: {
      image: "./assets/images/icons/splash-icon-light.png",
      resizeMode: "contain",
      backgroundColor: "#f3faee",
    },
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.conradkash.AgriSense",
      icon: {
        dark: "./assets/images/icons/ios-dark.png",
        light: "./assets/images/icons/ios-light.png",
        tinted: "./assets/images/icons/ios-tinted.png",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/icons/typoLogo.png",
        monogroundImage: "./assets/images/icons/typoLogo.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.conradkash.AgriSense",
      versionCode: 2,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/icons/icon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-font",
        {
          fonts: {
            "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
            "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
            "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
            "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
            "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
            "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
            "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
            "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
            "Poppins-LightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
            "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
            "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
            "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
            "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
          },
        },
      ],
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera.",
        },
      ],
      [
        "expo-splash-screen",
        {
          backgroundColor: "#232323",
          image: "./assets/images/icons/splash-icon-light.png",
          dark: {
            image: "./assets/images/icons/splash-icon-light.png",
            backgroundColor: "#000000",
          },
          imageWidth: 200,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "677e81e9-5c63-4061-9517-0b3a58fe22d5",
      },
    },
  },
};
