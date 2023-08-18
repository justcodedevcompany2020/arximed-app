import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BigText from '../../components/BigText';
import IllustrationBlock from '../../components/IllustrationBlock';

export default function WelcomePage({navigation, width}) {
  return (
    <ScrollView
      style={styles.container}
      forceInset={{top: 'always', bottom: 'always'}}>
      <View style={{paddingTop: 90}}>
        <IllustrationBlock />
      </View>
      <BigText
        width={styles.width}
        smallText={'Вы уже пользовались приложением АрхиМед раньше?'}
        bigText={'Добро пожаловать!'}
      />
      <View style={{marginTop: 20, width: '100%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.buttonText}>Я новый пользователь</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.buttonText}>У меня есть аккаунт</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 110,
    paddingHorizontal: 30,
  },
  welcomeText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 35,
    marginLeft: 15,
    marginTop: 40,
  },
  secondText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    marginBottom: 15,
    width: '100%',
    height: 60,
    backgroundColor: '#F2FBE2',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7B9E45',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  width: {
    width: 275,
  },
});
