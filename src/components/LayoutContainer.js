import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {commonStyle} from '../constants/generalSettings';

function LayoutContainer(props) {
  return (
    <View style={commonStyle.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={commonStyle.scrollView}
        >
        {props.children}
      </ScrollView>
    </View>
  );
}

export default LayoutContainer;
