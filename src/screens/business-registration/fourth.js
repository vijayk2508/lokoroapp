import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../action-reducers/auth/action';
import { assestImages } from '../../assests';
import { withNavigation } from 'react-navigation';

import Loader from '../../components/Loader';
import { themedColors } from '../../constants/Colors';
import { register } from '../../action-reducers/signup/action';
import BusinessHour from '../../components/BusinessHour';
import DateTimePicker from '@react-native-community/datetimepicker';

//import * as register from '../../action-reducers/signUp/action';

const data = [
  {
    day: 'Sunday',
    status: false,
    from: '',
    to: '',
  },

  {
    day: 'Monday',
    status: false,
    from: '',
    to: '',
  },
  {
    day: 'Tuesday',
    status: false,
    from: '',
    to: '',
  },
  {
    day: 'Wednesday',
    status: false,
    from: '',
    to: '',
  },
  {
    day: 'Thursday',
    status: false,
    from: '',
    to: '',
  },
  {
    day: 'Friday',
    status: false,
    from: '',
    to: '',
  },
  {
    day: 'Saturday',
    status: false,
    from: '',
    to: '',
  },
];
const FourthRegisterScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [businessHrs, setbusinessHrs] = useState(data);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [editData,setEditData] = useState({

  })

  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    setLoading(false);
  };

  function onChange(data, idx) {
    let tmpData = [...businessHrs];
    tmpData[idx] = { ...tmpData[idx], ...data };
    setbusinessHrs(tmpData);
  }

  const onChangeDateTime = (event, selectedDate) => {
    console.log("event", event, selectedDate);
    setShow(false);
  };

  const showTimepicker = (data, idx) => {
    setShow(true);
    //editData,
    setEditData({
       idx : idx,
       data : data
    })
  };

  return (
    <View>
      <Loader loading={loading} />
      <View
        style={{
          ...styles.SectionStyle,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View style={{ flexDirection: 'column', width: 70 }}>
          <Text>From</Text>
        </View>
        <View style={{ flexDirection: 'column', width: 60 }}>
          <Text>To</Text>
        </View>
      </View>
      {businessHrs.map((item, idx) => {
        return (
          <BusinessHour
            day={item.day}
            status={item.status}
            from={item.from}
            to={item.to}
            key={idx}
            onChange={(data) => onChange(data, idx)}
            showTimepicker={showTimepicker}
          ></BusinessHour>
        );
      })}

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.buttonTextStyle}>Next</Text>
      </TouchableOpacity>

      {show && <DateTimePicker
        //testID="dateTimePicker"
        value={date}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={onChangeDateTime}
      />}
    </View>
  );
};

export default withNavigation(FourthRegisterScreen);

const styles = StyleSheet.create({
  otp: {
    flex: 0.6,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  otpBox: {
    backgroundColor: '#f5f4f9',
    fontWeight: '600',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 40,
    width: '10%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
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
    marginTop: 20,
    marginBottom: 25,
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
