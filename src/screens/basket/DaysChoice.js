import React, {useState} from 'react';
import {Text, View} from 'react-native';
import DifferentDays from './DifferentDays';

export default function DaysChoice() {
  const [onDifferentDays, setOnDifferentDays] = useState(true);

  return (
    <>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          color: '#1C1C1E',
          marginTop: 20,
        }}>
        Выберите дату и время
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <DifferentDays
          day={'В один день'}
          isSelected={!onDifferentDays}
          onPress={() => setOnDifferentDays(false)}
        />
        <DifferentDays
          day={'В разные дни'}
          isSelected={onDifferentDays}
          onPress={() => setOnDifferentDays(true)}
        />
      </View>
    </>
  );
}
