import { StyleSheet, Image, View } from "react-native";
import React from "react";

const profileImage = require("@/assets/images/Logo/profile.png");

const ProfilePlaceHolder = () => {
  return (
    <View>
      <Image
        source={profileImage}
        style={{
          width: 50,
          height: 50,
          aspectRatio: 1,
          borderRadius: '50%',
        }}
      ></Image>
    </View>
  );
};

export default ProfilePlaceHolder;

const styles = StyleSheet.create({});
