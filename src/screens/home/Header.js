import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  NotificationIcon,
  UserIcon,
  BasketIcon,
} from '../../assets/svgs/HomeScreenSvgs';
import {getUserInfo} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function HomeHeader({navigation}) {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.justDriveReducer);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);


  console.log(userInfo, 'userInfo')

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
          <NotificationIcon />
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
