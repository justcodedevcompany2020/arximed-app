import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Platform,
  UIManager,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import {GreenArrowRight, GreenArrowUp} from '../../assets/svgs/MoreScreenSvgs';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestioms} from '../../store/actions/actions';

export default function FAQ({navigation}) {
  const [selectedQuestion, setSelectedQuestion] = useState();
  const dispatch = useDispatch();
  // const [state, setState] = useState(false)
  useEffect(() => {
    dispatch(getQuestioms());
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const {getQuestionData} = useSelector(state => state.justDriveReducer);
  console.log(getQuestionData, 'ljkuh');

  function onSelect(id) {
    if (id === selectedQuestion) {
      setSelectedQuestion(null);
      return;
    }
    setSelectedQuestion(id);
  }
  function toggleExpand() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // setState({ expanded: !this.state.expanded })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.fixed}
        source={require('../../assets/background.png')}
      />

      {getQuestionData.map((value, index) => {
        return (
          <Question
            key={index}
            question={value.questions}
            answer={value.answer}
            isOpened={selectedQuestion === index}
            onPress={() => {
              onSelect(index);
              toggleExpand();
            }}
          />
        );
      })}
    </SafeAreaView>
  );
}

const Question = ({question, answer, isOpened, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.questionContainer} onPress={onPress}>
        <Text style={{color: '#1C1C1E'}}>{question}</Text>
        {isOpened ? <GreenArrowUp /> : <GreenArrowRight />}
      </TouchableOpacity>
      {isOpened && <Answer answer={answer} />}
    </>
  );
};

const Answer = ({answer}) => {
  return (
    <TouchableOpacity style={styles.questionContainer}>
      <Text style={{color: '#1C1C1E'}}>{answer}</Text>
    </TouchableOpacity>
  );
};

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
  },
  questionContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  question: {
    color: '#1C1C1E',
  },
});
