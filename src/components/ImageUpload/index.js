import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from './utilites';

function ImageUpload(props) {
  const [response, setResponse] = React.useState(null);

  function uploadAction() {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (res) => {
        //console.log(res);
        setResponse(res);
        props.changeImage(res);
      },
    );
  }
  return (
    <View style={styles.container}>
      <Avatar
        source={
          response ? response : require('../../assests/images/profile.png')
        }
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
    marginTop: 0,
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
    alignItems: 'center',
    backgroundColor: 'white',
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
