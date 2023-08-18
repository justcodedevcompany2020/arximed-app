import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {GreenArrowRight} from '../../../assets/svgs/MoreScreenSvgs';
import {infoData} from './InfoData';

export default function AboutApplication({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.fixed}
        source={require('../../../assets/background.png')}
      />
      {infoData.map((item, i) => {
        return (
          <InfoItem
            key={i}
            title={item.title}
            onPress={() => navigation.navigate('Info', {item: item})}
          />
        );
      })}
      <Text style={styles.version}>Версия приложения 1.0</Text>
    </SafeAreaView>
  );
}

const InfoItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.questionContainer} onPress={onPress}>
      <Text style={{color: '#1C1C1E'}}>{title}</Text>
      <GreenArrowRight />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  questionContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  version: {
    position: 'absolute',
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 50,
    fontSize: 16,
    color: '#FF5454',
  },
});
