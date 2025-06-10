import { View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import NavBarLayout from "@/components/navBar/NavBarLayout";

const LoadingPage = () => {
  const uri = useSelector((state: RootState) => state.predictionData.imageUrl);
  return (
    <View className="flex-1 w-full">
      <View className="absolute top-[5%] items-center min-w-full z-10">
        <NavBarLayout />
      </View>
      {uri && <Image source={{ uri }} contentFit="fill" style={{ flex: 1 }} />}
    </View>
  );
};

export default LoadingPage;
