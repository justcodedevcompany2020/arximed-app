import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {NewsIcon} from '../../../assets/svgs/MoreScreenSvgs';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import HTML from 'react-native-render-html';
import {getNewsFunction} from '../../../store/actions/actions';
import {useDispatch} from 'react-redux';

export default function News() {
  const {newsData} = useSelector(state => state.justDriveReducer);
  const {width} = useWindowDimensions();
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  console.log(newsData, 'lk');

  const renderItem = (value, index) => {
    // console.log(value.item[0], 'jk');
    return (
      <HTML
        contentWidth={width}
        key={index}
        source={{html: value.item[0].DETAIL_TEXT}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        onEndReached={() => {
          setPage(page + 1);
          dispatch(getNewsFunction(page));
        }}
        refreshing={true}
        keyExtractor={(item, index) => index}
        style={{paddingHorizontal: 16}}
        scrollIndicatorInsets={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noNews: {
    marginTop: 180,
    alignItems: 'center',
  },
  noNewsText: {
    marginTop: 10,
    color: '#979797',
  },
});
