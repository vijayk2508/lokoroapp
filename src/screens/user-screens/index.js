import React from 'react';
import {Text} from 'native-base';

function UserScreen(props) {
  return (
    <Text style={{justifyContent: 'center'}} onPress={()=>{
      props.navigation.navigate('auth');
    }}>
      Logout
      {/* {JSON.stringify(props)} */}
    </Text>
  );
}

export default UserScreen;
