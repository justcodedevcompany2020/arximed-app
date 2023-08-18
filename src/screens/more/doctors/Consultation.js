import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {CurrencyRub} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {
  getExamIdDoctors,
  getSubjectIdDoctors,
  getPriceConsultation,
} from '../../../store/actions/actions';

export default function Consultation({
  consultation,
  price,
  isOnline,
  navigation,
  exam_id,
  subject_id,
}) {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(getExamIdDoctors(exam_id));
        dispatch(getPriceConsultation(price));
        dispatch(getSubjectIdDoctors(subject_id));
        navigation.navigate('MakeAnAppointment');
      }}
      style={styles.container}>
      {isOnline && (
        <View style={styles.online}>
          <Text style={styles.onlineText}>Онлайн</Text>
        </View>
      )}
      <Text style={styles.consultation}>{consultation}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <CurrencyRub />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  consultation: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    width: '75%',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: 'black',
  },
  online: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: '#f2fbe2',
    width: 57,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#7B9E45',
  },
});
