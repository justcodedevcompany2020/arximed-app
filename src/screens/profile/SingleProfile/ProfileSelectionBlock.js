import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import React, {useState} from 'react';
import {ArrowDown} from '../../../assets/svgs/BasketSvgs';
import {useSelector, useDispatch} from 'react-redux';

export default function ProfileSelection() {
  const [change, setChange] = useState(false);
  const {userInfo} = useSelector(state => state.justDriveReducer);
  const currentDate = new Date();
  const targetDate = new Date(userInfo?.data?.birthDate);

  const age = currentDate.getFullYear() - targetDate.getFullYear();
  console.log(age, 'age');
  return (
    <View style={styles.selectBlock}>
      <Text style={styles.selectBlockText}>Выбор профиля</Text>
      {/* {
                !change ?
                    ( */}
      <TouchableOpacity style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 15, height: 15}}
            source={require('../../../assets/images/profile/usergreen.png')}
          />
          <View style={{marginLeft: 15}}>
            <Text style={styles.firstText}>
              {userInfo?.data?.firstName} {userInfo?.data?.middleName}{' '}
              {userInfo?.data?.lastName}
            </Text>
            <Text style={styles.secondText}>
              {userInfo?.data?.gender === 'M' ? 'Муж.' : 'Жен.'} , {age} года
            </Text>
          </View>
        </View>
        <ArrowDown />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setChange(!change)}
        style={styles.greenButton}>
        <Svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M7 13V7M7 7V1M7 7H13M7 7H1"
            stroke="#7B9E45"
            stroke-width="2"
            stroke-linecap="round"
          />
        </Svg>
        <Text style={styles.greenButtonText}>Добавить пользователя</Text>
      </TouchableOpacity>
      {/* )
            } */}
    </View>
  );
}

const styles = StyleSheet.create({
  selectBlock: {
    width: '100%',
  },
  selectBlockText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1C1C1E',
    fontWeight: '600',
    marginTop: 42,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    flexDirection: 'row',
    height: 60,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  firstText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  secondText: {
    color: '#72777A',
    fontSize: 12,
    lineHeight: 14,
  },
  greenButton: {
    width: '100%',
    height: 43,
    backgroundColor: '#E7F0D5',
    borderRadius: 8,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButtonText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#7B9E45',
    marginLeft: 7,
  },
  inputs: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 62,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
