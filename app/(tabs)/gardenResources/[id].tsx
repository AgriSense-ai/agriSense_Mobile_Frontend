import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Platform } from "react-native";
import AddGardenNavigationButton from "@/components/gardenManagement/AddGardenNavigationButton";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Crop } from "@/constants/data/Crops";
import CropCategory from "@/components/gardenResources/cropCategory";

const gardenManagementImage = require("@/assets/images/Logo/Agri-Solution.jpg");
import { useState } from "react";

const CropResourceScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [todo, setTodo] = useState<any>({});

  const interestCrop = Crop.filter((crop) => crop.id === Number(id))[0];
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          style={{ resizeMode: "cover", minWidth: "100%" }}
          source={interestCrop.image}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{interestCrop.name}</ThemedText>
      </ThemedView>
      <ThemedText>{interestCrop.description}</ThemedText>
      <Collapsible title="Varieties">
        {interestCrop.varieties.map((variety) => (
          <CropCategory
            key={variety.name}
            name={variety.name}
            description={variety.description}
          />
        ))}
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Health Benefits">
        {interestCrop.healthBenefits.map((benefit, index) => (
          <ThemedText key={index} style={{ marginBottom: 8 }}>
            <Text style={styles.bullet}>{"\u2022"}</Text> {benefit}
          </ThemedText>
        ))}
      </Collapsible>
      <Collapsible title="Cultivation Tips">
        {interestCrop.cultivationTip.map((tip, index) => (
          <CropCategory
            key={index}
            name={tip.name}
            description={tip.description}
          />
        ))}
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Uses">
        {interestCrop.uses.map((use, index) => (
          <ThemedText key={index} style={{ marginBottom: 8 }}>
            <Text style={styles.bullet}>{"\u2022"}</Text> {use}
          </ThemedText>
        ))}
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Diesease">
        {interestCrop.commonDieseases.map((disease, index) => (
          <CropCategory
            key={index}
            name={disease.name}
            description={disease.description}
          />
        ))}
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Pests">
        {interestCrop.Pests.map((pest, index) => (
          <CropCategory
            key={index}
            name={pest.name}
            description={pest.description}
          />
        ))}
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <ThemedView style={{ marginTop: 16 }}>
        <AddGardenNavigationButton
          type="Continue"
          route="/gardenManagement/addGarden"
          name="Learn More"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default CropResourceScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  bullet: {
    fontSize: 18,
    marginRight: 18,
    lineHeight: 22,
  },
});
