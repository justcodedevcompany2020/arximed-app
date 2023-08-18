import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Messages, MiniLogo} from '../../assets/svgs/HomeScreenSvgs';
import OnlainChatHeader from './OnlainChatHeader';

export default function OnlainChat() {
  const noData = false;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBack}
        resizeMode="cover"
        source={require('../../assets/background.png')}>
        <OnlainChatHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
          {!noData ? (
            <View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View style={styles.userMessageSecond}>
                  <Text style={styles.messageText}>
                    Привет, я хочу поподробнее узнать о том как пользоваться
                    личным кабинетом.Буду рад помощи
                  </Text>
                  <Text style={styles.commentTextSecond}>
                    16.50 · Прочитано
                  </Text>
                </View>
                <View style={styles.userMessageFirst}>
                  <Text style={styles.messageText}>
                    Добрый день! Наш оператор поможет Вам!{' '}
                  </Text>
                  <Text style={styles.commentText}>09.45</Text>
                </View>
                <View style={styles.userMessageSecond}>
                  <Text style={styles.messageText}>
                    Вот результаты прошлых исследований
                  </Text>
                  <Text style={styles.commentTextSecond}>
                    16.50 · Прочитано
                  </Text>
                </View>
                <View style={styles.userMessageSecondImage}>
                  <Image
                    style={{width: 300, height: 160}}
                    source={require('../../assets/images/dogimage.png')}
                  />
                  <Text
                    style={[styles.commentTextSecond, {right: 25, bottom: 0}]}>
                    16.50 · Прочитано
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 100,
              }}>
              <Messages />
              <MiniLogo />
              <Text
                style={{
                  width: 280,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#4F4F4F',
                  marginTop: 10,
                }}>
                Задайте Ваш вопрос и наша регистратура постарается помочь
              </Text>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
      <View style={styles.inputDiv}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 15,
          }}>
          <TouchableOpacity>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/plusgreen.png')}
            />
          </TouchableOpacity>

          <TextInput style={styles.input} />
          <TouchableOpacity>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/images/sendMessage.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
  },

  inputDiv: {
    width: '100%',
    height: 165,
    backgroundColor: 'white',
    opacity: 0.8,
    alignItems: 'flex-start',
    // marginBottom: 80
  },

  input: {
    backgroundColor: '#F7F7FC',
    width: '75%',
    height: 36,
    borderRadius: 4,
  },
  userMessageFirst: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 17,
    marginBottom: 15,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    position: 'relative',
  },
  userMessageSecond: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 17,
    marginBottom: 15,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    backgroundColor: '#F2FBE2',
    position: 'relative',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#0F1828',
  },
  commentText: {
    fontSize: 10,
    lineHeight: 16,
    color: '#ADB5BD',
    fontWeight: '400',
    position: 'absolute',
    bottom: 5,
    left: 15,
  },
  commentTextSecond: {
    fontSize: 10,
    lineHeight: 16,
    color: '#000000',
    fontWeight: '400',
    position: 'absolute',
    bottom: 5,
    right: 15,
  },
  userMessageSecondImage: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 17,
    marginBottom: 15,
    position: 'relative',
  },
});
