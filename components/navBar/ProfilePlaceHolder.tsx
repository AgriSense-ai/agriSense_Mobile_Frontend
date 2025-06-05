import { Image, View } from "react-native";
import React from "react";

const profileImage = require("@/assets/images/icons/profile.png");

const ProfilePlaceHolder = () => {
  return (
    <View className="shadow-lg">
      <Image
        source={profileImage}
        style={{
          width: 50,
          height: 50,
          aspectRatio: 1,
          borderRadius: 30,
        }}
      ></Image>
    </View>
  );
};

export default ProfilePlaceHolder;
