import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

let button = [
  'Гомогенат',
  'Экстракт',
  'Препарат 1',
  'Документ2',
  'Услуга',
  'Кал',
  'Моча разовая',
  'Мазок из зева',
  'Кровь цельная с ЭДТА',
  'Сыворотка крови',
  'Плазма цитратная',
];
let buttonFirst = ['Сыворотка крови'];
export default function BioMaterials() {
  const routes = useRoute();
  console.log(routes.name);

  return (
    <View style={styles.container}>
      <Text style={styles.contText}>Биоматериалы</Text>
      {routes.name === 'ComplexesBuy' && (
        <View style={styles.block}>
          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Сыворотка крови</Text>
          </TouchableOpacity>
        </View>
      )}
      {routes.name === 'ComplexesSinglePage' && (
        <View style={styles.block}>
          {button.map((value, index) => {
            return (
              <TouchableOpacity key={index} style={styles.greenButton}>
                <Text style={styles.greenButtonText}>{value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  contText: {
    color: '#1C1C1E',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 15,
  },
  block: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  greenButton: {
    padding: 10,
    height: 37,
    alignItems: 'center',
    backgroundColor: '#F2FBE2',
    borderRadius: 10,
    marginLeft: 5,
    marginTop: 7,
  },
  greenButtonText: {
    color: '#7B9E45',
    fontSize: 14,
    fontWeight: '400',
  },
});
