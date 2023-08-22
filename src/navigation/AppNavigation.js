import React, {useEffect} from 'react';
import {
  StatusBar,
  TouchableOpacity,
  Text,
  Easing,
  Animated,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
//screens
import WelcomePage from '../screens/Auth/WelcomePage';
import LoginPageScreen from '../screens/Auth/Login/LoginPageScreen';
import RegisterPageScreen from '../screens/Auth/Register/RegisterPageScreen';
import LoginWithPhone from '../screens/Auth/Login/LoginWIthPhone';
import PhoneNumberRegister from '../screens/Auth/Register/PhoneNumberRegister';
import RegisterValidation from '../screens/Auth/Register/RegisterValidation';
import FeedBackPage from '../screens/Auth/Register/FeedBackPage';
import FeedBackSecondPage from '../screens/Auth/Register/FeedBackSecondPage';
import CreateNewAccount from '../screens/Auth/Register/CreateNewAccount';
import CreateAccountSecond from '../screens/Auth/Register/CreateAccountSecond';
import AddNewCity from '../screens/Auth/Register/AddNewCity';
import AddingCityDone from '../screens/Auth/Register/AddingCityDone';
import NavigationMenu from '../navigation/NavigationMenu';
import HealthPage from '../screens/analysis/analysisSystem/Health/HealthPage';
import TechnicalWorkInProgress from '../screens/TechnicalWorkInProgress';
import PinCodeScreen from '../screens/PinCode/PinCodeScreen';
import WritePinAgain from '../screens/PinCode/WritePinAgain';
import IncorrectPinScreen from '../screens/PinCode/IncorrectPinScreen';
import SinglePageFlower from '../screens/analysis/analysisSystem/Health/singlePageFlower';
//components
import WelcomeSwiper from '../Swiper';
import HeaderTitle from '../navigation/HeaderTitle';
import {BackIcon, BasketIcon} from '../assets/svgs/HomeScreenSvgs';
import PaymentsScreen from '../screens/profile/Payments/PaymentsScreen';
import SinglePage from '../screens/analysis/analysisSystem/Single/singlePage';

const Stack = createStackNavigator();

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['180deg', '0deg'],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                })
              : 1,
          },
        ],
      },
      opacity: current.opacity,
    };
  },
};

function zoomIn(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({position, scene}) => {
      const {index} = scene;
      let start = 0;

      if (Platform.OS !== 'ios') {
        start = 0.005;
      }

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [start, 1],
      });

      return {transform: [{scale}]};
    },
  };
}

function zoomOut(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({position, scene}) => {
      const {index} = scene;

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [10, 1],
      });

      return {transform: [{scale}]};
    },
  };
}

function flipY(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({position, scene}) => {
      const {index} = scene;

      const rotateY = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ['180deg', '0deg'],
      });

      return {transform: [{rotateY}], backfaceVisibility: 'hidden'};
    },
  };
}
const slide = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts, index}) => {
    console.log('current', current);
    console.log('next', next);
    console.log('layouts', layouts);
    console.log('index', index);
    return {
      cardStyle: {
        transform: [
          // {
          //     translateX: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [layouts.screen.width, 0],
          //     })
          // },
          // {
          //     translateY: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [layouts.screen.height, 0],
          //     })
          // },
          // {
          //     rotate: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: ["90deg", "0deg"],
          //     }),
          // },

          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                })
              : 1,
          },
        ],
      },
      // opacity: current.progress.interpolate({
      //     inputRange: [0, 1],
      //     outputRange: [0, 0.5],
      // }),
      opacity: current.opacity,
    };
  },
};

const MyTransition = {
  gestureEnabled: true,
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
          {
            rotateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['90deg', '00deg'],
            }),
          },
          // //tarberak
          // {
          //     rotateY: next
          //         ? next.progress.interpolate({
          //             inputRange: [0, 1],
          //             outputRange: ["0deg", "-180deg"],
          //         })
          //         : "0deg",
          // },
          // {
          //     translateX: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [500, 0],
          //     }),
          // },
          // {
          //     rotateY: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: ["180deg", "0deg"],
          //     }),
          // },

          // {
          //     translateX: next ? next.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, -layouts.screen.height],
          //     }) : 1,
          // },
          // {
          //     translateY: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [layouts.screen.height, 0],
          //     }),
          // },
          // {
          //     translateY: next ? next.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, -layouts.screen.height],
          //     }) : 1,
          // },

          // {
          //     rotate: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: ["-90deg", "0deg"],
          //     }),
          // },
          // {
          //     rotate: next ? next.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: ["0deg", "90deg"],
          //     }) : '0deg',
          // },
          // {
          //     scale: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, 1],
          //     })
          // },

          // {
          //     scale: next
          //         ? next.progress.interpolate({
          //             inputRange: [0, 1],
          //             outputRange: [1, 0.7],
          //         })
          //         : 1,
          // },]
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const AppNavigation = ({initialRouteName}) => {
  useEffect(() => {
    console.log(initialRouteName);
  }, [initialRouteName]);
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          tabBarShowLabel: false,
          // gestureEnabled: true,
          // gestureDirection: "horizontal",
          // ...flipX
          // ...MyTransition
          // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}

        // transitionConfig = {(nav) => zoomIn()}
      >
        <Stack.Screen
          name="WelcomeSwiper"
          component={WelcomeSwiper}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPageScreen}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={' '}
              />
            ),
            // ...MyTransition
            // ...slide
            // gestureDirection: 'vertical',
            // gestureDirection: 'vertical-inverted',

            // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            // cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
            // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

            // gestureDirection: 'horizontal',
            // gestureDirection: 'horizontal-inverted',

            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            // ...customTransition,
          })}
        />
        <Stack.Screen
          name="Login"
          component={LoginPageScreen}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={' '}
              />
            ),
            // ...MyTransition
          })}
        />
        <Stack.Screen
          name="LoginWithPhone"
          component={LoginWithPhone}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={'По номеру телефона'}
              />
            ),
            // transitionSpec: {
            //     open: TransitionSpecs.TransitionIOSSpec,
            //     close: TransitionSpecs.TransitionIOSSpec,
            // },
            // gestureDirection: 'vertical',
            // transitionSpec: {
            //     open: config,
            //     close: closeConfig,
            // },
          })}
        />
        <Stack.Screen
          name="PhoneNumberRegister"
          component={PhoneNumberRegister}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={'По номеру телефона'}
              />
            ),
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
        <Stack.Screen
          name="RegisterValidation"
          component={RegisterValidation}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={'По номеру телефона'}
              />
            ),

            // cardStyleInterpolator: forSlide
            // ...horizontalAnimation
          })}
        />
        <Stack.Screen
          name="FeedBackRegister"
          component={FeedBackPage}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={'Связаться с нами'}
              />
            ),
          })}
        />
        <Stack.Screen
          name="FeedBackSecond"
          component={FeedBackSecondPage}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle navigation={navigation} title={'Связаться с нами'} />
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
                paddHorizontal={16}
                navigation={navigation}
                title={''}
                left
                fontSize={20}
              />
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 20, marginBottom: 15}}
                onPress={() => navigation.navigate('BasketNavigator')}>
                <BasketIcon />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CreateNewAccount"
          component={CreateNewAccount}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle navigation={navigation} title={'Регистрация'} />
            ),
          })}
        />
        <Stack.Screen
          name="CreateAccountSecond"
          component={CreateAccountSecond}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                headerLeft={15}
                navigation={navigation}
                title={'Регистрация'}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddNewCity"
          component={AddNewCity}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddingCityDone"
          component={AddingCityDone}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={NavigationMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Health"
          component={HealthPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TechnicalWorkInProgress"
          component={TechnicalWorkInProgress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PinCodeScreen"
          component={PinCodeScreen}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="WritePinAgain"
          component={WritePinAgain}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.replace('PinCodeScreen')}>
                <BackIcon />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => navigation.navigate('Menu')}>
                <Text style={{color: 'black'}}>Пропустить</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="IncorrectPinScreen"
          component={IncorrectPinScreen}
          options={{
            title: '',
            headerTransparent: true,
            backgroundColor: 'white',
            headerLeft: () => (
              <Text
                style={{
                  width: '95%',
                  textAlign: 'center',
                  fontSize: 16,
                  color: 'black',
                }}>
                Количество попыток ввода ПИН истекло
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="PaymentsScreen"
          component={PaymentsScreen}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle navigation={navigation} title={'Платежи'} left />
            ),
          })}
        />
        <Stack.Screen
          name="SinglePageFlower"
          component={SinglePageFlower}
          options={({navigation}) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <HeaderTitle
                navigation={navigation}
                title={'Анализы'}
                fontSize={20}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
