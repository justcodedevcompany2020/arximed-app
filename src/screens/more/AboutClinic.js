import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RedCalendar, RedPhone, RedPushPin } from '../../assets/svgs/BasketSvgs';
import { ArrowRight, MIcon } from '../../assets/svgs/MoreScreenSvgs';
import Button from '../../components/Button';

export default function AboutClinic() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
        <View style={styles.photoContainer}>
          <Text style={styles.photoGallery}>Галерея фото</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>Адрес</Text>
          <TouchableOpacity style={styles.onTheMapContainer}>
            <Text style={styles.onTheMap}>На карте </Text>
            <ArrowRight />
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <RedPushPin />
          <Text style={styles.infoItem}>Медицинский центр Петровка </Text>
        </View>
        <View style={styles.flex}>
          <MIcon />
          <Text style={styles.infoItem}>Библиотека имени Ленина</Text>
        </View>
        <Text style={styles.title}>Контакты</Text>
        <View style={styles.flex}>
          <RedPhone />
          <Text style={styles.infoItem}>+7 495 777 77 88</Text>
        </View>
        <View style={styles.flex}>
          <RedCalendar />
          <Text style={styles.infoItem}>
            пн-пт: 08:00-21:00 сб,вс: 09:00-15:00
          </Text>
        </View>
        <Text style={styles.title}>Информация</Text>
        <Text style={{ color: '#696969' }}>
          Крупнейшая сеть лечебно-профилактических центров в Москве,
          предоставляющих полный комплекс услуг по профилактике, диагностике,
          лечению различных заболеваний, а также реабилитации.
        </Text>
        <Button
          text={'Запись на прием'}
          backgroundColor={'#9DC458'}
          color={'white'}
        />
      </ScrollView>
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
    backgroundColor: 'white',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  photoContainer: {
    backgroundColor: '#F5F5F5',
    height: 230,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  photoGallery: {
    fontSize: 16,
    color: '#B6B2B2',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 20,
    marginTop: 10,
  },
  infoItem: {
    color: '#72777A',
    marginLeft: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  onTheMap: {
    fontSize: 16,
    color: '#1C1C1E',
  },
  onTheMapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
