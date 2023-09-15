import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FeedBackInputs from '../../components/FeedBackBlocks/FeedBackInputs';
import Button from '../../components/Button';
import {ScrollView} from 'react-native';
import {CommentIcon} from '../../assets/svgs/HomeScreenSvgs';
// import {postRequest} from '../../../api/RequestHelpers';
import Popup from '../../components/Popup';
import Blurview from '../../components/Blur';
import {sendFeedBack} from '../../store/actions/actions';
import {useSelector, useDispatch} from 'react-redux';

export default function FeedBackPage({navigation, route}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPopup, setShowPopup] = useState('');
  const [second, setSecond] = useState(false);
  const dispatch = useDispatch();
  const {feedBackData} = useSelector(state => state.justDriveReducer);

  useEffect(() => {
    if (name && email && comment) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, comment]);

  async function onPressSend() {
    dispatch(sendFeedBack(name, email, comment));

    // if (feedBackData.data.message == 'Feedback Created') {
    setSecond(true);
    // }
  }

  if (second) {
    return (
      <SafeAreaView style={styles.containerSecond}>
        <Image
          style={{width: '100%', height: 220}}
          source={require('../../assets/images/11111.png')}
        />
        <Text style={styles.bigText}>Обратная связь</Text>
        <Text style={styles.smallText}>
          Ваше обращение будет рассмотрено в течение суток. Спасибо, что
          обратились к нам!
        </Text>
        <View style={{marginBottom: 50}}>
          <Button
            text={'Далее'}
            color={'white'}
            backgroundColor={'#9DC458'}
            isDisabled={isDisabled}
            onPress={() => {
              navigation.navigate('MoreScreen');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.welcomeText}>Обратная связь</Text>
          <Text style={[styles.secondText]}>
            Для того, чтобы мы могли помочь Вам с решением проблемы, заполните
            данные ниже и подробно опишите возникшую проблему
          </Text>
        </View>
        <FeedBackInputs
          text={'Введите ваше имя'}
          image={require('../../assets/images/name.png')}
          heightIcon={20}
          widthIcon={20}
          placeholderName={'Ваше имя'}
          value={name}
          onChangeText={setName}
        />
        <FeedBackInputs
          text={'Введите ваш email'}
          image={require('../../assets/images/email.png')}
          heightIcon={20}
          widthIcon={25}
          placeholderName={'Ваша почта'}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={[styles.text, {color: '#000000'}]}>
          Опишите проблему с которой Вы столкнулись
          <Text style={[styles.text, {color: 'red'}]}> *</Text>
        </Text>
        <View style={styles.useless}>
          {!comment && (
            <Text style={{marginTop: 5, marginRight: 15}}>
              <CommentIcon />
            </Text>
          )}
          <TextInput
            multiline
            placeholder="Комментарий"
            placeholderTextColor="#7B9E45"
            style={[
              {paddingVertical: 0, color: '#7B9E45'},
              comment && {width: '100%'},
            ]}
            value={comment}
            onChangeText={setComment}
          />
        </View>
        <View style={{marginBottom: 50}}>
          <Button
            text={'Отправить'}
            color={'white'}
            backgroundColor={'#9DC458'}
            isDisabled={isDisabled}
            onPress={onPressSend}
          />
        </View>
      </ScrollView>
      <Popup
        isVisible={showPopup}
        setIsVisible={setShowPopup}
        nummberOfButtons={1}
        modalTitle={'Неправильный электронный адрес'}
        buttonText={'Хорошо '}
        onPressBtn={() => setShowPopup(false)}
        buttonTextColor={'#007AFF'}
      />
      {showPopup && <Blurview />}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 27,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//   },
//   bigText: {
//     fontSize: 24,
//     fontWeight: '600',
//     lineHeight: 30,
//     color: '#000000',
//     textAlign: 'center',
//   },
//   smallText: {
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 24,
//     color: '#000000',
//     textAlign: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  welcomeText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 35,
    marginTop: 30,
  },
  secondText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 15,
  },
  useless: {
    height: 160,
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    backgroundColor: '#F3F7ED',
    paddingLeft: 20,
  },
  text: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 10,
    marginTop: 25,
  },
  containerSecond: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 27,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 30,
    color: '#000000',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
    textAlign: 'center',
  },
});
