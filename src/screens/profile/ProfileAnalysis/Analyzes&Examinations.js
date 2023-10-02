import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AnalysisFirstScreen from './AnalysisFirstScreen';
import SurveysScreen from './SurveysScreen';


export default function AnalyzesAndExamination({navigation}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControlTab
        values={['Анализы', 'Обследования']}
        selectedIndex={selectedIndex}
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        onTabPress={setSelectedIndex}
      />
      {selectedIndex === 0 ? (
        <AnalysisFirstScreen navigation={navigation} />
      ) : (
        <SurveysScreen navigation={navigation} />
      )}
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
    paddingBottom: 100,
  },
  tabsContainerStyle: {
    borderRadius: 8,
    backgroundColor: '#E7F0D5',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  tabStyle: {
    backgroundColor: '#E7F0D5',
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
    backgroundColor: '#FF414C',
    borderRadius: 8,
    height: 28,
    marginHorizontal: 2,
  },

  activeTabTextStyle: {
    fontSize: 13,
    color: 'white',
  },
});
