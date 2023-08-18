import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnalysisTakeScreen from './analysisTake/AnalysisTakeScreen';
import MedicalExaminations from './analysisTake/MedicalExaminations/MedicalExaminations';
import AnalysisSystemScreen from './analysisSystem/AnalysisSystemScreen';
import AnalysisScreen from './AnalysisScreen';
import SingleExaminationPage from './analysisTake/SingleExamination/SingleExaminationPage';
import SinglePage from './analysisSystem/Single/singlePage';
import ComplexesFirstPage from './Complexes/ComplexesFirstPage';
import ComplexesSinglePage from './Complexes/ComplexesSinglePage';
import ComplexesBuy from './Complexes/ComplexesBuy';
import Notifications from '../home/Notifications';
import HeaderTitle from '../../navigation/HeaderTitle';
import BasketNavigator from '../../navigation/BasketNavigator';
import CallDoctor from '../basket/CallDoctor';
import MapScreen from '../basket/Map';
import {DoctorsNavigator} from '../../navigation/NavigationMenu';
import {BackIcon, BasketIcon} from '../../assets/svgs/HomeScreenSvgs';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function AnalysisStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="AnalysisScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="AnalysisScreen"
        component={AnalysisScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Уведомления'} left />
          ),
        })}
      />
      <Stack.Screen
        name="BasketNavigator"
        component={BasketNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AnalysisTakeScreen"
        component={AnalysisTakeScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Сдать анализы'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="MedicalExaminations"
        component={MedicalExaminations}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Пройти обследование'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="AnalysisSystemScreen"
        component={AnalysisSystemScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Система гемостаза'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="SingleExamination"
        component={SingleExaminationPage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'МРТ'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="SinglePage"
        component={SinglePage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={''}
              left
              fontSize={20}
              // headerLeft={15}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10, marginTop: 20}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ComplexesFirstPage"
        component={ComplexesFirstPage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Комплексы'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ComplexesSinglePage"
        component={ComplexesSinglePage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="ComplexesBuy"
        component={ComplexesBuy}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'ТТГ'}
              left
              fontSize={20}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('BasketNavigator')}>
              <BasketIcon />
            </TouchableOpacity>
          ),
        })}
      />
      {/*  */}
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
        name="DoctorsNavigator"
        component={DoctorsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
