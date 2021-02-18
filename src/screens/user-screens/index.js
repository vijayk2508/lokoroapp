import React from 'react';
import {Text} from 'native-base';

function UserScreen(props) {
  return (
    <Text style={{justifyContent: 'center'}}>
      Welcome
      {/* {JSON.stringify(props)} */}
    </Text>
  );
}

export default UserScreen;
