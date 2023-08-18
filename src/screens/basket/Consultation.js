import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RedCalendar} from '../../assets/svgs/HomeScreenSvgs';

const hours = ['13:20', '14:10', '15:10', '16:10', '17:10', '18:10'];

export default function Consultation() {
  return (
    <View style={styles.donationContainer}>
      <Text style={styles.bloodDonationText}>Взятие синовиальной жидкости</Text>

      <View style={styles.doctorInfoContainer}>
        <Image
          source={require('../../assets/images/doctors/doctorSmall.png')}
        />
        <View style={{marginLeft: 10}}>
          <Text style={styles.doctorName}>Тыртов Дмитрий Сергеевич</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RedCalendar />
            <Text style={styles.aboutDoctor}>Терапевт, стаж 27 лет</Text>
          </View>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hours.map((item, i) => {
          return (
            <TouchableOpacity key={i} style={styles.hour}>
              <Text style={styles.hourText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  donationContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 50,
  },
  doctorInfoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    marginVertical: 5,
  },
  aboutDoctor: {
    fontSize: 10,
    fontWeight: '500',
    color: '#828282',
    marginLeft: 5,
  },
  bloodDonationText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
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
    fontSize: 12,
    fontWeight: '600',
  },
});
