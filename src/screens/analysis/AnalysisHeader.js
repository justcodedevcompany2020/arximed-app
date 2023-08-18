import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import {NotificationIcon, BasketIcon} from '../../assets/svgs/HomeScreenSvgs';

export default function AnalysisHeader({navigation}) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 55,
        paddingHorizontal: 20,
        paddingBottom: 15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 12}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              lineHeight: 29,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: 'black',
            }}>
            Анализы и услуги
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 80,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('BasketNavigator')}>
          <BasketIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}
