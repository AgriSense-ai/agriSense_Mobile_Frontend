import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePlaceHolder from "../navBar/ProfilePlaceHolder";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const progressCard = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const { name, phone, tier } = userData;
  const settingsData: {
    label: string;
    value: string | number;
    color?: string;
  }[] = [
    { label: "Name", value: name },
    { label: "Number", value: "0" + phone },
    { label: "Tier", value: tier, color: "#E8761C" },
  ];
  return (
    <View className="flex-row bg-white w-[87%] rounded-xl my-3 items-center shadow-md">
      <ProfilePlaceHolder size="medium" shadow="shadow-md" />
      <View className="pl-3 text-wrap">
        <Text className="mb-2 pt-1 text-grey-100 font-semibold text-[17px]">
          User Settings
        </Text>
        {settingsData.map((item, index) => (
          <Text key={index} className="text-sm color-primary-200 mb-1">
            <Text className="text-lg font-medium mb-1">{item.label}:</Text>
            {item.label !== "Tier" ? "\n" : " "}
            <Text className={item.label === "Tier" ? "color-primary-600" : ""}>
              {item.value}
            </Text>
          </Text>
        ))}
      </View>
    </View>
  );
};

export default progressCard;

const styles = StyleSheet.create({
  progressCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 16,
    marginVertical: 22,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  progressLabel: {
    fontWeight: "bold",
    color: "#37704C",
    fontSize: 17,
    marginBottom: 11,
    paddingTop: 6,
  },
  progressSub: { fontSize: 15, color: "#39744B", marginBottom: 4 },
  area: { color: "#758884", fontWeight: "600" },
  boldLabel: { fontWeight: "700", color: "#37704C" },
});
