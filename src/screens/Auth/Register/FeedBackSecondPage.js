import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image } from 'react-native';

export default function FeedBackSecondPage({ navigation, route }) {
  const { login } = route.params ?? false;
  setTimeout(() => {
    navigation.navigate(login ? 'LoginWithPhone' : 'PhoneNumberRegister');
  }, 3000);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: '100%', height: 220 }}
        source={require('../../../assets/images/11111.png')}
      />
      <Text style={styles.bigText}>Обратная связь</Text>
      <Text style={styles.smallText}>
        Ваше обращение будет рассмотрено в течение суток. Спасибо, что
        обратились к нам!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 27,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: '#000000',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
    textAlign: 'center',
  },
});
