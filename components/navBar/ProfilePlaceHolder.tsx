import { Image, Pressable, View } from "react-native";
import React from "react";

const profileImage = require("@/assets/images/icons/profile.png");
interface ProfilePlaceHolderProps {
  size?: "small" | "medium";
  shadow: string;
  onPress?: () => void;
}

const ProfilePlaceHolder: React.FC<ProfilePlaceHolderProps> = ({
  size,
  shadow,
  onPress,
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case "small":
        return { width: 50, height: 50, borderRadius: 25 };
      case "medium":
        return { width: 150, height: 150, borderRadius: 75 };
      default:
        return { width: 50, height: 50, borderRadius: 25 };
    }
  };
  return (
    <Pressable
      onPress={onPress}
      className="flex items-center justify-center m-3"
    >
      <View className={shadow}>
        <Image
          source={profileImage}
          style={{
            ...getSizeStyle(),
            aspectRatio: 1,
          }}
        />
      </View>
    </Pressable>
  );
};

export default ProfilePlaceHolder;
