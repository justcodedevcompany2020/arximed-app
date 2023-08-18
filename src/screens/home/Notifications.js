import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import {NoNotificationsIcon} from '../../assets/svgs/NotificationScreenSvgs';
import All from './All';
import Notification from './Notification';

export default function Notifications() {
  const noData = false;
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 120}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />

      <ScrollView
        horizontal
        style={styles.scrollview}
        showsHorizontalScrollIndicator={false}>
        <All text={'Все'} isSelected />
        <All text={'Online'} />
        <All text={'Назначения'} />
        <All text={'Направления'} />
      </ScrollView>
      {!noData ? (
        <ScrollView
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'transparent',
            marginBottom: 90,
          }}
          showsVerticalScrollIndicator={false}>
          <Notification
            title={'Онлайн-консультация '}
            time={'15:00'}
            text={
              'Онлайн консультация, запланированная на 20.07.2022 14:00 началась. Вас ожидает врач. '
            }
            first
          />
          <Notification
            title={'Вы записаны на прием'}
            time={'14:59'}
            text={
              'Филиал Петровка 20.07.2022 14:00 Врач хирург, Иван Петр Петрович.'
            }
          />
          <Notification
            title={'Запись на прием отменена'}
            time={'14:50'}
            text={
              'Филиал Петровка 20.07.2022 14:00 Врач хирург, Иван Петр Петрович.'
            }
          />
          <Notification
            title={'Онлайн-консультация '}
            time={'14:30'}
            text={
              'Онлайн консультация, запланированная на 20.07.2022 14:00 началась. Вас ожидает врач. '
            }
          />
          <Notification
            title={'Онлайн-консультация '}
            time={'14:20'}
            text={
              'Онлайн консультация, запланированная на 20.07.2022 14:00 началась. Вас ожидает врач. '
            }
          />
        </ScrollView>
      ) : (
        <View style={styles.noNotifications}>
          <NoNotificationsIcon />
          <Text style={styles.noNotificationsText}>Нет уведомлений</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    height: 50,
  },
  noNotifications: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'transparent',
    marginBottom: 250,
  },
  noNotificationsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F4F4F',
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
});
