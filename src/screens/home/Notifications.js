import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
} from 'react-native';
import {NoNotificationsIcon} from '../../assets/svgs/NotificationScreenSvgs';
import All from './All';
import Notification from './Notification';
import {useSelector, useDispatch} from 'react-redux';
import {getNotificationData} from '../../store/actions/actions';

export default function Notifications() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {notificationallData} = useSelector(state => state.justDriveReducer);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        dispatch(getNotificationData());
        setPage(page + 1);
        setData([...data, ]);
      } catch {}
      setIsLoading(false);
    };
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Notification
        title={'Онлайн-консультация '}
        time={'15:00'}
        text={
          'Онлайн консультация, запланированная на 20.07.2022 14:00 началась. Вас ожидает врач. '
        }
        first
      />
    );
  };

  console.log(notificationallData?.data?.data, 'lll');

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 120}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        resizeMode="cover"
        style={styles.fixed}
      />
      {notificationallData?.data?.data.length > 0 ? (
        <FlatList
          data={globalSearchData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={fetchData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <View style={styles.noNotifications}>
          <NoNotificationsIcon />
          <Text style={styles.noNotificationsText}>Нет уведомлений</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    height: 50,
  },
  noNotifications: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'transparent',
    marginBottom: 250,
  },
  noNotificationsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F4F4F',
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
