import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {commonStyle} from '../constants/generalSettings';
import Textbox from './Textbox';

// import { Container } from './styles';

function PasswordInput(props) {
  const [show, setShow] = useState(true);
  return (
    <Textbox
    //   value={props.value}
    //   onChangeText={props.onChangeText}
    //   placeholder={props.placeholder}
    //   onBlur={props.onBlur}
    //   touched={props.touched}
    //   errors={props.errors}
    //   returnKeyType="next"
    //   keyboardType="default"
    //   //placeholderTextColor="#8b9cb5"
    //   autoCapitalize="none"
      secureTextEntry={show}
      icon={
        <Icon
          style={commonStyle.rightIcon}
          name={!show ? 'visibility-off' : 'visibility'}
          size={20}
          onPress={()=>{setShow(!show)}}
        />
      }
      {...props}
    />
  );
}

export default PasswordInput;
