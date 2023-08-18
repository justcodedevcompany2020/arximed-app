import React from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ActionCardsContainer from './ActionCardsContainer';
import AnalysesCardsContainer from './AnalysesCardsContainer';
import HomeHeader from './Header';
import HomeNotification from './HomeNotification';
import HorizontalActionCard from './HorizontalActionCard';
import Records from './Records';
import Referrals from './Referrals';
import SearchButton from './SearchButton';
import News from './News';
import About from './About';
import {getDoctorsList} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <ImageBackground
        style={styles.fixed}
        source={require('../../assets/background.png')}
        resizeMode="cover">
        <View style={{paddingHorizontal: 20}}>
          <HomeHeader navigation={navigation} />
        </View>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: 20}}>
            <SearchButton navigation={navigation} />
            <HomeNotification />
          </View>
          <ActionCardsContainer navigation={navigation} />
          <View style={{paddingHorizontal: 20}}>
            <HorizontalActionCard
              path={require('../../assets/animations/3_icon.json')}
              title={'Проверить состояние организма'}
              text={'Комплексные анализы для решения проблем '}
              navigate={() => navigation.navigate('Health')}
            />
            <HorizontalActionCard
              path={require('../../assets/animations/4_1.json')}
              title={'Прием лекарств'}
              text={'Рекомендации для вас'}
              navigate={() => navigation.navigate('MyPrescriptionsNavigator')}
            />
            <AnalysesCardsContainer navigation={navigation} />
            <Records navigation={navigation} />
            <Referrals navigation={navigation} />
            <News navigation={navigation} />
            <About navigation={navigation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollview: {
    backgroundColor: 'transparent',
    marginBottom: 90,
    flex: 1,
  },
});
