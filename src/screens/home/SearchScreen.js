import React, {useState, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {SearchIcon} from '../../assets/svgs/HomeScreenSvgs';
import {ArchimedLogo, NoResult} from '../../assets/svgs/SearchScreenSvgs';
import SearchResultItem from './SearchResultItem';
import ActionCardsContainer from './ActionCardsContainer';
import All from './All';
import {useDispatch, useSelector} from 'react-redux';
import {globalSearch} from '../../store/actions/actionsDestination';

export default function SearchScreen({navigation}) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const {globalSearchData} = useSelector(state => state.destinationReducer);

  // console.log(globalSearchData.doctors_list.data, 'llll');

  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 90}}>
      <ImageBackground
        resizeMode="cover"
        style={styles.fixed}
        source={require('../../assets/background.png')}
      />
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setText(text);
            dispatch(globalSearch(text));
          }}
          value={text}
          placeholder={'Поиск'}
        />
      </View>
      {!text ? (
        <View>
          <ScrollView
            horizontal
            style={styles.scrollview}
            showsHorizontalScrollIndicator={false}>
            <All text={'Все'} isSelected />
            <All text={'Анализы'} />
            <All text={'Обследования'} />
            <All text={'Новости'} />
          </ScrollView>
          <Text style={styles.famous}>Популярное</Text>
          <ActionCardsContainer navigation={navigation} />
        </View>
      ) : text !== 'Archimed' ? (
        <ScrollView
          style={{marginTop: 10, paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}>
          {globalSearchData?.analize_complex?.data?.map((value, index) => {
            return (
              <SearchResultItem
                key={index}
                title={value.NAME}
                text={value.PRINT_MEMO}
                searchText={text}
                section={'Уведомления'}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View>
          <ScrollView
            horizontal
            style={styles.scrollview}
            showsHorizontalScrollIndicator={false}>
            <All text={'Все'} isSelected />
            <All text={'Анализы'} />
            <All text={'Обследования'} />
            <All text={'Новости'} />
          </ScrollView>
          <View style={styles.noResultContainer}>
            <NoResult />
            <ArchimedLogo />
            <Text style={styles.noResult}>
              Нет результатов по вашему поиску
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    marginTop: 120,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginHorizontal: 20,
  },
  input: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    width: '90%',
  },
  scrollview: {
    marginTop: 25,
    height: 50,
    marginLeft: 20,
  },
  famous: {
    fontSize: 16,
    color: 'black',
    marginVertical: 15,
    marginLeft: 20,
  },
  noResult: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
  },
  noResultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  fixed: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
