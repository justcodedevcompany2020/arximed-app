import React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {
  CheckMarkIcon1,
  GrayIcon,
  GrayTimeIcon,
  QR_code,
  RedCrossIcon,
  RedTimeIcon,
  VerticalLine,
} from '../../assets/svgs/HomeScreenSvgs';
import QRPopup from '../../components/QRPopup';

export default function Record({
  name,
  paid,
  isOnline,
  disable,
  canceled,
  deactive,
  marginBottom,
  navigation,
}) {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NotesSinglePage')}
      style={[styles.container, marginBottom && {marginBottom: marginBottom}]}>
      <View style={styles.flexibble}>
        <View style={{flexDirection: 'row', flexShrink: 1, width: '100%'}}>
          <View style={{marginHorizontal: 15, alignItems: 'center'}}>
            <Text style={[styles.day, canceled && {color: '#72777A'}]}>22</Text>
            <Text style={[styles.month, canceled && {color: '#72777A'}]}>
              июля
            </Text>
          </View>
          <VerticalLine />
          <View
            style={{
              marginLeft: 10,
              flexShrink: 1,
              flexDirection: 'row',
              width: '75%',
              justifyContent: 'space-between',
            }}>
            <View style={{flexShrink: 1}}>
              <Text style={[styles.name, canceled && {color: '#72777A'}]}>
                {name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                {canceled ? <GrayTimeIcon /> : <RedTimeIcon />}
                <Text style={[styles.time, disable && {color: '#72777A'}]}>
                  15:00
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  flexShrink: 1,
                }}>
                {paid && <CheckMarkIcon1 />}
                {canceled && <GrayIcon />}
                <Text
                  style={[
                    styles.order,
                    {
                      color: paid
                        ? '#7B9E45'
                        : canceled
                        ? '#72777A'
                        : '#FF5454',
                    },
                  ]}>
                  {paid
                    ? 'Оплачено'
                    : canceled
                    ? 'Отменена'
                    : 'Заказ не оплачен'}
                </Text>
              </View>
            </View>
            {!paid && !canceled && (
              <TouchableOpacity style={styles.pay}>
                <Text style={styles.payText}>Оплатить</Text>
              </TouchableOpacity>
            )}
            {paid && (
              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => {
                  setOpenPopup(true);
                }}>
                <QR_code width={60} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {isOnline && (
          <View style={styles.online}>
            <Text style={styles.onlineText}>Онлайн</Text>
          </View>
        )}
      </View>
      {deactive && (
        <View>
          <Text style={styles.deactiveText}>
            Автоматическая отмена через 15:23
          </Text>
        </View>
      )}
      <QRPopup
        isVisible={openPopup}
        setIsVisible={setOpenPopup}
        QRCode={() => QR_code(209)}
      />
      {/* {openPopup && <Blurview />} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  flexibble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  day: {
    fontSize: 32,
    color: '#1C1C1E',
  },
  month: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    fontWeight: '500',
    color: '#72777A',
    marginLeft: 5,
  },
  order: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 10,
  },
  online: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 15,
    backgroundColor: '#f2fbe2',
    width: 57,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#7B9E45',
  },
  pay: {
    // position: 'absolute',
    // bottom: 15,
    // right: 15,
    alignSelf: 'flex-end',
    paddingVertical: 8,
    // justifyContent: 'flex-end',
    // height: 34,
    backgroundColor: '#ffe9e9',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginLeft: 7,
    borderRadius: 10,
  },
  payText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF414C',
  },
  deactiveText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 12,
    color: '#FF5454',
    fontWeight: '400',
  },
});
