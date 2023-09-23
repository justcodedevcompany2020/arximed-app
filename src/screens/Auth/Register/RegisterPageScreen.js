import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BigText from '../../../components/BigText';
import IllustrationBlock from '../../../components/IllustrationBlock';
import TwoButtons from '../../../components/TwoButton';
import { ScrollView } from 'react-native';

export default function RegisterPageScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IllustrationBlock />
        <BigText
          smallText={'Чтобы создать аккаунт выберите способ авторизации'}
          bigText={'Регистрация'}
          width={styles.width}
        />
        <TwoButtons
          navLinkFirst={'PhoneNumberRegister'}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 120,
    paddingHorizontal: 20,
    position: 'relative',
  },
  width: {
    width: 275,
  },
});
