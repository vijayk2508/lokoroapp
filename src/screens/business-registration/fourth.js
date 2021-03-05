import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {withNavigation} from 'react-navigation';

import Loader from '../../components/Loader';
import {themedColors} from '../../constants/Colors';
import BusinessHour from '../../components/BusinessHour';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {businessRegister} from '../../action-reducers/business/action';

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
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({
    idx: -1,
    name: '',
  });

  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    setLoading(false);

    const {
      businessCreatorType,
      businessType,
      name,
      businessImage,
      contactNumber,
      businessEmail,
      businessAddressId,
      facebookLink,
      websiteLink,
      instagramLink,
      businessHourId,
      industryId,
      ownerUserId,
      championUserId,
      businessRating,
      businessStatus,
      location,
    } = props.businessDetail;
    const formData = new FormData();
    formData.append('businessCreatorType', businessCreatorType);
    formData.append('businessType', businessType);
    formData.append('name', name);
    formData.append('uenNumber', uenNumber);
    formData.append('businessImage', businessImage);
    formData.append('businessEmail', businessEmail);
    formData.append('contactNumber', contactNumber);
    formData.append('businessAddressId', businessAddressId);
    if (facebookLink) {
      formData.append('facebookLink', facebookLink);
    }
    if (websiteLink) {
      formData.append('websiteLink', websiteLink);
    }
    if (instagramLink) {
      formData.append('instagramLink', instagramLink);
    }
    formData.append('businessHour', businessHourId);
    formData.append('industryId', industryId);
    formData.append('ownerUserId', ownerUserId);
    formData.append('championUserId', championUserId);
    formData.append('businessRating', businessRating);
    formData.append('businessStatus', businessStatus);
    formData.append('location', location);
    setLoading(true);
    const res = await dispatch(businessRegister(formData));
    if (res.status === 'success') {
      if (res.data.userObj) {
        props.navigation.navigate('startscreen');
        props.updateUserDetail({}, 1);
        setLoading(false);
        return;
      } else {
        alert(JSON.stringify(res.message));
        setLoading(false);
        return;
      }
    }
  };

  function onChange(data, idx) {
    let tmpData = [...businessHrs];
    tmpData[idx] = {...tmpData[idx], ...data};
    setbusinessHrs(tmpData);
    setShow(false);
  }

  const onChangeDateTime = (event) => {
    setShow(false);
    let tmpData = [...businessHrs];
    tmpData[editData.idx] = {
      ...tmpData[editData.idx],
      [editData.name]: moment(event.nativeEvent.timestamp).format('h:mm a'),
    };
    setbusinessHrs([...tmpData]);
  };

  const showTimepicker = (data) => {
    setShow(true);
    setEditData({
      idx: data.idx,
      name: data.type,
    });
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
        <View style={{flexDirection: 'column', width: 70}}>
          <Text>From</Text>
        </View>
        <View style={{flexDirection: 'column', width: 60}}>
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
            idx={idx}
            key={idx}
            onChange={(data) => onChange(data, idx)}
            showTimepicker={showTimepicker}
          />
        );
      })}
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.buttonTextStyle}>Finish</Text>
      </TouchableOpacity>

      {show === true ? (
        <DateTimePicker
          //testID="dateTimePicker"
          value={new Date()}
          mode={'time'}
          is24Hour={false}
          display="default"
          onChange={onChangeDateTime}
        />
      ) : null}
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
