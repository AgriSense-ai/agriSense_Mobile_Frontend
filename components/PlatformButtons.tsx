import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  Text,
} from "react-native";
// This is a simple example of how to use Platform-specific components
interface MyButtonProps {
  onPress: () => void;
  title: string;
}

// A button that feels right on both platforms
function MyButton({ onPress, title }: MyButtonProps) {
  // Use TouchableNativeFeedback on Android for the ripple effect
  // Use TouchableOpacity on iOS for the opacity effect
  // Use Material ripple effect on Android, opacity on iOS
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable onPress={onPress}>
      <View style={styles.button}>
        <Text>{title}</Text>
      </View>
    </Touchable>
  );
}
const styles = {
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
};