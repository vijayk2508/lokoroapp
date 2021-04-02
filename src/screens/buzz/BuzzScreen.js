import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';



const BuzzScreen = ({navigation}) => {

 // const { colors } = useTheme();

  //const { navigation:navigate } = this.props;

  
  
    return (
      <View style={styles.container}>
        
        <Text>Buzz Screen</Text>
      <Button
        title="Go to details screen"
        //onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default BuzzScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

