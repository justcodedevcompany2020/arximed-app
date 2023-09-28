import React from 'react';
import Consultation from './Consultation';

export default function Consultations({data, navigation}) {
  return data.map((value, index) => {
    console.log(value.id);
    return (
      <Consultation
        key={index}
        consultation={value.name_exam}
        price={value.priceAmount}
        navigation={navigation}
        exam_id={value.PL_EXAM_ID}
        subject_id={value.subject_id}
        id={value.id}
      />
    );
  });
}
