import React from 'react';
import {StyleSheet} from 'react-native';
import { themebutton } from '../constants/generalSettings';
import CustomButton from './CustomButton';

const FullButtonComponent = props => {
  return (
    <CustomButton {...props} buttonStyle={[styles.button, props.buttonStyle]} />
  );
};

const styles = StyleSheet.create({
  button: {
  
    width: '100%',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default FullButtonComponent;
