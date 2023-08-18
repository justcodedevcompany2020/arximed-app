import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Switch} from 'react-native';
import {ArchimedLogo} from '../assets/svgs/DoctorsScreenSvgs';
import {VerticalLine} from '../assets/svgs/HomeScreenSvgs';
import {SmallGreenArchimedLogo} from '../assets/svgs/SearchScreenSvgs';

export default function Bonuses() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.bonusesContainer}>
      <View style={styles.yourBonuses}>
        <Text style={styles.yourBonusesText}>Ваши бонусы</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ArchimedLogo />
          <Text style={styles.bonuses}>180</Text>
        </View>
      </View>
      <VerticalLine />
      <View style={{marginLeft: 20}}>
        <Text style={styles.yourBonusesText}>Списать</Text>
        <TouchableOpacity style={styles.button}>
          <SmallGreenArchimedLogo />
          <Text style={styles.buttonText}>180 бонусов</Text>
          <Switch
            trackColor={{false: '#cce0a8', true: '#9DC458'}}
            thumbColor={'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bonusesContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginTop: 10,
  },
  yourBonuses: {
    marginRight: 30,
  },
  yourBonusesText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    marginVertical: 10,
  },
  bonuses: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1C1C1E',
    marginLeft: 5,
  },
  button: {
    width: 174,
    backgroundColor: '#effadb',
    flexDirection: 'row',
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7B9E45',
    marginHorizontal: 5,
  },
});
