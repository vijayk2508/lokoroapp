import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import {assestImages} from '../../assests';
import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
var screenWidth = Dimensions.get('window').width;

let dimensions = Dimensions.get('window');
let height = Math.round((dimensions.width * 9) / 16);
let width = dimensions.width;

const StartScreen = (props) => {
  console.log('StartScreen', props);
  const [loading, setloading] = useState(false);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}>
        <Loader loading={loading} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 5,
            width: width - 30,
          }}>
          <View style={styles.container}>
            <Image
              source={assestImages.img3}
              style={{height: height, width: width - 30, padding: 100}}
            />
          </View>
          <View style={styles.headerStyle}>
            <Text style={styles.title}> Welcome to Lokoro </Text>
            <Text style={styles.description}>
              To thank you for joining the Lokoro Community, we are giving away
              10 Loko Coins. Loko Coins can be used to bump up your posts and
              create groups.
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: '#E5E5E8',
              borderBottomWidth: 1,
              margin: 10,
              marginLeft: 70,
              marginRight: 70,
              width: width - 90,
            }}
          />

          <Text style={styles.formHeading}>Congratulations! You have...</Text>

          <View style={{marginBottom: 0}}>
            <View style={{marginTop: 10}}>
              <Image source={assestImages.img4} style={{padding: 40}} />
            </View>

            <View>
              <Text
                style={{
                  color: '#F27413',
                  alignSelf: 'center',
                  fontSize: 45,
                  margin: 0,
                }}>
                10
              </Text>
            </View>
            <View
              style={{
                margin: 0,
              }}>
              <Text style={{color: '#F27413', alignSelf: 'center', margin: 0}}>
                Loko Coins
              </Text>
            </View>
          </View>
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
                marginTop: 10,
                marginBottom: 0,
              }}>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                //onPress={handleSubmitPress}
              >
                <Text style={styles.buttonTextStyle}>Let's Get Started!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.buttonStyle,
                  backgroundColor: '#F7FAFB',
                  color: '#1190CB',
                }}
                activeOpacity={0.5}
                onPress={() => {
                  props.navigation.navigate('userBusinessRegistration');
                }}>
                <Text style={{...styles.buttonTextStyle, color: '#1190CB'}}>
                  Register a Business
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.SectionStyle,
                padding: 0,
                marginTop: 0,
                marginBottom: 0,
                alignSelf: 'center',
              }}>
              <Text style={{color: '#1190CB', alignSelf: 'center'}}>
                Read our Community Guidelines
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default withNavigation(StartScreen);

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 100,

    // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    // margin: 10,
  },
  headerStyle: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  description: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
  formHeading: {
    marginTop: 6,
    fontFamily: 'Quicksand',
    color: '#676767',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },

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
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 5,
    width: width - 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 4,
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
