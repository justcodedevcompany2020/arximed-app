import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAplicationUse,
  getTermsOfService,
  getPrivacyPolicy,
} from '../../../store/actions/actions';

export default function Info({navigation, route}) {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {aplicationData, pivacyPolicyData, termsOfServiceData} = useSelector(
    state => state.justDriveReducer,
  );

  const [data, setData] = useState(
    item.title === 'Правила пользования приложением'
      ? aplicationData
      : item.title === 'Политика конфиденциальности'
      ? pivacyPolicyData
      : termsOfServiceData,
  );

  useEffect(() => {
    dispatch(getAplicationUse());
    dispatch(getTermsOfService());
    dispatch(getPrivacyPolicy());

    navigation.setOptions({
      title: item.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(aplicationData, 'mmmm');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{data.data?.title}</Text>
        <Text style={{color: 'black', lineHeight: 24, marginBottom: 30}}>
          {/* {data?.data?.text} */}
          {item.title === 'Правила пользования приложением'
            ? aplicationData?.data?.text
            : item.title === 'Политика конфиденциальности'
            ? pivacyPolicyData?.data?.text
            : termsOfServiceData?.data?.text}
        </Text>
      </ScrollView>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
});
