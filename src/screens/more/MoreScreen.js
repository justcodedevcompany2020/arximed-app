import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import MoreField from './MoreField';
import MoreHeader from './MoreHeader';
import {
  CallIcon,
  DeviceIcon,
  DoctorIcon,
  HealthIcon,
  Help,
  MedicalFileIcon,
} from '../../assets/svgs/MoreScreenSvgs';

export default function MoreScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.fixed}
        source={require('../../assets/background.png')}>
        <MoreHeader navigation={navigation} />
        <ScrollView style={{height: 700}} showsVerticalScrollIndicator={false}>
          <MoreField
            Icon={DoctorIcon}
            text={'Врачи'}
            onPress={() => navigation.navigate('DoctorsNavigator')}
          />
          <MoreField
            Icon={HealthIcon}
            text={'О клинике'}
            onPress={() => navigation.navigate('AboutClinic')}
          />
          <MoreField
            Icon={MedicalFileIcon}
            text={'Новости и Акции'}
            onPress={() => navigation.navigate('NewsAndPromotions')}
          />
          <MoreField
            Icon={CallIcon}
            text={'Обратная связь, поддержка'}
            onPress={() => navigation.navigate('FeedBackScreen')}
          />
          <MoreField
            Icon={DeviceIcon}
            text={'О приложении '}
            onPress={() => navigation.navigate('AboutApplication')}
          />
          <MoreField
            Icon={Help}
            text={'Часто задаваемые вопросы'}
            onPress={() => navigation.navigate('FAQ')}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  fixed: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingTop: 90,
  },
});
