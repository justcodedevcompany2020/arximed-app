import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PrescriptionDropDown from './PrescriptionDropDown';
import DatePicker from 'react-native-date-picker';

export default function PrescriptionInput({ inputType, Icon, value, open, setOpen, onChange, minDate, disabled, items, placeholder }) {
    const [openPicker, setOpenPicker] = useState(false);
    const DateInput = () => {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => disabled ? null : setOpenPicker(true)}
            >
                <Icon />
                <Text style={[{ marginLeft: 10, color: 'black' }, disabled && { color: '#72777A' }]}>{placeholder}</Text>
                <DatePicker
                    modal
                    open={openPicker}
                    date={value}
                    mode={'date'}
                    minimumDate={minDate}
                    onConfirm={date => {
                        setOpenPicker(false);
                        onChange(date);
                    }}
                    onCancel={() => {
                        setOpenPicker(false);
                    }}
                />
            </TouchableOpacity>
        );
    };
    return inputType === 'default' ? <View style={styles.container}>
        <Icon />
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={'black'}
        />
    </View> : (inputType === 'startdate' || inputType === 'enddate') && <DateInput />;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 50,
    },
    input: {
        marginLeft: 5,
    },

});
