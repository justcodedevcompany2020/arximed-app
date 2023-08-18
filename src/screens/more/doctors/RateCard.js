import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Button from '../../../components/Button';
import {GreyStar, GreenStar} from '../../../assets/svgs/DoctorsScreenSvgs';
import {useSelector, useDispatch} from 'react-redux';
import {commentDoctor} from '../../../store/actions/actions';

export default function RateCard() {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState('');
  const [openCard, setOpenCard] = useState(false);
  console.log(rating, 'jdlkfj');
  const dispatch = useDispatch();
  const {getAllReceptionData, doctorCommentData} = useSelector(
    state => state.justDriveReducer,
  );

  // console.log(doctorCommentData);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>Вы были на приеме 18 июля 2022</Text>
      <Text style={styles.rate}>Оцените прием</Text>
      <View
        style={[
          {
            flexDirection: 'row',
            marginTop: 10,
          },
          openCard && {justifyContent: 'space-between'},
        ]}>
        {[...Array(rating)].map((e, i) => (
          <TouchableOpacity
            onPress={() => {
              setRating(i);
              setOpenCard(true);
            }}
            key={i}>
            <GreenStar />
          </TouchableOpacity>
        ))}
        {[...Array(5 - rating)].map((e, i) => (
          <TouchableOpacity
            onPress={() => {
              setRating(rating + i + 1);
              setOpenCard(true);
            }}
            key={i}>
            <GreyStar />
          </TouchableOpacity>
        ))}
      </View>
      {openCard && (
        <>
          <Text style={styles.write}>
            Оставьте отзыв о приеме. Это поможет нам сохранять высокий уровень
            обслуживания
          </Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={setValue}
            multiline={true}
            placeholder={'Напишите комментарий...'}
          />
          <Button
            text={'Сохранить'}
            color={'white'}
            backgroundColor={'#9DC458'}
            marginBottom={10}
            onPress={() => {
              dispatch(
                commentDoctor(
                  getAllReceptionData?.data[
                    getAllReceptionData?.data.length - 1
                  ].parent_id,
                  value,
                  rating,
                  getAllReceptionData?.data[
                    getAllReceptionData?.data.length - 1
                  ].id,
                  getAllReceptionData?.data[
                    getAllReceptionData?.data.length - 1
                  ].user_id,
                ),
              );
              setOpenCard(false);
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  rate: {
    fontSize: 12,
    fontWeight: '500',
    color: '#72777A',
    marginTop: 7,
  },
  write: {
    color: '#696969',
    fontSize: 13,
    marginTop: 10,
  },
  input: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: 'top',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    height: 250,
    color: '#696969',
  },
});
