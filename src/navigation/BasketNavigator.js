import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HeaderTitle from './HeaderTitle';
import BasketScreen from '../screens/basket/BasketScreen';
import CallDoctor from '../screens/basket/CallDoctor';
import MapScreen from '../screens/basket/Map';
import ThanksForOrder from '../screens/basket/ThanksForOrder';

const Stack = createNativeStackNavigator();

export default function BasketNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BasketScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Корзина'} left />
          ),
        })}
      />
      <Stack.Screen
        name="CallDoctor"
        component={CallDoctor}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Адрес'}
              fontSize={20}
            />
          ),
        })}
      />
      
      <Stack.Screen
        name="ThanksForOrder"
        component={ThanksForOrder}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Корзина'} left />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
