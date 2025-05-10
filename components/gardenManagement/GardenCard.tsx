import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface GardenCardProps {
  title: string;
  crop: string;
  description: string;
  date: string; // TODO: Change to Date type
}

const GardenCard = ({ title, crop, description, date }: GardenCardProps) => {
  return (
    <View style={styles.gardenCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.gardenTitle}>{title}</Text>
        <Text style={styles.cropName}>  {crop}</Text>
        <View style={styles.cropDot}/>
      </View>
      <Text style={styles.gardenDesc}>{description}</Text>
      <Text style={styles.gardenDate}>Date created: {date}</Text>
      <TouchableOpacity style={styles.continueBtn}><Text style={{ color: '#fff', fontWeight: 'bold' }}>Continue</Text></TouchableOpacity>
    </View>
  );
};

export default GardenCard;

const styles = StyleSheet.create({
  //Gardens Section
  sectionTitle: {
    fontWeight: "bold",
    color: "#37704C",
    fontSize: 21,
    marginVertical: 6,
  },
  gardenCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: "#AAC8B4",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  gardenTitle: { fontWeight: "700", color: "#37704C", fontSize: 17 },
  cropName: { fontWeight: "600", color: "#37704C", fontSize: 16 },
  cropDot: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: "#FFD600",
    marginLeft: 6,
  },
  gardenDesc: { color: "#464E4A", fontSize: 13, marginVertical: 8 },
  gardenDate: { color: "#758884", fontSize: 12, marginBottom: 8 },
  continueBtn: {
    alignSelf: "flex-end",
    backgroundColor: "#37704C",
    paddingHorizontal: 22,
    paddingVertical: 7,
    borderRadius: 8,
    marginTop: 4,
  },
});
