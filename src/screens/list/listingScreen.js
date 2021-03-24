import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ListingScreen = () => {
    return (
      <View style={styles.container}>
        <Text>ListingScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});