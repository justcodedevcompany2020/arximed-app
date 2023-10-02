import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SurveysBlock from './SurveysBlock';
import {NoNotificationsIcon} from '../../../assets/svgs/NotificationScreenSvgs';
import {
  AnalyzesCapsule,
  ArrowLeftMini,
} from '../../../assets/svgs/ProfileScreenSvgs';

export default function SurveysScreen({navigation}) {
  const noData = !false;
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
            <Text style={{fontWeight: '500', color: '#1C1C1E', marginTop: 10}}>
              Нет обследований
            </Text>
          </View>
        ) : (
          <View style={{marginTop: 15}}>
            {[...new Array(5)].map((x, i) => (
              <SurveysBlock navigation={navigation} key={i} />
            ))}
          </View>
        )}
      </ScrollView>
      <TouchableOpacity style={styles.greenButton}>
        <AnalyzesCapsule />
        <Text style={styles.whiteText}>Записаться на обследование</Text>
        <ArrowLeftMini />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
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
