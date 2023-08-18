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
import Button from '../../../components/Button';

export default function ReasonComent({navigation}) {
  const [comment, setComment] = useState('');

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
        <Text style={[styles.text, {color: '#000000'}]}>
          Опишите причину отмены записи
          <Text style={[styles.text, {color: 'red'}]}> *</Text>
        </Text>
        <View style={styles.useless}>
          <TextInput
            multiline
            placeholder="Добрый день"
            placeholderTextColor="#7B9E45"
            style={[{paddingVertical: 0, color: '#7B9E45'}]}
            value={comment}
            onChangeText={text => {
              setComment(text);
            }}
          />
        </View>
        <Text style={[styles.policicalText, {color: '#000000'}]}>
          Отмена записи происходит согласно{' '}
          <Text style={[styles.policicalText, {color: '#2A7BF4'}]}>
            {' '}
            политике сервиса
          </Text>
        </Text>
      </ScrollView>
      <Button
        text={'Далее'}
        color={'white'}
        backgroundColor={'#9DC458'}
        isDisabled={false}
        onPress={() => navigation.navigate('CancelDone')}
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
    marginTop: 120,
    width: '100%',
  },
  useless: {
    height: 290,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    backgroundColor: '#F3F7ED',
    paddingLeft: 20,
  },
  policicalText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    marginTop: 20,
  },
});
