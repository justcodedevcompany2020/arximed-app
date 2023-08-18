import {
  View,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function EntryCancelAnother({
  image,
  width,
  height,
  firstText,
  secondText,
}) {
  return (
    <View style={styles.block}>
      <Image style={{width: width, height: height}} source={image} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.smallText}>{firstText}</Text>
        <Text style={styles.boldText}>{secondText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#9495991C',
    borderBottomColor: '#9495991C',
  },
  boldText: {
    fontSize: 14,
    lineHeight: 14,
    color: 'black',
    fontWeight: '500',
  },
  smallText: {
    fontSize: 10,
    lineHeight: 12,
    color: '#72777A',
    fontWeight: '400',
  },
});
