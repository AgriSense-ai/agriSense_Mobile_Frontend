import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PasswordSlotsProps {
    length?: number;
}

const PasswordSlots: React.FC<PasswordSlotsProps> = ({ length = 6 }) => {
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);

    const handleChange = (text: string) => {
        if (text.length <= length) setPassword(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.slotsContainer}>
                {Array.from({ length }).map((_, i) => (
                    <View key={i} style={styles.slot}>
                        <TextInput
                            style={styles.input}
                            value={password[i] ? (secure ? '•' : password[i]) : ''}
                            editable={false}
                            secureTextEntry={false}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.hiddenInput}
                    value={password}
                    onChangeText={handleChange}
                    keyboardType="default"
                    secureTextEntry={secure}
                    maxLength={length}
                    autoFocus
                />
                <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.eyeButton}>
                    <Ionicons name={secure ? 'eye-off' : 'eye'} size={24} color="#888" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', width: '100%' },
    slotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 12,
    },
    slot: {
        borderBottomWidth: 2,
        borderColor: '#ccc',
        width: 36,
        height: 48,
        marginHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
    },
    input: {
        fontSize: 28,
        textAlign: 'center',
        color: '#333',
        width: '100%',
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: 48,
        opacity: 0,
    },
    hiddenInput: {
        flex: 1,
        height: 48,
        opacity: 0,
    },
    eyeButton: {
        position: 'absolute',
        right: -40,
        top: 0,
        opacity: 1,
    },
});

export default PasswordSlots;