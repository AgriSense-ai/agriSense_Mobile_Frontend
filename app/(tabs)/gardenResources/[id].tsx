import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import BackgroundLayout from '@/components/ui/BackgroundLayout'

const CropResourceScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <BackgroundLayout>
        <View>
            <Text>CropResourceScreen+ {id}</Text>
        </View>
    </BackgroundLayout>
  )
}

export default CropResourceScreen

const styles = StyleSheet.create({})