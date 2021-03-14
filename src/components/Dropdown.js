import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../constants/generalSettings';
const data = [
  {
    label: 'USA',
    value: 'usa',
    icon: () => <Icon name="flag" size={18} color="#900" />,
    hidden: true,
  },
  {
    label: 'UK',
    value: 'uk',
    icon: () => <Icon name="flag" size={18} color="#900" />,
  },
  {
    label: 'France',
    value: 'france',
    icon: () => <Icon name="flag" size={18} color="#900" />,
  },
];

function Dropdown(props) {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  //const [visible, setvisible] = useState(true)
  let dropdownRef = null;

  useEffect(() => {
    if (Array.isArray(props.listOfItems)) {
      let dataItems = [];
      props.listOfItems.map((item) => {
        dataItems = [
          ...dataItems,
          {
            label: item[props.lable],
            value: item[props.value],
          },
        ];
      });

      setItems(dataItems);
    }
    return () => {};
  }, [props.listOfItems]);

  return (
    <>
      <View
        style={{
          ...styles.inputContainer,
          borderColor:
            props.touched === true && props.errors
              ? 'red'
              : styles.inputContainer.borderColor,
          width: width - 30,
        }}>
        {/* <DropDownPicker
          //controller={(instance) => (dropdownRef = instance)}
          items={items}
          containerStyle={props.containerStyle}
          style={props.style}
          itemStyle={props.itemStyle}
          dropDownStyle={props.dropDownStyle}
          onChangeItem={(item) => {
            setCurrentItem(item.value);
            props.onChangeItem(item);
          }}
          placeholder={props.placeholder}
          defaultValue={currentItem}
        /> */}

        <Picker
          itemStyle={styles.itemStyle}
          mode="dropdown"
          style={styles.inputStyle}
          onValueChange={(data, idx) => {
            console.log(items[idx].value);
            setCurrentItem(items[idx].value);
            props.onChangeItem(items[idx].value);
          }}
          selectedValue={currentItem}
          >
          {items.map((item, index) => (
            <Picker.Item
              color="#0087F0"
              label={item.label}
              value={item.value}
              index={index}
            />
          ))}
        </Picker>

        {props.showError && props.touched && props.errors ? (
          <Text style={styles.error}>{props.errors}</Text>
        ) : null}
      </View>
    </>
  );
}

Dropdown.defaultProps = {
  listOfItems: [],
  isLoaded: false,
  lable: 'name',
  value: '_id',
  placeholder: 'Select',
  dropDownStyle: {backgroundColor: '#F7FAFB', color: '#9FA2A4'},
  onChangeItem: () => {},
  itemStyle: {
    justifyContent: 'flex-start',
  },
  style: {
    backgroundColor: '#F7FAFB',
    //margin: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 1,
    color: '#9FA2A4',
  },
  containerStyle: {height: 42},
  showError: false,
  touched: false,
  errors: '',
};
export default Dropdown;

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#F7FAFB',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 50,
    marginBottom: 10,
    zIndex: 1,
  },
  inputStyle: {
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 20,
    height: 42,
    backgroundColor: '#F7FAFB',
    borderColor: '#EBEBEB',
    
  },
  error: {
    margin: 0,
    marginBottom: 4,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    width: width - 60,
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
    color: '#007aff',
  },
  pickerStyle: {
    width: '100%',
    height: 40,
    color: '#007aff',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
