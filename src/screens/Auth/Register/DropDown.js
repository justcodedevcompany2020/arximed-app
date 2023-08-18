import {
  Button,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function DropDown({data = [], value = {}, onSelect = () => {}}) {
  const [showOption, setShowOption] = useState(false);

  const onSelectItem = res => {
    setShowOption(false);
    onSelect(res);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowOption(!showOption)}>
        {value ? (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 20, height: 25}}
                source={require('../../../assets/images/gender.png')}
              />
              <Text style={styles.genderText}>{value?.language}</Text>
            </View>

            <Image
              style={{
                width: 15,
                height: 10,
                transform: [{rotate: showOption ? '180deg' : '0deg'}],
              }}
              source={require('../../../assets/images/Arrow.png')}
            />
          </View>
        ) : (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 20, height: 25}}
                source={require('../../../assets/images/gender.png')}
              />
              <Text style={styles.genderText}>Пол</Text>
            </View>

            <Image
              style={{
                width: 15,
                height: 10,
                transform: [{rotate: showOption ? '180deg' : '0deg'}],
              }}
              source={require('../../../assets/images/Arrow.png')}
            />
          </View>
        )}
      </TouchableOpacity>
      {showOption && (
        <View style={styles.dropbox}>
          {data.map((res, index) => {
            return (
              <TouchableOpacity
                onPress={() => onSelectItem(res)}
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 20, height: 25}}
                    source={require('../../../assets/images/gender.png')}
                  />
                  <Text style={styles.genderText}> {res.language} </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingVertical: 0,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    marginTop: 10,
    width: '100%',
    position: 'relative',
    height: 50,
  },
  genderText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
  },
  dropbox: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    height: 100,
    backgroundColor: '#F7F7F7',
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
  },
});
