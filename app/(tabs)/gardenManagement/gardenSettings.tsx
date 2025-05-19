import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GardenSettingsLayout from '@/components/gardenManagement/GardenSettings/GardenSettingsLayout'

const gardenSettings = () => {
  return (
    <View style={styles.root}>
        <GardenSettingsLayout />
    </View>
  )
}

export default gardenSettings

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
})