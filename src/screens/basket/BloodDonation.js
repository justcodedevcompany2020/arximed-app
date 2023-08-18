import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const hours = ['13:20', '14:10', '15:10', '16:10', '17:10', '18:10'];

export default function BloodDonation() {
  return (
    <>
      <View style={styles.donationContainer}>
        <Text style={styles.bloodDonationText}>Сдача крови</Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  donationContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
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
  bloodDonationText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
});
