import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnalysisStackNavigation from '../screens/analysis/AnalysisStackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
//screens
import HomeScreen from '../screens/home/HomeScreen';
import OnlainChat from '../screens/chat/OnlainChat';
import Notifications from '../screens/home/Notifications';
import SearchScreen from '../screens/home/SearchScreen';
import MoreScreen from '../screens/more/MoreScreen';
import OurDoctors from '../screens/more/doctors/OurDoctors';
import DoctorProfile from '../screens/more/doctors/DoctorProfile';
import MakeAnAppointment from '../screens/more/doctors/MakeAnAppointment';
import ProfileNav, {
  MyPrescriptionsNavigator,
} from '../screens/profile/ProfileNav';
import ConsultationScreen from '../screens/more/doctors/ConsultationScreen';
import PersonalDataScreen from '../screens/PersonalDataScreen';
import OrderScreen from '../screens/OrderScreen';
import BasketNavigator from './BasketNavigator';
import EditPersonalData from '../screens/EditPersonalData';
import ThanksForOrder from '../screens/basket/ThanksForOrder';
import FAQ from '../screens/more/FAQ';
import AboutClinic from '../screens/more/AboutClinic';
import NewsAndPromotions from '../screens/more/NewsAndPromotions/NewsAndPromotions';
import AboutApplication from '../screens/more/AboutApp/AboutApplication';
import Info from '../screens/more/AboutApp/Info';
import MyNotesScreen from '../screens/profile/MyNotes/MyNotesScreen';
import AnalysisSinglePage from '../screens/profile/ProfileAnalysis/AnalysisSinglePage';
import AnalyzesAndExamination from '../screens/profile/ProfileAnalysis/Analyzes&Examinations';
import NotesSinglePage from '../screens/profile/MyNotes/NotesSinglePage';
import PdfFile from '../screens/profile/Directions/PdvFile';
import SurveysSingleScreen from '../screens/profile/ProfileAnalysis/SurveysSingleScreen';
import DirectionScreen from '../screens/profile/Directions/DirectionsScreen';
import EventInformation from '../screens/profile/Directions/EventInformation';
import HealthPage from '../screens/analysis/analysisSystem/Health/HealthPage';
import AnalysisTakeScreen from '../screens/analysis/analysisTake/AnalysisTakeScreen';
import AnalysisSystemScreen from '../screens/analysis/analysisSystem/AnalysisSystemScreen';
import CallDoctor from '../screens/basket/CallDoctor';
import ProfileSingle from '../screens/profile/SingleProfile/ProfileSingle';
import AddCard from '../screens/profile/SingleProfile/AddCard/AddCard';
import AddCardSecond from '../screens/profile/SingleProfile/AddCard/AddCardSecond';
import CancelDone from '../screens/profile/MyNotes/CancelDone';
import CardAddDone from '../screens/profile/SingleProfile/AddCard/CardAddDone';
import CancelEntry from '../screens/profile/MyNotes/CancelEntry';
import ReasonComent from '../screens/profile/MyNotes/ReasonComent';
import ReasonOfCancel from '../screens/profile/MyNotes/ReasonOfCancel';
import FeedBackPage from '../screens/more/FeedBackPage';
//components
import HeaderTitle from './HeaderTitle';
//icons
import {
  HomeIcon,
  AnalizesIcon,
  ChatIcon,
  MoreIcon,
} from '../assets/svgs/NavigationMenuSvgs';
import TabBarIcon from './TabBarIcon';
import {BackIcon, BasketIcon} from '../assets/svgs/HomeScreenSvgs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function NavigationMenu() {
  const tabBarStyle = {
    position: 'absolute',
    bottom: 25,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    height: 53,
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: tabBarStyle,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <View style={{marginLeft: 20}}>
                <TabBarIcon
                  focused={focused}
                  Icon={HomeIcon}
                  width={70}
                  text={'Главная'}
                />
              </View>
            );
          },
          tabBarStyle: (() => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (
              routeName === 'ProfileNav' ||
              routeName === 'MyNotesScreen' ||
              routeName === 'NotesSinglePage' ||
              routeName === 'PdfFile' ||
              routeName === 'AnalyzesAndExamination' ||
              routeName === 'AnalysisSinglePage' ||
              routeName === 'DirectionScreen' ||
              routeName === 'EventInformation' ||
              routeName === 'CancelEntry' ||
              routeName === 'ReasonOfCancel' ||
              routeName === 'ReasonComent' ||
              routeName === 'CancelDone' ||
              routeName === 'AboutClinic' ||
              routeName === 'AboutApplication' ||
              routeName === 'SurveysSingle' ||
              routeName === 'FAQ' ||
              routeName === 'MyPrescriptionsNavigator'
            ) {
              return {display: 'none'};
            }
            return tabBarStyle;
          })(route),
        })}
      />
      <Tab.Screen
        name="Analizes"
        component={AnalysisStackNavigation}
        options={route => ({
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                Icon={AnalizesIcon}
                width={90}
                text={'Анализы и услуги'}
              />
            );
          },
          tabBarStyle: tabBarStyle,
        })}
      />
      {/* <Tab.Screen
        name="chat"
        component={OnlainChat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabBarIcon
                focused={focused}
                Icon={ChatIcon}
                width={70}
                text={'Онлайн чат'}
              />
            );
          },
        }}
      /> */}
      <Tab.Screen
        name="more"
        component={MoreNavigator}
        options={({route}) => ({
          tabBarIcon: ({focused}) => {
            return (
              <View style={{marginRight: 40}}>
                <TabBarIcon
                  focused={focused}
                  Icon={MoreIcon}
                  width={50}
                  text={'Еще'}
                />
              </View>
            );
          },
          tabBarStyle: (() => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (
              routeName === 'AboutClinic' ||
              routeName === 'AboutApplication' ||
              routeName === 'FAQ' ||
              routeName === 'MyPrescriptionsNavigator' ||
              routeName === 'ProfileSingle' ||
              routeName === 'AddCard' ||
              routeName === 'AddCardSecond' ||
              routeName === 'CardAddDone' ||
              routeName === 'SurveysSingle' ||
              routeName === 'Info'
            ) {
              return {display: 'none'};
            }
            return tabBarStyle;
          })(route),
        })}
      />
    </Tab.Navigator>
  );
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
        name="SearchScreen"
        component={SearchScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Поиск'} left />
          ),
        })}
      />
      <Stack.Screen
        name="ProfileNav"
        component={ProfileNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AnalyzesAndExamination"
        component={AnalyzesAndExamination}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Анализы и обследования'}
              left
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
        name="SurveysSingle"
        component={SurveysSingleScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'№292253'} left />
          ),
        })}
      />
      <Stack.Screen
        name="AboutClinic"
        component={AboutClinic}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'О клинике'} />
          ),
        })}
      />
      <Stack.Screen
        name="NewsAndPromotions"
        component={NewsAndPromotions}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Новости и Акции'} />
          ),
        })}
      />
      <Stack.Screen
        name="DirectionScreen"
        component={DirectionScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Направления'} left />
          ),
        })}
      />
      <Stack.Screen
        name="EventInformation"
        component={EventInformation}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Информация о событии'}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="AnalysisSinglePage"
        component={AnalysisSinglePage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Альфа-амилаза'} left />
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
        name="CallDoctor"
        component={CallDoctor}
        options={{
          headerShown: false,
        }}
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
      <Stack.Screen
        name="CancelEntry"
        component={CancelEntry}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Отмена записи '}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="ReasonOfCancel"
        component={ReasonOfCancel}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Причина отмены'}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="ReasonComent"
        component={ReasonComent}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Причина отмены'}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="CancelDone"
        component={CancelDone}
        options={({navigation}) => ({
          // headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PdfFile"
        component={PdfFile}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Pdf file'} left />
          ),
        })}
      />
      <Stack.Screen
        name="NotesSinglePage"
        component={NotesSinglePage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Информация о записи'}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="MyNotesScreen"
        component={MyNotesScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Мои записи'} left />
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
        name="OrderScreen"
        component={OrderScreen}
        options={({navigation}) => ({
          title: 'Заказ № 1558458',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PersonalDataScreen"
        component={PersonalDataScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Личные данные '}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="EditPersonalData"
        component={EditPersonalData}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Личные данные '}
              left
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
      <Stack.Screen
        name="MyPrescriptionsNavigator"
        component={MyPrescriptionsNavigator}
        options={() => ({
          title: '',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

const MoreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MoreScreen"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DoctorsNavigator"
        component={DoctorsNavigator}
        // options={{
        // }}
        options={({navigation, route}) => ({
          headerShown: false,
          // // options={({ route }) => ({
          // tabBarStyle: ((route) => {
          //   const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          //   console.log(routeName);
          //   if (routeName === 'DoctorProfile') {
          //     return { display: 'none' };
          //   }
          //   return;
          // })(route),
          // // })}
        })}
      />
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={({navigation}) => ({
          title: 'Заказ № 1558458',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PersonalDataScreen"
        component={PersonalDataScreen}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Личные данные'} left />
          ),
        })}
      />
      <Stack.Screen
        name="FeedBackScreen"
        component={FeedBackPage}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Связаться с нами '}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="EditPersonalData"
        component={EditPersonalData}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Личные данные'} left />
          ),
        })}
      />
      <Stack.Screen
        name="AboutClinic"
        component={AboutClinic}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'О клинике'} />
          ),
        })}
      />
      <Stack.Screen
        name="NewsAndPromotions"
        component={NewsAndPromotions}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Новости и Акции'} />
          ),
        })}
      />
      <Stack.Screen
        name="AboutApplication"
        component={AboutApplication}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'О приложении'} left />
          ),
        })}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Часто задаваемые вопросы'}
              left
            />
          ),
        })}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={({navigation}) => ({
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Health"
        component={HealthPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSingle"
        component={ProfileSingle}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Профиль'} left />
          ),
        })}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Добавить карту'} />
          ),
        })}
      />

      <Stack.Screen
        name="AddCardSecond"
        component={AddCardSecond}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Добавить карту'} />
          ),
        })}
      />
      <Stack.Screen
        name="CardAddDone"
        component={CardAddDone}
        options={({navigation}) => ({
          // headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export const DoctorsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OurDoctors"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
      })}>
      <Stack.Screen
        name="OurDoctors"
        component={OurDoctors}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle navigation={navigation} title={'Наши врачи'} left />
          ),
        })}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={({navigation}) => ({
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="MakeAnAppointment"
        component={MakeAnAppointment}
        options={({navigation}) => ({
          title: '',
          headerTransparent: true,
          headerLeft: () => (
            <HeaderTitle
              navigation={navigation}
              title={'Выбор даты и времени'}
              white
            />
          ),
        })}
      />
      <Stack.Screen
        name="ConsultationScreen"
        component={ConsultationScreen}
        options={({navigation}) => ({
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
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
};
