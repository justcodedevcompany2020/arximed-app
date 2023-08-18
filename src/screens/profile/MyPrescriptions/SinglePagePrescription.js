import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Calendar } from '../../../assets/svgs/BasketSvgs';
import { ArrowRightGreen, GreenCapsules, GreenTime, RedCross } from '../../../assets/svgs/ProfileScreenSvgs';
import Button from '../../../components/Button';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';

export default function SinglePagePrescription({ navigation, route }) {
  const { title, mandatory } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const timeButtons = [
    'независимо от приема пищи',
    'Утро',
  ];
  const doseButtons = [
    'независимо от приема пищи',
    '1 таблетка 1 раз в день',
  ];
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showCantDeletePopup, setShowCantDeletePopup] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 130, paddingHorizontal: 20 }} >
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={[styles.whiteContaner, styles.flexRow, { justifyContent: 'space-between' }]}>
          <View>
            <Text style={{ color: 'black' }}>ВОП, Захаренко Алексей Владимирович</Text>
            <Text style={styles.doctor}>терапевт</Text>
            <View style={[styles.flexRow, { marginTop: 5 }]}>
              <GreenTime />
              <Text style={styles.date}>10 июля 2022 18:55</Text>
            </View>
          </View>
          <ArrowRightGreen />
        </TouchableOpacity>
        <View style={styles.whiteContaner}>
          <View style={[styles.flexRow, { marginBottom: 10 }]}>
            <GreenTime />
            <Text style={styles.date}>Введите время приема</Text>
          </View>
          <View style={[styles.flexRow, { flexWrap: 'wrap' }]}>
            {timeButtons.map((item, i) => {
              return <View style={[styles.greenContainer, { marginBottom: 5 }]} key={i}><Text style={styles.greenText}>{item}</Text></View>;
            })}
          </View>
        </View>
        <View style={[styles.whiteContaner, styles.flexRow, { justifyContent: 'space-between' }]}>
          <View style={styles.flexRow}>
            <Calendar />
            <Text style={styles.date}>Дата начала</Text>
          </View>
          <View style={styles.greenContainer}>
            <Text style={styles.greenText}>11 июля, Пн, 10:00</Text>
          </View>
        </View>
        <View style={[styles.whiteContaner, styles.flexRow, { justifyContent: 'space-between' }]}>
          <View style={styles.flexRow}>
            <Calendar />
            <Text style={styles.date}>Дата завершения</Text>
          </View>
          <View style={styles.greenContainer}>
            <Text style={styles.greenText}>19 июля</Text>
          </View>
        </View>
        <View style={styles.whiteContaner}>
          <View style={[styles.flexRow, { marginBottom: 10 }]}>
            <GreenCapsules />
            <Text style={styles.date}>Дозировка и способ приема</Text>
          </View>
          <View style={[styles.flexRow, { flexWrap: 'wrap' }]}>
            {doseButtons.map((item, i) => {
              return <View style={[styles.greenContainer, { marginBottom: 5 }]} key={i} ><Text style={[styles.greenText, { flexWrap: 'wrap' }]}>{item}</Text></View>;
            })}
          </View>
        </View>
      </ScrollView>
      <Button
        text={'Завершить прием'}
        color={'white'}
        backgroundColor={'#9DC458'}
        marginBottom={20}
      />
      <TouchableOpacity style={[styles.flexRow, { justifyContent: 'center', marginBottom: 30 }]} onPress={() => mandatory ? setShowCantDeletePopup(true) : setShowDeletePopup(true)}>
        <RedCross />
        <Text style={styles.deleteText}>Удалить назначение</Text>
      </TouchableOpacity>
      {(showDeletePopup || showCantDeletePopup) && <Blurview />}
      <Popup
        isVisible={showDeletePopup}
        setIsVisible={setShowDeletePopup}
        nummberOfButtons={2}
        modalTitle={'Удалить назначение'}
        modalText={'Вы действительно хотите удалить назначение ?'}
        leftButtonText={'Нет'}
        rightButtonText={'Да'}
        onPressLeftButton={() => setShowDeletePopup(false)}
        onPressRightButton={() => setShowDeletePopup(false)}
        buttonTextColor={'#007AFF'}
      />
      <Popup
        isVisible={showCantDeletePopup}
        setIsVisible={setShowCantDeletePopup}
        nummberOfButtons={1}
        modalTitle={'Назначение врача нельзя удалить'}
        modalText={'Удаление данного пункта невозможно'}
        buttonText={'Хорошо '}
        onPressBtn={() => setShowCantDeletePopup(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otherInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#72777A',
    marginTop: 15,
    lineHeight: 24,
  },
  experienceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteContaner: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  greenContainer: {
    backgroundColor: '#f2fbe2',
    height: 24,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 5,
  },
  greenText: {
    color: '#7B9E45',
    fontSize: 12,
    fontWeight: '600',
  },
  doctor: {
    color: '#72777A',
    marginVertical: 5,
  },
  date: {
    color: 'black',
    marginLeft: 8,
  },
  deleteText: {
    fontSize: 16,
    color: '#FF5454',
    marginLeft: 5,
  },
});
