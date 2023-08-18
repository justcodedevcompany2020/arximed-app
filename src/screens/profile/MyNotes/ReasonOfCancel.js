import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {GreenIconSelect} from '../../../assets/svgs/HomeScreenSvgs';
import Button from '../../../components/Button';

let data = [
  {id: 1, name: 'Не успеваю на прием ', key: 'Не успеваю на прием '},
  {id: 2, name: 'Нашел другого врача ', key: 'Нашел другого врача '},
  {id: 3, name: 'Проблема не актуальна ', key: 'Проблема не актуальна '},
  {id: 4, name: 'Другое ', key: 'Другое '},
];

export default function ReasonOfCancel({navigation}) {
  const [selectedReason, setSelectedReason] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {data.map(value => {
          return (
            <TouchableOpacity
              key={value.key}
              style={styles.reasons}
              onPress={() => {
                setSelectedReason(value.key);
              }}>
              {value.key === selectedReason ? (
                <GreenIconSelect />
              ) : (
                <View style={styles.greenCircle} />
              )}
              <Text style={styles.text}>{value.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <Button
        text={'Далее'}
        color={'white'}
        backgroundColor={'#9DC458'}
        isDisabled={false}
        onPress={() => navigation.navigate('ReasonComent')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  scrollView: {
    backgroundColor: 'transparent',
    marginBottom: 90,
    marginTop: 120,
    width: '100%',
  },
  reasons: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenCircle: {
    width: 21,
    height: 21,
    borderWidth: 1,
    borderColor: '#E7F0D5',
    borderRadius: 50,
  },
  text: {
    color: '#1C1C1E',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 20,
    fontWeight: '400',
  },
});
