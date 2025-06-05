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
          fonts: ["./assets/fonts/Poppins-Medium.ttf"],
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
