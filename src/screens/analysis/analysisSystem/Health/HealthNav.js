import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function HealthNav({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate('Analizes')}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../../../assets/images/profile/primary1.png')}
        />
        <Text style={[styles.text, {color: '#72777A'}]}>Каталог</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate('Health')}>
        <Image
          style={{width: 22, height: 20}}
          source={require('../../../../assets/images/profile/primary2.png')}
        />
        <Text style={[styles.text, {color: '#4E93B8'}]}>Мои анализы</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.navigate('Health')}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../../../assets/images/profile/primary3.png')}
        />
        <Text style={[styles.text, {color: '#72777A'}]}>Настройки</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    height: 100,
  },
  nav: {
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'center',
    marginTop: 10,
  },
});
