import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Calendar } from '../../../assets/svgs/ProfileScreenSvgs';
import Blurview from '../../../components/Blur';
import ProfileCalendar from './Calendar';


export default function Header({ scheme, setScheme }) {
    const buttons = ['Схема приема', 'Мои назначения'];
    const [showPopup, setShowPopup] = useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                {buttons.map((buttonName, i) => {
                    return <TouchableOpacity style={[styles.button, (scheme && i === 0) || (!scheme && i === 1) ? { backgroundColor: '#FF414C' } : { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#7B9E45' }]} key={i} onPress={() => scheme && i === 1 ? setScheme(false) : !scheme && i === 0 ? setScheme(true) : null}>
                        <Text style={[styles.buttonText, (scheme && i === 0) || (!scheme && i === 1) ? { color: 'white' } : { color: '#7B9E45' }]}>{buttonName}</Text>
                    </TouchableOpacity>;
                })}
            </View>
            <TouchableOpacity onPress={() => setShowPopup(true)}>
                <Calendar />
            </TouchableOpacity>
            <ProfileCalendar showPopup={showPopup} setShowPopup={setShowPopup} />
            {showPopup && <Blurview />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20,
    },
    button: {
        marginLeft: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 14,
    },
});
