import React, {useEffect, useState} from 'react';
import {SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import News from './News';
import Promotions from './Promotions';
import {useSelector, useDispatch} from 'react-redux';
import {getNewsFunction} from '../../../store/actions/actions';

export default function NewsAndPromotions() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const {newsData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    dispatch(getNewsFunction(0));
  }, []);
  console.log(newsData, 'jjj');
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControlTab
        values={['Новости', 'Акции']}
        selectedIndex={selectedIndex}
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        onTabPress={setSelectedIndex}
      />
      {selectedIndex === 0 ? <News /> : <Promotions />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    paddingTop: 120,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  tabsContainerStyle: {
    borderRadius: 8,
    backgroundColor: '#F2F2F7',
    borderWidth: 0,
    height: 32,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  tabStyle: {
    backgroundColor: '#F2F2F7',
    borderWidth: 0,
    borderEndWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTextStyle: {
    fontSize: 13,
    color: '#1C1C1E',
  },
  activeTabStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 28,
    marginHorizontal: 2,
  },
  activeTabTextStyle: {
    fontSize: 13,
    color: '#1C1C1E',
  },
});
