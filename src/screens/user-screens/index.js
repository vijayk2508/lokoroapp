import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-elements';
import {Text} from 'react-native';

function UserScreen(props) {
  const [userDetail, setUserDetail] = useState('');

  let getLocalUserData = async () => {
    let data = await AsyncStorage.getItem('user_id');
    let parsedData = JSON.parse(data).userObj;
    setUserDetail(parsedData);
  };

  useEffect(() => {
    getLocalUserData();
  }, []);

  console.log(userDetail.displayName);

  return (
    <>
      <Text style={{justifyContent: 'center'}}>
        Hi , {userDetail.displayName}
      </Text>
      <Button
        title="Logout"
        onPress={() => {
          props.navigation.navigate('auth');
        }}></Button>
    </>
  );
}

export default UserScreen;
