export default ({ config }) => ({
  ...config,
  name: "mobile",
  slug: "mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/SplashImage.png",
  scheme: "mobile",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    edgeToEdgeEnabled: true,
    package: "com.rahul_vish.mobile"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/SplashImage.png",
        resizeMode: "cover",
        backgroundColor: "#ffffff"
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {},
    eas: {
      projectId: "c4a55490-b741-4488-9f34-2191251e5d98"
    },
    clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    apiUrl: process.env.API_URL
  }
});
