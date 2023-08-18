import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import IllustrationBlock from '../../../components/IllustrationBlock';
import BigText from '../../../components/BigText';
import TwoButtons from '../../../components/TwoButton';

export default function LoginPageScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 90}}>
        <IllustrationBlock />
      </View>
      <BigText
        smallText={'Чтобы войти в аккаунт выберите способ авторизации '}
        bigText={'Вход'}
      />
      <TwoButtons navLinkFirst={'LoginWithPhone'} navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});
