import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {HorizontalGreyLine} from '../../assets/svgs/NotificationScreenSvgs';
import {NextIcon} from '../../assets/svgs/SearchScreenSvgs';

const CustomText = props => {
  const text = props.text.split('-').join(' ').split(' ');
  return (
    <Text style={props.title ? styles.title : styles.text}>
      {text.map((text, i) => {
        if (
          text.startsWith(props.searchText) ||
          text.startsWith(props.searchText.toLowerCase()) ||
          text.startsWith(props.searchText.toUpperCase())
        ) {
          return (
            <Text key={i} style={{color: '#2A7BF4'}}>
              {text}{' '}
            </Text>
          );
        }
        return `${text} `;
      })}
    </Text>
  );
};

export default function SearchResultItem({title, text, section, searchText}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{width: 300}}>
        <View style={styles.titleRow}>
          <CustomText text={title} searchText={'Консу'} title />
          <View style={styles.sectionContainer}>
            <Text style={styles.section}>{section}</Text>
            <NextIcon />
          </View>
        </View>
        <HorizontalGreyLine />
        <CustomText text={text} searchText={'Консу'} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    width: '60%',
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    // marginRight: 1,
    fontSize: 14,
    color: '#7B9E45',
  },
  text: {
    fontSize: 12,
    color: '#4F4F4F',
    marginTop: 10,
    marginBottom: 15,
  },
});
