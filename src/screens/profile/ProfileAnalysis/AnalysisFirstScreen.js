import React from 'react';
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
import { NoNotificationsIcon } from '../../../assets/svgs/NotificationScreenSvgs';
import {
  AnalyzesCapsule,
  ArrowLeftMini,
} from '../../../assets/svgs/ProfileScreenSvgs';

export default function AnalysisFirstScreen({ navigation }) {
  const noData = false;
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {noData ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <NoNotificationsIcon />
            <Text
              style={{ fontWeight: '500', color: '#1C1C1E', marginTop: 10 }}>
              Нет Анализов
            </Text>
          </View>
        ) : (
          <View style={{ marginTop: 15 }}>
            <AnalysisCard
              Svg={ZeroPercent}
              name={'VIP женский'}
              doctorName={'ВОП, Косарева В.В.'}
              date={'16.03.2021'}
              norm={'Ожидается'}
              num={0}
              onPress={() => navigation.navigate('AnalysisSinglePage')}
            />
            <AnalysisCard
              // percent={100}
              Svg={Percent100}
              name={'НСТ-тест (бактерицидная активность фагоцитов)'}
              doctorName={'ВОП, Косарева В.В.'}
              date={'16.03.2021'}
              norm={'Норма'}
              num={0}
              onPress={() => navigation.navigate('AnalysisSinglePage')}
            />
            <AnalysisCard
              // percent={90}
              Svg={Percent90}
              name={'Название комплекса'}
              doctorName={'ВОП, Косарева В.В.'}
              date={'16.03.2021'}
              norm={'В процессе'}
              num={0}
              onPress={() => navigation.navigate('AnalysisSinglePage')}
            />
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.greenButton}>
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
