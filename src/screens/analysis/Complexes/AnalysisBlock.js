import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function AnalysisBlock() {
  return (
    <View style={styles.container}>
      <Text style={styles.analysis}>Анализы</Text>
      <Text style={styles.coment}>
        Антитела к тиреоидной пероксидазе (АТ к ТПО)
      </Text>
      <Text style={styles.coment}>Антитела к рецепторам ТТГ (АТ к ТТГ)</Text>
      <Text style={styles.coment}>Антитела к тиреоглобулину (АТ к ТГ)</Text>
      <Text style={styles.coment}>Альфа-амилаза</Text>
      <TouchableOpacity style={styles.redButton}>
        <Text style={styles.buttonText}>Далее</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: 'transparent',
    borderRadius: 15,
    marginTop: 20,
  },
  analysis: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  coment: {
    marginTop: 5,
    fontSize: 15,
    color: '#1C1C1E',
  },
  redButton: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FF4E4E',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: '#FF4E4E',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
