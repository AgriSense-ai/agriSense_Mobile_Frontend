import { Platform } from "react-native";
// This fails on Android
const badFontStyle = {
  fontWeight: '600', // Works on iOS, breaks on Android
};


// This works everywhere
const goodFontStyle = {
  fontWeight: Platform.select({
    ios: '600',
    android: 'bold', // Android only accepts numeric or named weights
  }),
};