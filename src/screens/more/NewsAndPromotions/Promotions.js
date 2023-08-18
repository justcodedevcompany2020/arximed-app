import React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Percent} from '../../../assets/svgs/MoreScreenSvgs';
import PromotionItem from './PromotionItem';

export default function Promotions() {
  
  const [data, setData] = useState([
    {date: '18.02.2022', title: 'Снизилось число заразившихся СПИД'},
    {date: '18.02.2022', title: 'Снизилось число заразившихся СПИД'},
    {date: '18.02.2022', title: 'Снизилось число заразившихся СПИД'},
  ]);

  return (
    <SafeAreaView style={styles.container}>
      {data.length === 0 ? (
        <View style={styles.noPromotion}>
          <Percent />
          <Text style={styles.noPromotionText}>Нет акций</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, i) => {
            return (
              <PromotionItem date={item.date} title={item.title} key={i} />
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noPromotion: {
    marginTop: 180,
    alignItems: 'center',
  },
  noPromotionText: {
    marginTop: 20,
    color: '#979797',
  },
});
