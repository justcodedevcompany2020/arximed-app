import React from 'react';
import OrderItem from './OrderItem';
import {useSelector} from 'react-redux';

export default function OrderList() {
  const {
    medicalTestParamsData,
    medicalTestComplexParamsData,
    examId,
    addBasketData,
    parentId,
    basketData,
  } = useSelector(state => state.analysisReducer);
  return basketData?.data?.data.map((value, index) => {
    return (
      <OrderItem
        text={value.parent.LABEL ? value.parent.LABEL : value.parent.name_exam}
        price={
          value.parent.price ? value.parent.price : value.parent.priceAmount
        }
        key={index}
        id={value.id}
      />
    );
  });
}
