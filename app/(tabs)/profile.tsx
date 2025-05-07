import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const Profile = () => {
    const handleEditProfile = () => {
        // Handle edit profile action
        console.log('Edit Profile button clicked');
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.profileImage}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
            <Button title="Edit Profile" onPress={handleEditProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});

export default Profile;