import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Prescription from './Prescription';

export default function Meal({meal, data, badje, prescriptions, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mealContainer}>
        <Text style={styles.meal}>{meal.slice(0, 5)}</Text>
        {/* <View style={styles.badje}> */}
        {/* // <Text style={styles.badjeText}>{badje}</Text> */}
        {/* </View> */}
      </View>

      <Prescription
        medicine={data.MEDICAMENT}
        // buttons={item.buttons}
        desc={data.DESCRIPTION}
        dose={data.DOSE}
        mandatory={true}
        id={data.id}
        // key={i}
        navigation={navigation}
      />

      {/* {prescriptions.map((item, i) => {
        return (
         
        );
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  mealContainer: {
    flexDirection: 'row',
  },
  meal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 20,
  },
  badje: {
    backgroundColor: '#E7F0D5',
    borderRadius: 50,
    height: 20,
    justifyContent: 'center',
    marginLeft: 10,
    paddingHorizontal: 8,
  },
  badjeText: {
    color: '#7B9E45',
    fontSize: 10,
  },
});
