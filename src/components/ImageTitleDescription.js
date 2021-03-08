import React from 'react';
import {Image, View, Text} from 'react-native';
import {assestImages} from '../assests';
import {commonStyle} from '../constants/generalSettings';

// import { Container } from './styles';

const ImageTitleDescription = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={assestImages.logo_white_background}
        style={commonStyle.logoImage}
      />
      {props.title ? (
        <>
          <Text style={commonStyle.logoTitle}>{props.title}</Text>
        </>
      ) : null}
      {props.description ? (
        <Text style={commonStyle.logoDescription}>{props.description}</Text>
      ) : null}
    </View>
  );
};

ImageTitleDescription.defaultProps = {
  title: 'Building Communities for Good',
  description: '',
};

export default ImageTitleDescription;
