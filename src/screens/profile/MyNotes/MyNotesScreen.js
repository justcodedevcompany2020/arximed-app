import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { NoNotificationsIcon } from '../../../assets/svgs/NotificationScreenSvgs';
import Record from '../../home/Record';

export default function MyNotesScreen({ navigation }) {
  const noData = false;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {noData ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <NoNotificationsIcon />
            <Text
              style={{ fontWeight: '500', color: '#1C1C1E', marginTop: 10 }}>
              Нет записей
            </Text>
          </View>
        ) : (
          <>
            <Record
              name={'Онлайн консультация'}
              isOnline
              canceled
              deactive
              navigation={navigation}
            />
            <Record
              name={'Запись к врачу Терапевту'}
              paid
              navigation={navigation}
            />
            <Record
              name={'Онлайн консультация'}
              isOnline
              navigation={navigation}
            />
            <Record
              name={'Запись к врачу Терапевту'}
              disable
              canceled
              navigation={navigation}
            />
            <Record
              name={'Запись к врачу Терапевту'}
              disable
              canceled
              navigation={navigation}
            />
            <Record
              name={'Запись к врачу Терапевту'}
              paid
              marginBottom={50}
              navigation={navigation}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  scrollView: {
    backgroundColor: 'transparent',
    paddingBottom: 30,
    paddingHorizontal: 20,
    marginTop: 120,
    width: '100%',
  },
});
