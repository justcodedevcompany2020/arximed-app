import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import EntryCancelAnother from './EntryCancelAnother';
import EntryBlock from './EntrysBlock';
import {GreenOkIcon} from '../../../assets/svgs/HomeScreenSvgs';
import Button from '../../../components/Button';

let data = [
  {
    id: 1,
    image: require('../../../assets/images/profile/bill.png'),
    firstText: 'Тип',
    secondText: 'Онлайн',
    width: 25,
    height: 25,
  },
  {
    id: 2,
    image: require('../../../assets/images/profile/calendar1.png'),
    firstText: 'Дата',
    secondText: '12 февраля, 10:15',
    width: 25,
    height: 25,
  },
  {
    id: 3,
    image: require('../../../assets/images/profile/profilepic.png'),
    firstText: 'Врач',
    secondText: 'Алексеев И.И. ',
    width: 25,
    height: 25,
  },
  {
    id: 4,
    image: require('../../../assets/images/medical-equipment.png'),
    firstText: 'Специализация',
    secondText: 'Врач терапевт',
    width: 25,
    height: 25,
  },
];

export default function CancelEntry({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.block}>
          <Text style={styles.headerText}>Информация о записи </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            {data.map((value, index) => {
              return (
                <EntryBlock
                  key={index}
                  image={value.image}
                  firstText={value.firstText}
                  width={value.width}
                  secondText={value.secondText}
                  height={value.height}
                />
              );
            })}
          </View>
          <EntryCancelAnother
            image={require('../../../assets/images/medical-file.png')}
            firstText={'Протокол терапевта первичный'}
            secondText={'pdf'}
            width={25}
            height={25}
          />
          <View style={styles.codeBlock}>
            <Text style={[styles.blockText, {color: 'black'}]}>
              5 000{' '}
              <Text style={[styles.blockText, {color: '#7B9E45'}]}>₽</Text>
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <GreenOkIcon />
              <Text style={styles.greenText}>Оплачено</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button
        text={'Отменить запись'}
        color={'white'}
        backgroundColor={'#9DC458'}
        isDisabled={false}
        onPress={() => navigation.navigate('ReasonOfCancel')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    marginTop: 120,
    width: '100%',
  },
  block: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  codeBlock: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  blockText: {
    fontSize: 16,
    // lineHeight: 14,
    fontWeight: '400',
  },
  greenText: {
    color: '#7B9E45',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 5,
  },
  headerText: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 14,
    marginTop: 10,
    fontWeight: '400',
  },
});
