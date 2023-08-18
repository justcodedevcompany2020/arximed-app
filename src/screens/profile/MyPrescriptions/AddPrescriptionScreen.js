import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import PrescriptionInput from './PrescriptionsInput';
import {GreenCapsules, GreenTime} from '../../../assets/svgs/ProfileScreenSvgs';
import {Calendar} from '../../../assets/svgs/BasketSvgs';
import Button from '../../../components/Button';
import moment from 'moment';
import PrescriptionDropDown from './PrescriptionDropDown';
import PrescriptionDropDownSecond from './PrescriptionDropDownSecond';
import {useSelector, useDispatch} from 'react-redux';
import {
  addMyDestinationData,
  getUserDestinationData,
} from '../../../store/actions/actionsDestination';

export default function AddPrescriptionScreen({navigation}) {
  const [name, setName] = useState('');
  const [timeItems, setTimeItems] = useState([
    {name: '1 раз в день', isSelected: false},
    {name: '2 раза в день', isSelected: false},
    {name: '3 раза в день', isSelected: false},
    {name: '4 раза в день', isSelected: false},
    {name: '5 раз в день', isSelected: false},
    {name: '6 раз в день', isSelected: false},
    {name: '7 раз в день', isSelected: false},
    {name: '8 раз в день', isSelected: false},
    {name: '9 раз в день', isSelected: false},
    {name: '10 раз в день', isSelected: false},
  ]);
  const [openTimeSelect, setOpenTimeSelect] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startDateIsSelected, setStartDateIsSelected] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [endDateIsSelected, setEndDateIsSelected] = useState(false);
  const [addiction, setAddiction] = useState('');
  const [dose, setDose] = useState('');
  const [periodicity, setPeriodicity] = useState('');
  const [periodicityItems, setPeriodicityItems] = useState([
    'Каждый день',
    'Через 1 день',
    'Через 2 дня',
  ]);
  const [openPeriodicitySelect, setOpenPeriodicitySelect] = useState(false);
  const [startdatePlaceholder, setStartDatePlaceholder] =
    useState('Дата начала');
  const [enddatePlaceholder, setEndDatePlaceholder] =
    useState('Дата завершения');
  const [isDisabled, setIsDisabled] = useState(true);

  const {selectedTimeData, timeNew, addMyDestination} = useSelector(
    state => state.destinationReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let isSelected = false;
    timeItems.forEach(e => e.isSelected && (isSelected = true));
    if (
      name &&
      isSelected &&
      startDateIsSelected &&
      endDateIsSelected &&
      addiction &&
      dose &&
      periodicity
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [
    name,
    timeItems,
    startDateIsSelected,
    endDateIsSelected,
    addiction,
    dose,
    periodicity,
  ]);

  useEffect(() => {
    if (openTimeSelect && openPeriodicitySelect) {
      setOpenPeriodicitySelect(false);
    }
  }, [openTimeSelect]);

  useEffect(() => {
    if (openTimeSelect && openPeriodicitySelect) {
      setOpenTimeSelect(false);
    }
  }, [openPeriodicitySelect]);

  // console.log(addMyDestination, 'ddd');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.fixed}
        resizeMode="cover"
        source={require('../../../assets/background.png')}
      />
      <ScrollView style={{zIndex: -1}} showsVerticalScrollIndicator={false}>
        <Text style={{color: 'black', marginBottom: 15}}>
          Здесь памятка о том, что эта запись появится в МКК клиента, чтобы он
          понимал, что это назначение будет видно для клиники
        </Text>
        <PrescriptionInput
          inputType={'default'}
          Icon={GreenCapsules}
          value={name}
          onChange={setName}
          placeholder={'Введите Название'}
        />
        <PrescriptionDropDown
          Svg={GreenTime}
          setItems={setTimeItems}
          setiItems={setTimeItems}
          type={'multiple'}
          items={timeItems}
          openDropDown={openTimeSelect}
          setOpenDropDown={setOpenTimeSelect}
          placeholder={'Введите время приема препарата'}
        />
        <PrescriptionInput
          inputType={'startdate'}
          Icon={Calendar}
          value={startDate}
          onChange={value => {
            setStartDate(value);
            setStartDateIsSelected(true);
            setStartDatePlaceholder(`${moment(value).format('M.D.YYYY')}`);
            if (endDateIsSelected) {
              setEndDateIsSelected(false);
              setEndDate(new Date());
              setEndDatePlaceholder('Дата завершения');
            }
          }}
          minDate={new Date()}
          placeholder={startdatePlaceholder}
        />
        <PrescriptionInput
          inputType={'enddate'}
          Icon={Calendar}
          value={endDate}
          onChange={value => {
            setEndDate(value);
            setEndDateIsSelected(true);
            setEndDatePlaceholder(`${moment(value).format('M.D.YYYY')}`);
          }}
          minDate={startDate}
          disabled={startDateIsSelected ? false : true}
          placeholder={enddatePlaceholder}
        />
        {/* <PrescriptionInput inputType={'default'} Icon={GreenCapsules} value={addiction} onChange={setAddiction} placeholder={'Зависимость от приема пищи'} /> */}
        <PrescriptionInput
          inputType={'default'}
          Icon={GreenCapsules}
          value={dose}
          onChange={setDose}
          placeholder={'Дозировка'}
        />
        <PrescriptionDropDownSecond
          Svg={GreenTime}
          value={periodicity}
          onChange={setPeriodicity}
          setiItems={setPeriodicityItems}
          items={periodicityItems}
          openDropDown={openPeriodicitySelect}
          setOpenDropDown={setOpenPeriodicitySelect}
          placeholder={'Периодичность'}
        />
      </ScrollView>
      <Button
        text={'Сохранить'}
        isDisabled={
          name &&
          selectedTimeData[0] &&
          startDate &&
          endDate &&
          dose &&
          periodicity
            ? false
            : true
        }
        color={'white'}
        backgroundColor={'#9DC458'}
        onPress={() => {
          dispatch(
            addMyDestinationData(
              name,
              selectedTimeData[0],
              startDate,
              endDate,
              dose,
              periodicity,
            ),
          );
          if (addMyDestination.message) {
            dispatch(getUserDestinationData());
            navigation.navigate('MyPrescriptionsScreen');
          }
        }}
      />
    </SafeAreaView>
  );
}

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
});
