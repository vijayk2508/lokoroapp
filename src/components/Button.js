import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {themedColors} from '../constants/Colors';

function Button(props) {
  return (
    <TouchableOpacity
      style={{...styles.buttonStyle, ...props.containerStyle}}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={{...styles.buttonTextStyle, ...props.containerTextStyle}}> {props.title} </Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
  title: 'Submit',
  buttonStyle: {},
  buttonTextStyle: {},
  containerStyle: {},
  containerTextStyle : {}
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 42,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 15,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
});
