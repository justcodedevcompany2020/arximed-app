import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function AddingCityDone({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', justifyContent: 'center', marginTop: 150}}>
          <Image
            style={{width: '100%', height: 200}}
            source={require('../../../assets/images/11111.png')}
          />
          <Text style={styles.bigText}>Спасибо!</Text>
          <Text style={styles.smallText}>Мы уведомим Вас по смс</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{marginBottom: 40}}
        onPress={() => navigation.navigate('CreateNewAccount')}>
        <Text style={styles.link}>Изменить город</Text>
      </TouchableOpacity>
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
  link: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#007AFF',
  },
});
