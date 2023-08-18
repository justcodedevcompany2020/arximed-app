import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function AnalysisSliderCard() {
  return (
    <TouchableOpacity style={styles.sliderBlock}>
      <Text style={styles.sliderBlock_text}>Реабилитация после COVID-19</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sliderBlock: {
    width: 269,
    height: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    marginRight: 15,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 2,
  },
  sliderBlock_text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 10,
    marginBottom: 10,
    color: 'black',
  },
});
