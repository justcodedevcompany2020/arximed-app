import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {FilledStar} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useSelector, useDispatch} from 'react-redux';
import {
  doctorsSinglePage,
  getAllReception,
} from '../../../store/actions/actions';

export default function Doctor({
  data,
  rate,
  doctorName,
  doctorInfo,
  image,
  navigation,
}) {
  const dispatch = useDispatch();

  return data.item.map((value, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.container}
        onPress={() => {
          dispatch(getAllReception());
          dispatch(doctorsSinglePage(value.doctors_subject[0].doctor_id));
          navigation.navigate('DoctorProfile');
        }}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>
            {value.Fam_doctor} {value.om_doctor}
          </Text>
          <Text style={styles.aboutDoctor}>
            {value.doctor_service[0].specialisation_name}
          </Text>
          {/* {rate && (
          <TouchableOpacity style={styles.rateButton}>
            <FilledStar />
            <Text style={styles.rateText}>Оценить прием</Text>
          </TouchableOpacity>
        )} */}
        </View>
        <Image
          style={{width: 112, height: 108, borderRadius: 20}}
          source={{
            uri: `data:image/png;base64,` + value.photo,
          }}
        />
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  doctorInfo: {
    paddingTop: 15,
    paddingLeft: 15,
    width: '60%',
  },
  doctorName: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  aboutDoctor: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '600',
    color: '#949599',
  },
  rateButton: {
    backgroundColor: '#9DC458',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    marginTop: 12,
    width: 140,
  },
  rateText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
});
