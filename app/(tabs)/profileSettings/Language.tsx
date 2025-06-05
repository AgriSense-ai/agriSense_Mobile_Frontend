import { Text, View } from "react-native";
import SetttingRow from "@/components/gardenManagement/GardenSettings/SetttingRow";
import BackgroundLayout from "@/components/ui/BackgroundLayout";

const languages = [
  "English",
  "Luganda",
  "Swahili",
  "Ateso",
  "Lugbara",
  "Acholi",
  "Runyankole",
];

const Language = () => {
  return (
    <BackgroundLayout>
      <View className="mt-5 justify-center align-middle container bg-white p-7 rounded-3xl min-w-[85%]">
        <Text className="text-3xl mb-4 text-text-200 font-bold text-center">
          Choose Language
        </Text>
        {languages.map((language) => (
          <SetttingRow
            key={language}
            label={language}
            value={language === "English" ? "Selected" : ""}
          />
        ))}
      </View>
    </BackgroundLayout>
  );
};

export default Language;
