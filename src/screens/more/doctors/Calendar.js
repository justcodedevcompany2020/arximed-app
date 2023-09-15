import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet} from 'react-native';
import {LocaleConfig, CalendarList} from 'react-native-calendars';
import {ArrowDownWhite} from '../../../assets/svgs/DoctorsScreenSvgs';
import moment from 'moment/moment';
import {useSelector, useDispatch} from 'react-redux';
import {
  saveDateForConsultation,
  doctorVisitTime,
} from '../../../store/actions/actions';

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
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

export default function Calendar() {
  const dispatch = useDispatch();
  const [selectedDay, setSelectedDay] = useState(moment());
  const {
    consultationDate,
    exam_id_doctors,
    subject_id_doctors,
    doctorTimeData,
  } = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    console.log(selectedDay.format('YYYY-MM-DD'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <LinearGradient
      colors={['#FF4E4E', '#A1E825']}
      start={{x: 0, y: 0}}
      end={{x: 2, y: 0}}
      style={{
        paddingTop: 120,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingBottom: 30,
        height: 310,
      }}>
      <CalendarList
        theme={{
          backgroundColor: 'transparent',
          calendarBackground: 'transparent',
          selectedDayBackgroundColor: 'transparent',
          selectedDayTextColor: 'white',
          todayTextColor: '#FF4E4E',
          todayBackgroundColor: 'white',
          textDayStyle: {
            color: 'white',
          },
          textDayFontSize: 14,
          textDayHeaderFontSize: 14,
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'white',
            },
            dayTextAtIndex1: {
              color: 'white',
            },
            dayTextAtIndex2: {
              color: 'white',
            },
            dayTextAtIndex3: {
              color: 'white',
            },
            dayTextAtIndex4: {
              color: 'white',
            },
            dayTextAtIndex5: {
              color: 'white',
            },
            dayTextAtIndex6: {
              color: 'white',
            },
          },
        }}
        disablePan={true}
        // current={null}
        // markedDates={{}}

        pastScrollRange={2}
        futureScrollRange={2}
        hideArrows={true}
        onDayPress={day => {
          dispatch(saveDateForConsultation(day));
          dispatch(
            doctorVisitTime(
              subject_id_doctors,
              11 ,
              day.dateString,
              day.dateString,
            ),
          );
        }}
        renderHeader={date => {
          let month = date.getMonth();
          let year = date.getFullYear();
          let yearMonth = `${monthNames[month]} ${year}`;
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 10,
              }}>
              <Text style={styles.month}>{yearMonth}</Text>
              <Text style={styles.month}>Сегодня, 20 июля</Text>
            </View>
          );
        }}
        enableSwipeMonths={true}
      />
      {/* <View style={{ alignItems: 'center' }}>
            <ArrowDownWhite />
        </View> */}
    </LinearGradient>
  );
}
// textSectionTitleColor: '#b6c1cd',
// textSectionTitleDisabledColor: '#d9e1e8',
// dayTextColor: 'blue',
// textDisabledColor: '#d9e1e8',
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
// textMonthFontSize: 16,
// textDayHeaderColor: 'white',
// monthTextColor: 'white',

// disableWeekScroll={true}
// firstDay={1}
// initialDate={'2012-03-01'}
// minDate={'2012-05-10'}
// maxDate={'2012-05-30'}
// monthFormat={'YYYY MM'}
// onMonthChange={month => {
// console.log('month changed', month);
// }}
// disableWeekScroll={true}
// pagingEnabled
const styles = StyleSheet.create({
  month: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
