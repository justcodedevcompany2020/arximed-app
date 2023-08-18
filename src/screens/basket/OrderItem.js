import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CurrencyRub} from '../../assets/svgs/DoctorsScreenSvgs';
import {RedTrash, GreyTrash} from '../../assets/svgs/BasketSvgs';
import Swipable from '../../components/Swipable';
import Blurview from '../../components/Blur';
import Popup from '../../components/Popup';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteBasketFunction,
  getBasketData,
} from '../../store/actions/actionsAnalysis';

export default function OrderItem({text, price, mandatory, id}) {
  const [openPopup, setOpenPopup] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const {basketData, deleteBasketData} = useSelector(
    state => state.analysisReducer,
  );

  const Item = () => {
    return (
      <TouchableOpacity
        style={[{marginTop: 10}, isOpened && {backgroundColor: '#f9f9fa'}]}>
        <View style={styles.container}>
          <Text style={styles.orderName}>{text}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.price}>{price}</Text>
            <CurrencyRub />
          </View>
          {mandatory && (
            <View style={styles.mandatoryContainer}>
              <Text style={styles.mandatory}>Обязательно</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const leftSwipe = () => {
    return name == text ? (
      <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <GreyTrash />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          setName(text);
          dispatch(deleteBasketFunction(id));
          dispatch(getBasketData());
        }}
        activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <RedTrash />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Swipable Item={Item} leftSwipe={leftSwipe} setIsOpened={setIsOpened} />
      {openPopup && <Blurview />}
      <Popup
        isVisible={openPopup}
        setIsVisible={setOpenPopup}
        nummberOfButtons={1}
        modalTitle={'Данный пункт заказа является обязательным '}
        modalText={'Удаление данного пункта невозможно  '}
        buttonText={'Хорошо '}
        onPressBtn={() => setOpenPopup(false)}
        buttonTextColor={'#007AFF'}
      />
    </>
  );
}

const styles = StyleSheet.create({
  deleteBox: {
    backgroundColor: '#f9f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 50,
    marginTop: 10,
    height: 74,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    height: 74,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    width: 190,
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  mandatoryContainer: {
    backgroundColor: '#effadb',
    position: 'absolute',
    paddingVertical: 5,
    width: 81,
    alignItems: 'center',
    borderRadius: 15,
  },
  mandatory: {
    color: '#7B9E45',
    fontSize: 10,
    fontWeight: '600',
  },
});
