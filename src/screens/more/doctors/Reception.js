import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native';
import {PushPin} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useSelector, useDispatch} from 'react-redux';
import {getTimeConsultation} from '../../../store/actions/actions';

const hours = ['13:20', '14:10', '15:10', '16:10', '17:10', '18:10'];

export default function Reception({navigation, netZapisi, isOnline}) {
  const {
    consultationDate,
    exam_id_doctors,
    subject_id_doctors,
    doctorTimeData,
  } = useSelector(state => state.justDriveReducer);

  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.receptionType}>Тип приема</Text>
      <Text style={styles.aboutConsultation}>
        Консультация врача интегративной медицины{' '}
        <Text style={{color: 'black'}}>(прием 90 минут)</Text>{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
        }}>
        <PushPin />
        <Text style={styles.address}>ул. Вавилова, д. 68 корп. 2</Text>
      </View>
      {netZapisi ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}>
          {doctorTimeData.data.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  dispatch(getTimeConsultation(item.t1.slice(0, 5)));
                  navigation.navigate('ConsultationScreen', {
                    isOnline: isOnline ? true : false,
                  });
                }}
                key={i}
                style={styles.hour}>
                <Text style={styles.hourText}>{item.t1.slice(0, 5)}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Нет записи на этот день</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  receptionType: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  aboutConsultation: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8E8E93',
  },
  address: {
    fontSize: 10,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
  },
  button: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    width: 165,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#72777A',
  },
  hour: {
    backgroundColor: '#effadb',
    borderRadius: 5,
    paddingVertical: 7,
    width: 60,
    alignItems: 'center',
    marginRight: 10,
  },
  hourText: {
    color: '#7B9E45',
  },
});
