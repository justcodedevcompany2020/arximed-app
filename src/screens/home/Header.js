import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  NotificationIcon,
  UserIcon,
  BasketIcon,
  NotificationIconNot,
} from '../../assets/svgs/HomeScreenSvgs';
import {getUserInfo, getHasNotificatiion} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeHeader({navigation}) {
  const dispatch = useDispatch();
  const {userInfo, hasNotifyData} = useSelector(
    state => state.justDriveReducer,
  );

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getHasNotificatiion());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  console.log(userInfo, 'userInfo');
  console.log(hasNotifyData, 'hasssasasas');
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 55,
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileNav')}>
          <UserIcon />
        </TouchableOpacity>

        <View style={{marginLeft: 12}}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'black',
            }}>
            Здравствуйте,
          </Text>
          <Text style={{fontSize: 20, color: 'black'}}>
            {userInfo?.data?.firstName}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 80,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          {hasNotifyData.message === 'You have a new notification' ? (
            <NotificationIcon />
          ) : (
            <NotificationIconNot />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BasketNavigator')}>
          <BasketIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
