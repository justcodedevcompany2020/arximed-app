import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {UserIcon} from '../../assets/svgs/HomeScreenSvgs';
import {NextIcon} from '../../assets/svgs/SearchScreenSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {getUserInfo} from '../../store/actions/actions';
import {useEffect} from 'react';

export default function MoreHeader({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const {userInfo} = useSelector(state => state.justDriveReducer);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProfileSingle')}
      style={styles.container}>
      <UserIcon />
      <View style={styles.userInfo}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.userName}>
            {userInfo?.data?.firstName} {userInfo?.data?.middleName}{' '}
            {userInfo?.data?.lastName}
          </Text>
          <NextIcon />
        </View>
        <Text style={styles.userId}>{userInfo?.data?.user_key}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    width: '80%',
  },
  userId: {
    fontSize: 12,
    color: '#979797',
  },
});
