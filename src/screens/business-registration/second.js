import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Loader from '../../components/Loader';
import { themedColors } from '../../constants/Colors';
import { width } from '../../constants/generalSettings';
import { BUSINESSTYPE } from './constant';

const SecondRegisterScreen = (props) => {
  const [loading] = useState(false);
  const [] = useState('');

  // useEffect(() => {
  //   setEmail(props.userDetail.email);
  //   setIsEnabled(props.userDetail.isEnabled);
  // }, [props.userDetail]);

  const handleSubmitPress = () => {
    props.updateBusinessDetail(null,3)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loader loading={loading} />
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            //padding: 20,
            //margin: 20,
          }}>
          <View
            style={{
              padding: 0,
              marginTop: 20,
              marginBottom: 0,
            }}>
            <View
              style={{
                padding: 0,
                marginTop: 20,
                marginBottom: 0,
              }}>
              <TouchableOpacity
                style={{
                  ...styles.buttonStyle,
                  backgroundColor: props.businessDetail.businessType === BUSINESSTYPE.REGISTERED ? themedColors.default.appColor : "#7DCCFF"
                }}
                activeOpacity={1}
                onPressIn={() => { props.updateBusinessDetail({ businessType: BUSINESSTYPE.REGISTERED }) }}
              >
                <Text
                  style={{ ...styles.buttonTextStyle }}
                > Registered Business (with UEN)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.buttonStyle,
                  backgroundColor: props.businessDetail.businessType === BUSINESSTYPE.HOME ? themedColors.default.appColor : "#7DCCFF"
                }}
                activeOpacity={1}
                onPressIn={() => { props.updateBusinessDetail({ businessType: BUSINESSTYPE.HOME }) }}
              >
                <Text
                  style={{ ...styles.buttonTextStyle }}
                >Home Business</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
              style={{
                ...styles.buttonStyle,
                backgroundColor: '#F7FAFB',
                color: '#1190CB',
              }}
              activeOpacity={0.5}
            //onPress={handleSubmitPress}
            >
              <Text style={{
                ...styles.buttonTextStyle, opacity: 0.7,
                //color: '#1190CB' 
                color: '#CCCCCC',
                backgroundColor: "#F7FAFB"
                //#CCCCCC
              }}>
                Loko Champion
              </Text>
            </TouchableOpacity> */}
            </View>
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              //onPress={handleSubmitPress}
            >
              <Text style={styles.buttonTextStyle}>
                Registered Business (with UEN)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.buttonStyle,
                backgroundColor: '#F7FAFB',
                color: '#1190CB',
              }}
              activeOpacity={0.5}
              //onPress={handleSubmitPress}
            >
              <Text style={{...styles.buttonTextStyle, color: '#1190CB'}}>
                Home Business
              </Text>
            </TouchableOpacity>
          */}
          </View>
        </View>

        <TouchableOpacity
          // disabled={isEnabled === false}
          style={styles.buttonStyle}
          activeOpacity={0}
          onPress={handleSubmitPress}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
        <View
          style={{
            ...styles.SectionStyle,
            padding: 0,
            marginTop: 0,
            marginBottom: 0,
            alignSelf: 'center',
          }}>
          <Text
            style={{ alignSelf: 'center', fontWeight: 'bold', color: '#1190CB' }}>
            Our Data Privacy Policies
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SecondRegisterScreen;

const styles = StyleSheet.create({
  logoText: {
    color: themedColors.default.appColor,
    //fontFamily : "Goo"
    fontSize: 20,
    marginTop: 0,
    fontWeight: '300',
    marginBottom: 8,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },

  buttonStyle: {
    backgroundColor: themedColors.default.appColor,
    borderColor: themedColors.default.appColor,
    borderWidth: 2,
    color: '#FFFFFF',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    margin: 10,
    width: width - 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 6,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    //color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    //color: '#FFFFFF',

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
