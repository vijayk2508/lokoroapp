// import React from 'react';
// import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
// import { useTheme } from '@react-navigation/native';

// const BuzzScreen = ({navigation}) => {

//   const { colors } = useTheme();

//   const theme = useTheme();
  
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
//         <Text style={{color: colors.text}}>Buzz Screen</Text>
//       <Button
//         title="Go to details screen"
//         //onPress={() => navigation.navigate("Details")}
//       />
//       </View>
//     );
// };

// export default BuzzScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function BuzzScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}