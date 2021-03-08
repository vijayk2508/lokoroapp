import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function HorizontalLine(props) {
  console.log('hi', props);
  return <View style={{...styles.line, width : props.width}}></View>;
}

function HorizontalRow(props) {
  return (
    <View style={styles.container}>
      <HorizontalLine {...props} />
      <Text style={props.style ? {...styles.text} : {...styles.text}}>
        {props.title}
      </Text>
      <HorizontalLine {...props} />
    </View>
  );
}

HorizontalRow.defaultProp = {
  title: 'OR',
  style: {},
  width: 100,
};

export default HorizontalRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#dadae8',
    height: 2,
    alignSelf: 'center',
    width: 100,
  },
  text: {
    color: '#141414',
    fontSize: 15,
    fontWeight: '400',
    padding: 5,
  },
});

/*
 <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            backgroundColor: '#dadae8',
                            height: 2,
                            flex: 1,
                            alignSelf: 'center',
                          }}
                        />
                        <Text
                          style={{
                            ...styles.registerTextStyle,
                            fontSize: 14,
                            color: '#141414',
                          }}>
                          OR
                        </Text>
                        <View
                          style={{
                            backgroundColor: '#dadae8',
                            height: 2,
                            flex: 1,
                            alignSelf: 'center',
                          }}
                        />
                      </View>

*/
