import { Pressable, View } from "react-native";
import React from "react";

type CameraButtonProps = {
  onPress: () => void;
};

const CameraButton: React.FC<CameraButtonProps> = ({ onPress }) => {
  return (
    <View className="z-35 elevation-6 p-4 flex items-center absolute bottom-24 left-1/2 -translate-x-1/2">
      <Pressable onPress={onPress}>
        {({ pressed }) => (
          <View
            className={`bg-transparent border-white border-4 w-20 h-20 rounded-full items-center justify-center ${
              pressed ? "opacity-50" : ""
            }`}
          >
            <View className="w-16 h-16 bg-white rounded-full" />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default CameraButton;
