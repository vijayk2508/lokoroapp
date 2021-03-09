import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {commonStyle} from '../constants/generalSettings';
import Textbox from './Textbox';

function PasswordInput(props) {
  const [show, setShow] = useState(true);
  return (
    <Textbox
      secureTextEntry={show}
      icon={
        <Icon
          style={commonStyle.rightIcon}
          name={!show ? 'visibility-off' : 'visibility'}
          size={20}
          onPress={() => {
            setShow(!show);
          }}
        />
      }
      {...props}
    />
  );
}

PasswordInput.defaultProps = {
  maxLength: 15,
};

export default PasswordInput;
