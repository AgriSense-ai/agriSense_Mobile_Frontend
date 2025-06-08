import { View } from "react-native";
import CardLayout from "@/components/indexPage/progressCards/cardLayout";
import ProgressLayout from "@/components/indexPage/progressView/progressLayout";
import ServicesLayout from "@/components/indexPage/servicesCenter/servicesLayout";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const backgroundImage = require("@/assets/images/Background.png");

export default function HomeScreen() {
  return (
    <BackgroundLayout>
      <View className="flex-1 justify-end items-center pt-2">
        <View className="flex-1 justify-start items-center pt-2 mt-3">
          <ProgressLayout />
          <CardLayout />
          <ServicesLayout />
        </View>
      </View>
    </BackgroundLayout>
  );
}
