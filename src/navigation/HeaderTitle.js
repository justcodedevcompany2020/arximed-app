import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {BackIcon} from '../assets/svgs/HomeScreenSvgs';
import {WhiteBackIcon} from '../assets/svgs/DoctorsScreenSvgs';

export default function HeaderTitle({
  title,
  navigation,
  left,
  white,
  fontSize,
  headerLeft,
  paddHorizontal,
}) {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={[title && {width: windowWidth}]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          zIndex: 999999,
          left: headerLeft,
          paddingHorizontal: paddHorizontal,
        }}>
        {white ? <WhiteBackIcon /> : <BackIcon />}
      </TouchableOpacity>
      {title && (
        <Text
          style={[
            {
              fontSize: 16,
              fontWeight: '400',
              marginRight: 20,
              textAlign: 'center',
            },
            left && {fontSize: 20, textAlign: 'left', marginLeft: 40},
            white ? {color: 'white'} : {color: '#1C1C1E'},
            fontSize && {fontSize: fontSize},
          ]}>
          {title}
        </Text>
      )}
    </View>
  );
}
