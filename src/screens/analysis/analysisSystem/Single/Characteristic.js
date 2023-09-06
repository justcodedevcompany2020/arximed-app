import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function Characteristic({navigation, data}) {
  const routes = useRoute();

  return (
    <View style={styles.firstBlock}>
      {routes.name === 'ComplexesBuy' && (
        <View style={styles.left}>
          <Text style={styles.leftBigText}>Тиреотропный гормон </Text>
          <Text style={styles.leftSmallText}>
            (ТТГ, тиротропин, Thyroid Stimulating Hormone, TSH)
          </Text>
        </View>
      )}

      {routes.name === 'ComplexesSinglePage' && (
        <View style={styles.left}>
          <Text style={styles.leftBigText}>68492253</Text>
          <View style={styles.greenButton}>
            <Text style={styles.greenButtonText}>117 анализов в комплексе</Text>
          </View>
        </View>
      )}
      {routes.name === 'SinglePage' && (
        <View style={styles.left}>
          <Text style={styles.leftBigText}>68492253</Text>
          <Text style={styles.leftSmallText}>
            альтернативное название исследования
          </Text>
        </View>
      )}
      {routes.name === 'SinglePageFlower' && (
        <View style={styles.left}>
          <Text style={styles.leftBigText}>{data.CODE}</Text>
          <Text style={styles.leftSmallText}>{data.DESCRIPTION}</Text>
        </View>
      )}

      <View style={styles.right}>
        {routes.name === 'SinglePageFlower' && (
          <Text style={styles.rightText}>
            {data.PRICE}
            <Text style={[styles.rightText, {color: '#7B9E45'}]}> ₽</Text>
          </Text>
        )}
        <View style={styles.dateBlock}>
          <Image
            style={{width: 10, height: 10, marginRight: 5}}
            source={require('../../../../assets/images/akarcalendar.png')}
          />
          <Text style={styles.dateBlockText}>2 дня</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 84,
    padding: 15,
    marginTop: 15,
    borderRadius: 8,
  },
  left: {
    width: 187,
  },
  leftBigText: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#000000',
  },

  leftSmallText: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: '#72777A',
  },
  rightText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
  dateBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 5,
    marginTop: 5,
  },
  dateBlockText: {
    color: '#000000',
    fontSize: 10,
    lineHeight: 12,
  },
  greenButton: {
    padding: 5,
    height: 27,
    backgroundColor: '#F2FBE2',
    borderRadius: 10,
    marginTop: 7,
  },
  greenButtonText: {
    color: '#7B9E45',
    fontSize: 12,
    fontWeight: '400',
  },
});
