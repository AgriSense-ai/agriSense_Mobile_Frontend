import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";
import AddGardenNavigationButton from "./AddGardenNavigationButton";

export default function AddGardenForm() {
  const [gardenName, setGardenName] = useState("");
  const [cropName, setCropName] = useState("");
  const [description, setDescription] = useState("");

  var addGardenRoute: string = "(tabs)/gardenManagement/addGardenMap";

  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Garden</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, { marginRight: 10 }]}
            placeholder="Garden Name"
            placeholderTextColor="#3A5542"
            value={gardenName}
            onChangeText={setGardenName}
          />
          <TextInput
            style={styles.input}
            placeholder="Crop Name"
            placeholderTextColor="#3A5542"
            value={cropName}
            onChangeText={setCropName}
          />
        </View>
        <TextInput
          style={styles.textarea}
          placeholder="Please write a brief description of what is in the garden"
          placeholderTextColor="#3A5542"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <View style={styles.buttonRow}>
          <AddGardenNavigationButton type={"back"} />
          <AddGardenNavigationButton type={"continue"} route={addGardenRoute} />
        </View>
      </View>
    </View>
  );
}

const SHADOW =
  Platform.OS === "ios"
    ? {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
    : {
        elevation: 16,
      };

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    alignSelf: "center",
    padding: 20,
    borderRadius: 22,
  },
  card: {
    backgroundColor: "#fff",
    padding: 28,
    borderRadius: 22,
    width: 340,
    alignItems: "center",
    ...SHADOW,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 28,
    color: "#234733",
    fontFamily: Platform.select({ ios: "System", android: "sans-serif" }),
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#D3EDE0",
    borderRadius: 12,
    fontWeight: "500",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: "#234733",
    flex: 1,
  },
  textarea: {
    backgroundColor: "#D3EDE0",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 14,
    fontSize: 16,
    color: "E8EAED",
    width: "100%",
    minHeight: 90,
    marginBottom: 28,
  },
  buttonRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 12,
  },
});
