import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import ProfileSingle from './SingleProfile/ProfileSingle';
import HeaderTitle from '../../navigation/HeaderTitle';
import AddCard from './SingleProfile/AddCard/AddCard';
import AddCardSecond from './SingleProfile/AddCard/AddCardSecond';
import CardAddDone from './SingleProfile/AddCard/CardAddDone';
import { TouchableOpacity } from 'react-native';
import { BackIcon, BasketIcon } from '../../assets/svgs/HomeScreenSvgs';
import AnalysisSinglePage from './ProfileAnalysis/AnalysisSinglePage';
import SurveysSingleScreen from './ProfileAnalysis/SurveysSingleScreen';
import MyNotesScreen from './MyNotes/MyNotesScreen';
import NotesSinglePage from './MyNotes/NotesSinglePage';
import CancelEntry from './MyNotes/CancelEntry';
import ReasonOfCancel from './MyNotes/ReasonOfCancel';
import ReasonComent from './MyNotes/ReasonComent';
import CancelDone from './MyNotes/CancelDone';
import ServiceProgram from './ServiceProgram/ServiceProgramScreen';
import MyPrescriptionsScreen from './MyPrescriptions/MyPrescriptionsScreen';
import AddPrescriptionScreen from './MyPrescriptions/AddPrescriptionScreen';
import EventInformation from './Directions/EventInformation';
import PdfFile from './Directions/PdvFile';
import BonusPrograms from './BonusPrograms/BonusPrograms';
import DirectionScreen from './Directions/DirectionsScreen';
import PaymentsScreen from './Payments/PaymentsScreen';
import SinglePagePrescription from './MyPrescriptions/SinglePagePrescription';
import AnalyzesAndExamination from './ProfileAnalysis/Analyzes&Examinations';

const Stack = createNativeStackNavigator();

export default function ProfileNav() {
    return (
        <Stack.Navigator
            initialRouteName="ProfileSreen"
            options={({ navigation }) => ({
                title: '',
                headerTransparent: true,

            })}
        >
            <Stack.Screen name="ProfileSreen" component={ProfileScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Профиль'} left />,
                })}
            />

            <Stack.Screen name="ProfileSingle" component={ProfileSingle}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Профиль'} left />,
                })}
            />

            <Stack.Screen name="AddCard" component={AddCard}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
                })}
            />

            <Stack.Screen name="AddCardSecond" component={AddCardSecond}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
                })}
            />
            <Stack.Screen name="CardAddDone" component={CardAddDone}
                options={({ navigation }) => ({
                    // headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="AnalysisSinglePage"
                component={AnalysisSinglePage}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => (
                        <HeaderTitle navigation={navigation} title={'Альфа-амилаза'} left />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('BasketNavigator')}>
                            <BasketIcon />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen name="SurveysSingle" component={SurveysSingleScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'№292253'} left />,
                })}
            />
            <Stack.Screen name="MyNotesScreen" component={MyNotesScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'№292253'} left />,
                })}
            />
            <Stack.Screen
                name="NotesSinglePage" component={NotesSinglePage}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Информация о записи'} left />,
                })}
            />
            <Stack.Screen
                name="CancelEntry" component={CancelEntry}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Отмена записи '} left />,
                })}
            />
            <Stack.Screen
                name="ReasonOfCancel" component={ReasonOfCancel}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Причина отмены'} left />,
                })}
            />
            <Stack.Screen
                name="ReasonComent" component={ReasonComent}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Причина отмены'} left />,
                })}
            />
            <Stack.Screen
                name="CancelDone" component={CancelDone}
                options={({ navigation }) => ({
                    // headerLeft: () => <HeaderTitle navigation={navigation} title={'Добавить карту'} />,
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="ServiceProgram" component={ServiceProgram}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Программа обслуживания'} left />,
                })}
            />
            <Stack.Screen
                name="MyPrescriptionsNavigator" component={MyPrescriptionsNavigator}
                options={() => ({
                    title: '',
                    headerShown: false,
                })}
            />
            <Stack.Screen
                name="BonusPrograms" component={BonusPrograms}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Бонусная программа'} left />,
                })}
            />
            <Stack.Screen
                name="DirectionScreen" component={DirectionScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Направления'} left />,
                })}
            />
            <Stack.Screen
                name="EventInformation" component={EventInformation}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Информация о событии'} left />,
                })}
            />
            <Stack.Screen
                name="PdfFile" component={PdfFile}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Pdf file'} left />,
                })}
            />
            <Stack.Screen
                name="PaymentsScreen" component={PaymentsScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Платежи'} left />,
                })}
            />
            <Stack.Screen
                name="AnalyzesAndExamination"
                component={AnalyzesAndExamination}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => (
                        <HeaderTitle navigation={navigation} title={'Анализы и обследования'} left />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.navigate('BasketNavigator')}>
                            <BasketIcon />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}



export const MyPrescriptionsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MyPrescriptionsScreen"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
            })}>
            <Stack.Screen
                name="MyPrescriptionsScreen"
                component={MyPrescriptionsScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Мои назначения'} left />,
                })}
            />
            <Stack.Screen
                name="AddPrescriptionScreen"
                component={AddPrescriptionScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerTransparent: true,
                    headerLeft: () => <HeaderTitle navigation={navigation} title={'Создать назначение '} left />,
                })}
            />
            <Stack.Screen
                name="SinglePagePrescription"
                component={SinglePagePrescription}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginRight: 10 }}
                            onPress={() => navigation.goBack()}>
                            <BackIcon />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};
