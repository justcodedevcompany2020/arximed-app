import React, {useState, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
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
  const [news, setNews] = useState(false);
  const [all, setAll] = useState(true);
  const [basket, setBasket] = useState(false);
  const [direction, setDirection] = useState(false);
  const [naznachenia, setNaznachenia] = useState(false);
  const [analys, setAnalys] = useState(false);
  const [homeservice, setHomeService] = useState(false);
  const [doctorService, setDoctorService] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const {globalSearchData} = useSelector(state => state.destinationReducer);

  const fetchData = async text => {
    setIsLoading(true);
    try {
      dispatch(
        globalSearch(
          page,
          text,
          all
            ? 'all'
            : news
            ? 'news'
            : direction
            ? 'direction'
            : basket
            ? 'basket'
            : naznachenia
            ? 'naznacheniya'
            : analys
            ? 'analise'
            : doctorService
            ? 'doctorService'
            : homeservice
            ? 'homeServices'
            : 'doctor',
        ),
      );
        setPage(page + 1);
    } catch {}
    setIsLoading(false);
  };

  console.log(globalSearchData);

  const renderItem = ({item, index}) => {
    return item.map((value, index) => {
      return (
        <SearchResultItem
          key={index}
          title={value.LABEL}
          text={value.description_serv}
          searchText={text}
          section={'Уведомления'}
        />
      );
    });
  };

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator size={'large'} />;
  };

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
            fetchData(text);
          }}
          value={text}
          placeholder={'Поиск'}
        />
      </View>
      <View>
        <ScrollView
          horizontal
          style={styles.scrollview}
          showsHorizontalScrollIndicator={false}>
          <All
            text={'Все'}
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(true);
              setData([]);
              fetchData(text);
            }}
            isSelected={all ? true : false}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(true);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);

              {
                globalSearchData.data?.news_sales?.length === 0
                  ? setData([])
                  : fetchData(text);
              }
            }}
            isSelected={news ? true : false}
            text={'Новости и акции'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(true);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);
              console.log(globalSearchData?.data.My_notes.length == 0, 'lllll');
              {
                globalSearchData.data?.My_notes.length === 0
                  ? setData([])
                  : fetchData(text);
              }
            }}
            isSelected={basket ? true : false}
            text={'Мои записи'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(true);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={direction ? true : false}
            text={'Мои направления'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(true);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={naznachenia ? true : false}
            text={'Мои назначения'}
          />
          <All
            onPress={() => {
              setAnalys(true);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={analys ? true : false}
            text={'Анализы'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(true);
              setDoctorService(false);
              setDoctor(false);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={homeservice ? true : false}
            text={'Услуги надом'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(true);
              setDoctor(false);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={doctorService ? true : false}
            text={'Услуги врачей'}
          />
          <All
            onPress={() => {
              setAnalys(false);
              setDirection(false);
              setNews(false);
              setBasket(false);
              setNaznachenia(false);
              setHomeService(false);
              setDoctorService(false);
              setDoctor(true);
              setAll(false);
              setData([]);
              fetchData(text);
            }}
            isSelected={doctor ? true : false}
            text={'Врачи'}
          />
        </ScrollView>
      </View>
      {!text ? (
        <View>
          <Text style={styles.famous}>Популярное</Text>
          <ActionCardsContainer navigation={navigation} />
        </View>
      ) : (
        <FlatList
          data={globalSearchData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={fetchData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
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
