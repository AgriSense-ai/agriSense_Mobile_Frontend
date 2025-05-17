import { useLocalSearchParams } from "expo-router"
import { StyleSheet, Text, View, TextInput } from "react-native"

const CropScreen = () => {
    const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default CropScreen

const styles = StyleSheet.create({})