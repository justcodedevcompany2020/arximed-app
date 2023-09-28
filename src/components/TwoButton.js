import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function TwoButtons({navigation, navLinkFirst, navLinkSecond}) {
  return (
    <View
      style={{width: '100%', paddingLeft: 5, paddingRight: 5, marginTop: 20}}>
      <TouchableOpacity
        // onPress={() => navigation.navigate(navLinkFirst)}
         onPress={() => navigation.navigate('CreateNewAccount')}
        style={styles.greenButton}>
        <Svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M6.7646 9.17334C7.69238 10.1145 8.81495 10.8412 10.0535 11.3022L11.729 9.9689C11.7787 9.93469 11.8376 9.91637 11.8979 9.91637C11.9583 9.91637 12.0171 9.93469 12.0668 9.9689L15.1779 11.9733C15.296 12.0443 15.396 12.1418 15.47 12.2581C15.5439 12.3744 15.5898 12.5063 15.6041 12.6434C15.6183 12.7805 15.6005 12.919 15.5519 13.048C15.5034 13.177 15.4256 13.2929 15.3246 13.3867L13.8668 14.8267C13.6581 15.033 13.4015 15.1843 13.12 15.2673C12.8384 15.3503 12.5408 15.3623 12.2535 15.3022C9.38781 14.7104 6.74644 13.3242 4.63127 11.3022C2.56304 9.26012 1.13184 6.66172 0.511271 3.82223C0.449968 3.5394 0.462763 3.24553 0.548416 2.96911C0.63407 2.69268 0.789678 2.44306 1.00016 2.24445L2.51127 0.786673C2.60478 0.690578 2.71882 0.616884 2.84485 0.571107C2.97088 0.525331 3.10563 0.508659 3.23901 0.522339C3.37239 0.536019 3.50095 0.579698 3.61507 0.650104C3.72918 0.72051 3.82588 0.815819 3.89794 0.928895L5.96905 4.00001C6.00477 4.04823 6.02406 4.10666 6.02406 4.16667C6.02406 4.22669 6.00477 4.28511 5.96905 4.33334L4.6046 5.97334C5.0782 7.18709 5.81604 8.28019 6.7646 9.17334V9.17334Z"
            fill="white"
          />
        </Svg>
        <Text style={styles.greenButtonText}>По номеру телефона</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => navigation.navigate({navLinkSecond})}
        style={styles.blackButton}>
        <Svg
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M10.8687 7.92698C10.8612 6.69746 11.4359 5.77081 12.5964 5.08754C11.9474 4.18614 10.9654 3.69036 9.67096 3.59481C8.44535 3.50107 7.10443 4.28709 6.61345 4.28709C6.09456 4.28709 4.90801 3.62726 3.97439 3.62726C2.04764 3.65611 0 5.11639 0 8.08743C0 8.9654 0.165522 9.87221 0.496566 10.8061C0.939199 12.0356 2.53491 15.0481 4.19943 14.9994C5.06981 14.9796 5.68541 14.4009 6.81803 14.4009C7.91717 14.4009 8.48627 14.9994 9.45708 14.9994C11.1365 14.976 12.5797 12.2375 13 11.0044C10.7478 9.97497 10.8687 7.99007 10.8687 7.92698ZM8.91402 2.42839C9.85694 1.3431 9.77139 0.355154 9.74349 0C8.9103 0.0468732 7.94692 0.549859 7.39828 1.16822C6.79385 1.83166 6.43863 2.65194 6.51488 3.57678C7.41502 3.64349 8.23705 3.19459 8.91402 2.42839Z"
            fill="white"
          />
        </Svg>
        <Text style={styles.blackButtonText}>Продолжить с Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  greenButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#9DC458',
    borderRadius: 15,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
  blackButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#000000',
    borderRadius: 15,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
});
