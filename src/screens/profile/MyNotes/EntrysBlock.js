import { View, TouchableOpacity, Text, Image, SafeAreaView, StyleSheet, TextInput, ImageBackground, ScrollView } from "react-native";

export default function EntryBlock({ image, width, height, firstText, secondText }) {
    return (
        <View style={styles.block} >
            <Image
                style={{ width: width, height: height }}
                source={image}
            />
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.boldText} >{firstText}</Text>
                <Text style={styles.smallText} >{secondText}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        marginTop: 25,
        padding: 5
    },
    boldText: {
        fontSize: 14,
        lineHeight: 14,
        color: 'black',
        fontWeight: '500'
    },
    smallText: {
        fontSize: 10,
        lineHeight: 12,
        color: '#72777A',
        fontWeight: '400'
    }
})