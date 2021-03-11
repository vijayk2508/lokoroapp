import React, {useEffect} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {width} from '../constants/generalSettings';

function Textbox(props) {
  console.log('hi', props);
  function TextWithIcon() {
    switch (typeof props.icon) {
      case 'string':
        return <Icon style={styles.icon} name={props.icon} size={20} />;
        break;
      case 'object':
        return props.icon;
      default:
        return null;
    }
  }

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
        {/* <Text>
          {JSON.stringify(props.touched)} {JSON.stringify(props.errors)}
        </Text> */}
        <TextInput
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
        />
        {props.icon ? TextWithIcon() : null}
      </View>
      {props.showError && props.touched && props.errors ? (
        <Text style={styles.error}>{props.errors}</Text>
      ) : null}
    </>
  );
}

Textbox.defaultProps = {
  icon: '',
  value: '',
  style: {},
  onChangeText: () => {},
  onBlur: () => {},
  placeholder: 'Enter Text',
  placeholderTextColor: '#8b9cb5',
  autoCapitalize: 'none',
  keyboardType: 'email-address',
  returnKeyType: 'next',
  onSubmitEditing: () => {},
  underlineColorAndroid: '#f000',
  blurOnSubmit: false,
  touched: false,
  errors: '',
  maxLength: 20,
  multiline: false,
  showError: false,
};
export default Textbox;

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
