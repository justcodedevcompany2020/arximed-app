import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import React, {useState} from 'react';
import CardsInputBlock from './CardsInputBlock';
import CardSecond from './CardSecond';

export default function CardsInput({navigation, route}) {
  // const { addedCard } = route.params.

  const [cards, setCards] = useState([
    {cardNumber: '************4545', isPrimary: true},
    {cardNumber: '*************6666', isPrimary: false},
  ]);

  return (
    <View style={styles.inputsContainer}>
      <Text style={styles.containerText}>Банковская карта</Text>
      {/* {
                !deletes ? <CardsInputBlock onPress={() => setDeletes(!deletes)} isPrimary={true} cardNumber={'************4545'} /> : null
            }
            {
                changes ? <CardSecond onPress={() => setDeletes(!deletes)} /> : null
            } */}
      {cards.map((item, i) => {
        return (
          <CardsInputBlock
            key={i}
            isPrimary={item.isPrimary}
            cardNumber={item.cardNumber}
          />
        );
      })}

      <TouchableOpacity
        onPress={() => navigation.navigate('AddCard')}
        style={styles.greenButton}>
        <Svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M7 13V7M7 7V1M7 7H13M7 7H1"
            stroke="#7B9E45"
            stroke-width="2"
            stroke-linecap="round"
          />
        </Svg>
        <Text style={styles.greenButtonText}>Добавить карту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    width: '100%',
    marginTop: 25,
  },
  containerText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1C1C1E',
    fontWeight: '600',
  },
  greenButton: {
    width: '100%',
    height: 43,
    backgroundColor: '#E7F0D5',
    borderRadius: 8,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenButtonText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#7B9E45',
    marginLeft: 7,
  },
});
