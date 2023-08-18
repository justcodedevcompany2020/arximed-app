import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {RedTrash} from '../../../assets/svgs/BasketSvgs';
import {Capsules} from '../../../assets/svgs/ProfileScreenSvgs';
import Swipable from '../../../components/Swipable';
import Popup from '../../../components/Popup';
import Blurview from '../../../components/Blur';
import {useDispatch} from 'react-redux';
import {deleteDestinationFunction} from '../../../store/actions/actionsDestination';

export default function Prescription({
  medicine,
  buttons,
  dose,
  padding,
  mandatory,
  navigation,
  desc,
  id,
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showCantDeletePopup, setShowCantDeletePopup] = useState(false);
  const dispatch = useDispatch();
  const Item = () => {
    return (
      <TouchableOpacity
        style={[
          isOpened
            ? {
                backgroundColor: '#f9f9fa',
              }
            : {borderRadius: 10},
          {marginBottom: 10},
        ]}
        onPress={() =>
          navigation.navigate('SinglePagePrescription', {
            title: medicine,
            mandatory: mandatory,
          })
        }>
        <View
          style={[
            padding && {
              padding: padding,
              borderRadius: 10,
              backgroundColor: 'white',
            },
          ]}>
          <View style={styles.container}>
            <View>
              <Text style={{color: '#1C1C1E', marginBottom: 5}}>
                {medicine}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Capsules />
                <Text style={styles.doseText}>{dose}</Text>
              </View>
              <Text style={styles.descText}>{desc}</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {buttons.map((item, i) => {
                                return <View style={styles.greenContainer} key={i}>
                                    <Text style={styles.greenText}>{item}</Text>
                                </View>;
                            })}
                        </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const leftSwipe = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          dispatch(deleteDestinationFunction(id));
          mandatory ? setShowCantDeletePopup(true) : setShowDeletePopup(true);
        }}>
        <View style={[styles.deleteBox, padding ? {height: 80} : {height: 50}]}>
          <RedTrash />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Swipable Item={Item} leftSwipe={leftSwipe} setIsOpened={setIsOpened} />
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
        modalTitle={'Данный пункт заказа является обязательным '}
        modalText={'Удаление данного пункта невозможно  '}
        buttonText={'Хорошо '}
        onPressBtn={() => setShowCantDeletePopup(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderLeftWidth: 3,
    borderRadius: 5,
    borderColor: '#9DC458',
    // height: 50,

    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doseText: {
    marginLeft: 5,
  },
  greenContainer: {
    backgroundColor: '#f2fbe2',
    height: 24,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 5,
    color: '#72777A',
  },
  greenText: {
    color: '#7B9E45',
    fontSize: 12,
    fontWeight: '600',
  },
  padding: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  deleteBox: {
    backgroundColor: '#f9f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 50,
    height: '100%',
  },
  descText: {
    color: '#72777A',
    fontSize: 12,
    marginTop: 10,
  },
});
