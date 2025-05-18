// This works on iOS but does nothing on Android
const iosShadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
};


// This works on Android but does nothing on iOS
const androidShadowStyle = {
  elevation: 5,
};


// Solution: Combine them into one style
const crossPlatformShadow = {
  ...iosShadowStyle,
  ...androidShadowStyle,
};
