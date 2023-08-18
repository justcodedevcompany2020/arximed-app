import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, View, Text} from 'react-native';
import Blurview from '../../../components/Blur';
import moment from 'moment/moment';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import {ArrowLeft, ArrowRight} from '../../../assets/svgs/ProfileScreenSvgs';
import Button from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {getSelectDay} from '../../../store/actions/actionsDestination';

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
  dayNamesShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

export default function ProfileCalendar({showPopup, setShowPopup}) {
  const [selectedDay, setSelectedDay] = useState(moment().format('YYYY-MM-DD'));

  const dispatch = useDispatch();
  return (
    <Modal transparent={true} visible={showPopup}>
      <Blurview />
      <Pressable style={styles.background}>
        <View style={styles.container}>
          <View style={[styles.calendarContainer]}>
            <Calendar
              theme={{
                // backgroundColor: 'transpar',
                calendarBackground: 'transparent',
                // textSectionTitleColor: '#b6c1cd',
                // textSectionTitleDisabledColor: '#d9e1e8'
                selectedDayBackgroundColor: 'transparent',
                selectedDayTextColor: '#222222',
                todayTextColor: 'white',
                todayBackgroundColor: '#9DC458',
                // dayTextColor: 'blue',
                textDisabledColor: '#222222',
                // dotColor: '#00adf5',
                // selectedDotColor: '#ffffff',
                // arrowColor: 'orange',
                // disabledArrowColor: '#d9e1e8',
                // monthTextColor: 'blue',
                // indicatorColor: 'blue',
                // textDayFontFamily: 'monospace',
                // textMonthFontFamily: 'monospace',
                // textDayHeaderFontFamily: 'monospace',
                // textDayFontWeight: '300',
                // textMonthFontWeight: 'bold',
                // textDayHeaderFontWeight: '300',
                // textDayFontSize: 11,
                textDayStyle: {
                  color: '#222222',
                  fontSize: 11,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
                // textMonthFontSize: 16,
                textDayHeaderFontSize: 12,
                // textDayHeaderColor: 'white',
                // monthTextColor: 'white',
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                // onPressArrowRight={addMonth => addMonth()}
                'stylesheet.calendar.header': {
                  dayTextAtIndex0: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex1: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex2: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex3: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex4: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex5: {
                    color: 'black',
                    fontWeight: '500',
                  },
                  dayTextAtIndex6: {
                    color: 'black',
                    fontWeight: '500',
                  },
                },
                header: {
                  backgroundColor: '#f5f6f9',
                  borderRadius: 12,
                },
              }}
              renderArrow={direction =>
                direction === 'left' ? <ArrowLeft /> : <ArrowRight />
              }
              disablePan={true}
              // current={'2022-11-05'} //we need this
              // markedDates={{}}
              // disableWeekScroll={true}
              // pagingEnabled
              pastScrollRange={2}
              futureScrollRange={2}
              // minDate={selectedDay}
              // initialDate={'2022-11-07'}
              // minDate={'2022-11-7'}
              // maxDate={'2012-11-14'}
              onPressArrowLeft={subtractMonth => subtractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              // // Handler which gets executed on day press. Default = undefined
              onDayPress={day => {
                console.log('selected day', day);
                setSelectedDay(day);
                dispatch(getSelectDay(day));
              }}
              // // Handler which gets executed on day long press. Default = undefined
              // onDayLongPress={day => {
              //  console.log('selected day', day);
              // }}
              // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={'MM'}
              // onMonthChange={month => {
              // console.log('month changed', month);
              // }}
              renderHeader={date => {
                let month = date.getMonth();
                let year = date.getFullYear();
                // console.log(date, 'timmmeeee');
                return (
                  <View style={styles.header}>
                    <Text style={styles.year}>{year}</Text>
                    <Text style={styles.month}>{monthNames[month]}</Text>
                  </View>
                );
              }}
              enableSwipeMonths={true}
            />
          </View>
          <Button
            text={'Готово'}
            isDisabled={false}
            color={'white'}
            backgroundColor={'#9DC458'}
            marginBottom={20}
            onPress={() => setShowPopup(false)}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  month: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },
  year: {
    fontSize: 28,
    textAlign: 'center',
    color: 'black',
  },
  calendarContainer: {
    zIndex: 999999,
  },
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: '20%',
    width: '90%',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 2,
    zIndex: 99999999,
  },
  arrow: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: '47%',
  },
  background: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});
