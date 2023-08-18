import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import moment from 'moment/moment';
import {
  ArrowDownBlack,
  ArrowLeft,
  ArrowRight,
  ArrowUpBlack,
} from '../../assets/svgs/BasketSvgs';

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

LocaleConfig.locales.fr = {
  monthNames: monthNames,
  monthNamesShort: [
    'Янв .',
    'Фев .',
    'Мар ',
    'Апр ',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
  today: 'Cегодня',
};
LocaleConfig.defaultLocale = 'fr';

export default function BasketCalendar() {
  const [selectedDay, setSelectedDay] = useState({
    '2022-12-10': {selected: true},
  });
  // const [opened, setOpened] = useState(false);
  // const [selectedDays, setSelectedDays] = useState({ "2022-12-20": { selected: true }, "2022-12-29": { selected: true } })
  // useEffect(() => {
  //     console.log(selectedDays);
  // }, [selectedDays])

  // const selectedDays = {
  //     [selectedDay]: { selected: true, marked: true }
  // }

  // function setDate(day) {
  // console.log(day);
  // setSelectedDay(day.dateString)
  // let selectedDay =
  // console.log(day);

  // let obj = selectedDays
  // obj[day.dateString] = { selected: true }
  // console.log(obj);
  // setSelectedDays(obj)
  // }
  return (
    <View style={[styles.container]}>
      <Calendar
        theme={{
          calendarBackground: 'transparent',
          selectedDayBackgroundColor: '#FF414C',
          selectedDayTextColor: 'white',
          // todayTextColor: 'white',
          // todayBackgroundColor: '#FF414C',
          textDisabledColor: '#b3b3b3',
          textDayStyle: {
            color: '#FF414C',
          },
          textDayFontSize: 14,
          textDayHeaderFontSize: 14,
          arrowColor: 'black',
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: '#72777A',
            },
            dayTextAtIndex1: {
              color: '#72777A',
            },
            dayTextAtIndex2: {
              color: '#72777A',
            },
            dayTextAtIndex3: {
              color: '#72777A',
            },
            dayTextAtIndex4: {
              color: '#72777A',
            },
            dayTextAtIndex5: {
              color: '#72777A',
            },
            dayTextAtIndex6: {
              color: '#72777A',
            },
          },
        }}
        renderArrow={direction =>
          direction === 'left' ? <ArrowLeft /> : <ArrowRight />
        }
        disablePan={true}
        // current={null}
        // initialDate={null}
        markedDates={selectedDay}
        pastScrollRange={2}
        futureScrollRange={2}
        // minDate={selectedDay}
        // initialDate={selectedDay}
        // minDate={'2022-11-7'}
        // maxDate={'2012-11-14'}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        // hideExtraDays={true}
        monthFormat={'MM'}
        onDayPress={day => {
          // let obj = selectedDays
          // obj[day.dateString] = { selected: true }
          // console.log(obj);
          // setSelectedDays(obj)
          let selDay = {[day.dateString]: {selected: true}};
          console.log(selDay);
          setSelectedDay(selDay);
        }}
        renderHeader={date => {
          let month = date.getMonth();
          let year = date.getFullYear();
          let yearMonth = `${monthNames[month]} ${year}`;
          return (
            <View style={styles.header}>
              <Text style={styles.month}>Дата</Text>
              <Text style={styles.month}>{yearMonth}</Text>
            </View>
          );
        }}
        enableSwipeMonths={true}
      />
      {/* <TouchableOpacity style={styles.arrow} onPress={() => setOpened(!opened)}>
            {opened ? <ArrowUpBlack /> : <ArrowDownBlack />}
        </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  month: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: 15,
  },
  arrow: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: '47%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '73%',
  },
});
