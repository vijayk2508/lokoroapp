import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {commonStyle, width} from '../../constants/generalSettings';

import * as ImagePicker from './utilites';

function ImageUpload() {
  const [response, setResponse] = React.useState(null);

  function uploadAction() {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        console.log(response);
        setResponse(response);
      },
    );
  }
  return (
    <View style={styles.container}>
      <Avatar
        source={response ? response : require('../../assests/images/coin.png')}
        containerStyle={styles.avatar}
        size="large"
        rounded
      />
      <TouchableOpacity style={styles.uploadIcon} onPress={uploadAction}>
        <Icon name={'photo-camera'} size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default ImageUpload;
const styles = StyleSheet.create({
  avatar: {
    // width: 80,
    // height: 80,
    marginTop: 30,
  },
  uploadIcon: {
    backgroundColor: '#1190CB',
    //position: 'absolute',
    bottom: 0,
    top: -14,
    left: 33,
    width: 35,
    height: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
  },
  container: {
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //margin: 30,
    //borderWidth: 3,
    height: 115
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});
