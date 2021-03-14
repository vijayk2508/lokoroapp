//https://www.npmjs.com/package/react-native-masked-text/v/1.6.5

import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInputMask} from 'react-native-masked-text';
import {width} from '../constants/generalSettings';

function TextMaskInput(props) {
  const [data, setData] = useState('');
  function TextWithIcon() {
    switch (typeof props.icon) {
      case 'string':
        return <Icon style={styles.icon} name={props.icon} size={20} />;
      case 'object':
        return props.icon;
      default:
        return null;
    }
  }

  let textinputmaskstyle = {
    ...styles.inputStyle,
    width: props.icon ? width - 80 : width - 40,
    paddingHorizontal: props.icon ? 10 : 10,
    borderColor:
      props.touched && props.errors ? 'red' : styles.inputContainer.borderColor,
  };

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
        {/* <TextInput
          {...props}
          style={{
            ...styles.inputStyle,
            width: props.icon ? width - 80 : width - 40,
            paddingHorizontal: props.icon ? 10 : 10,
            borderColor:
              props.touched && props.errors
                ? 'red'
                : styles.inputContainer.borderColor,
          }}
        /> */}
       
        <TextInputMask
          type={props.type}
          options={{...props.options, obfuscated: true}}
          onBlur={props.onBlur}
          style={textinputmaskstyle}
          placeholder={props.placeholder}
          value={props.value}
          //autoCapitalize={true}
          onChangeText={(maskedText, rawText) => {
            setData(`${maskedText.toUpperCase()}`);
            props.onChangeText(maskedText.toUpperCase());
          }}
          maxLength={props.maxLength}
        />
        {props.icon ? TextWithIcon() : null}
      </View>
      {props.showError && props.touched && props.errors ? (
        <Text style={styles.error}>{props.errors}</Text>
      ) : null}
    </>
  );
}

TextMaskInput.defaultProps = {
  icon: '',
  value: '',
  style: {},
  onChangeText: () => {},
  onBlur: () => {},
  placeholder: 'Enter Text',
  onSubmitEditing: () => {},
  underlineColorAndroid: '#f000',
  blurOnSubmit: false,
  touched: false,
  errors: '',
  maxLength: 15,
  multiline: false,
  showError: false,
  options: {
    mask: 'SSSSSSSSSSS',
  },
  type: 'custom',
};

export default TextMaskInput;

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
  },
  inputStyle: {
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: '#F7FAFB',
    color: '#9FA2A4',
    width: width - 60,
  },
  error: {
    margin: 0,
    marginBottom: 4,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    width: width - 60,
  },
});
