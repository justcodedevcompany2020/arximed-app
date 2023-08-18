import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

export default function AnalysisFirst() {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.text}>Д-димер</Text>
            <Image
                style={{ width: 350, height: 179, marginTop: 20 }}
                source={require('../../../../assets/images/Diagram1.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '700',
        color: '#1C1C1E',
    },
});
