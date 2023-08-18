import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowDown} from '../../../assets/svgs/BasketSvgs';
import {CheckMark} from '../../../assets/svgs/ProfileScreenSvgs';
import {useSelector, useDispatch} from 'react-redux';
import {getSelectItemTime} from '../../../store/actions/actionsDestination';

export default function PrescriptionDropDown({
  Svg,
  value,
  onChange,
  type,
  items,
  setItems,
  openDropDown,
  setOpenDropDown,
  placeholder,
}) {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  //   console.log(selectedItems, 'kkkk');
  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          openDropDown
            ? {
                marginBottom: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }
            : {borderRadius: 15},
        ]}
        onPress={() => setOpenDropDown(!openDropDown)}>
        <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Svg />
            <Text style={styles.genderText}>
              {type === 'multiple'
                ? selectedItems.length === 0
                  ? placeholder
                  : selectedItems.map((item, i) => {
                      let text = selectedItems.length - 1 !== i ? ', ' : '';
                      return item + text;
                    })
                : value
                ? value
                : placeholder}
            </Text>
            <Text style={styles.genderText}></Text>
          </View>
          <View
            style={{transform: [{rotate: openDropDown ? '180deg' : '0deg'}]}}>
            <ArrowDown />
          </View>
        </View>
      </TouchableOpacity>

      {openDropDown &&
        items.map((item, i) => {
          const toggleSelect = () => {
            if (i === 3) {
              setItems(
                items.map((i, index) => {
                  if (index !== 3 && i.isSelected) {
                    console.log('if');
                    i.isSelected = false;
                  }
                  if (item === i) {
                    i.isSelected = true;
                  }
                  return i;
                }),
              );
            } else {
              setItems(
                items.map((i, index) => {
                  if (index === 3 && i.isSelected) {
                    i.isSelected = false;
                  }
                  if (item === i) {
                    i.isSelected = !i.isSelected;
                  }
                  return i;
                }),
              );
            }
            let filtered = items
              .filter(item => {
                if (item.isSelected) {
                  return true;
                }
                return false;
              })
              .map(item => item.name);
            dispatch(getSelectItemTime(filtered));
            setSelectedItems(filtered);
          };
          return (
            <TouchableOpacity
              style={[
                styles.dropDownItemContainer,
                i === items.length - 1 && {
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  marginBottom: 15,
                },
              ]}
              onPress={() => {
            
                if (type === 'multiple') {
                  toggleSelect();
                } else {
                  onChange(item);
                  setOpenDropDown(false);
                }
              }}
              key={i}>
              <Text style={styles.genderText}>
                {type === 'multiple' ? item.name : item}
              </Text>
              {type === 'multiple'
                ? item.isSelected && <CheckMark />
                : item === value && <CheckMark />}
            </TouchableOpacity>
          );
        })}
    </>
  );
}

const styles = StyleSheet.create({
  genderText: {
    marginLeft: 10,
    color: '#000000',
  },
  dropDownItemContainer: {
    position: 'relative',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    zIndex: 999,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: '#7B9E45',
    justifyContent: 'space-between',
  },
  container: {
    paddingLeft: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 15,
  },
  input: {
    marginLeft: 5,
    width: '90%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
});
