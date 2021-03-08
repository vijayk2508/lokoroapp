import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {commonStyle} from '../constants/generalSettings';

function Button(props) {
  const containerStyle = StyleSheet.flatten([
    commonStyle.defaultButtonStyle,
    props.containerStyle,
  ]);

  const containerTextStyle = StyleSheet.flatten([
    commonStyle.defaultButtonTextStyle,
    props.containerStyle,
  ]);
  return (
    <View style={{...props.style}}>
      <TouchableOpacity
        style={containerStyle}
        onPress={props.onPress}
        disabled={props.disabled}>
        <Text style={containerTextStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
  title: 'Submit',
  buttonStyle: {},
  buttonTextStyle: {},
  containerStyle: {},
  containerTextStyle: {},
};

export default Button;
