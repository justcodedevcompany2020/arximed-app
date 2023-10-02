import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AnalysisCard from '../../home/AnalysisCard';
import {
  Percent100,
  Percent90,
  ZeroPercent,
} from '../../../assets/svgs/HomeScreenSvgs';
import {NoNotificationsIcon} from '../../../assets/svgs/NotificationScreenSvgs';
import {
  AnalyzesCapsule,
  ArrowLeftMini,
} from '../../../assets/svgs/ProfileScreenSvgs';
import {getHomePageAnalisys} from '../../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function AnalysisFirstScreen({navigation}) {
  const dispatch = useDispatch();

  const {homepageAnalisysData} = useSelector(state => state.justDriveReducer);

  console.log(homepageAnalisysData.data.length > 0);

  useEffect(() => {
    dispatch(getHomePageAnalisys());
  }, []);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {homepageAnalisysData.data.length == 0 ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <NoNotificationsIcon />
            <Text style={{fontWeight: '500', color: '#1C1C1E', marginTop: 10}}>
              Нет Анализов
            </Text>
          </View>
        ) : (
          <View style={{marginTop: 15}}>
            {homepageAnalisysData.data.map((value, index) => {
              return (
                <AnalysisCard
                  // percent={0}
                  Svg={ZeroPercent}
                  name={value.get_analis_by_medical_test_parametr[0].LABEL}
                  doctorName={
                    value.get_analis_by_medical_test_parametr[0].conttype
                  }
                  date={'16.03.2021'}
                  norm={'Ожидается'}
                  num={0}
                  key={index}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.greenButton}>
        <AnalyzesCapsule />
        <Text style={styles.whiteText}>Заказать анализы</Text>
        <ArrowLeftMini />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F0D5',
    height: 32,
    padding: 2,
    justifyContent: 'flex-start',
    borderRadius: 8,
  },
  active: {
    width: '50%',
    height: 28,
    backgroundColor: '#FF414C',
    borderRadius: 8,
  },
  activeText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
  },
  deactive: {
    width: '50%',
    height: 28,
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  deactiveText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#1C1C1E',
    textAlign: 'center',
    marginTop: 5,
  },
  greenButton: {
    position: 'absolute',
    height: 38,
    backgroundColor: '#9DC458',
    borderRadius: 48,
    bottom: 40,
    right: 20,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  whiteText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginHorizontal: 5,
  },
});
