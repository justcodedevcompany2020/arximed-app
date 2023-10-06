import React from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CardsInput from '../CardsInputs/CardsInputs';
import PersonalData from './PersonalData';
import ProfileSelection from './ProfileSelectionBlock';
import {useSelector, useDispatch} from 'react-redux';
import {getUserInfo} from '../../../store/actions/actions';
import {useEffect} from 'react';

export default function ProfileSingle({navigation}) {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.justDriveReducer);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      <ScrollView
        style={{marginTop: 110, paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={{width: 74, height: 74, alignSelf: 'center'}}
          source={require('../../../assets/images/profile/user.png')}
        />
        <ProfileSelection />
        <PersonalData />
        
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
});
