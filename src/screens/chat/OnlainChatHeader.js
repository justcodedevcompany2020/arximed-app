import { View, Image, Text, StyleSheet } from 'react-native'

export default function OnlainChatHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Чат с регистратурой </Text>
            <Image
                style={{ width: 25, height: 25 }}
                source={require('../../assets/images/call.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: 'transparent',
        height: 128,
        opacity: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    headerText: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 29
    },
})