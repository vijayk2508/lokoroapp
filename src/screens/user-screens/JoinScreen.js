import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const JoinScreen = () => {
   constructor(props){
        super(props);
    }
    return (
      <View style={styles.container}>
        <Text>JoinScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default JoinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});