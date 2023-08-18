import { SafeAreaView, View, ImageBackground, Image, Text, ScrollView, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.whiteBlock} >
            <Text style={styles.text} >Ваши бонусы</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image
                    style={{ width: 31.5, height: 21 }}
                    source={require('../../../assets/images/profile/logo.png')}
                />
                <Text style={styles.blockText} >1 152</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteBlock: {
        width: '100%',
        padding: 20,
        // height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 15
    },
    text: {
        fontSize: 14,
        // lineHeight: 18,
        color: '#1C1C1E',
        fontWeight: '500'
    },
    blockText: {
        fontSize: 24,
        // lineHeight: 30,
        color: '#1C1C1E',
        fontWeight: '500',
        marginLeft: 10
    }
})