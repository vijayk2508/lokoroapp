import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { themedColors } from '../constants/Colors';

function BusinessHour(props) {
    return (
        <>
            <View
                style={{
                    ...styles.SectionStyle,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                <View style={{ flexDirection: 'column', width: 80 }}>
                    <Text>{props.day}</Text>
                </View>
                <View style={{ flexDirection: 'column', width: 100 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor="#f4f3f4"
                            onValueChange={() => {
                                props.onChange({
                                    status: !props.status,
                                });
                            }}
                            value={props.status}
                        />
                        <Text style={{ textTransform: 'capitalize' }}>{props.status ? "open" : "Closed"}</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        borderWidth: 1,
                        width: 60,
                        borderColor: 'white',
                        borderBottomColor: 'black',
                    }}>
                    <Text
                        style={{}}
                        onPress={() => {
                            props.showTimepicker({ ...props, type: "from" })
                        }}
                    >
                        {props.from}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        borderWidth: 1,
                        width: 60,
                        borderColor: 'white',
                        borderBottomColor: 'black',
                    }}>
                    <Text
                        style={{}}
                        onPress={() => { props.showTimepicker({ ...props, type: "to" }) }}
                    >
                        {props.to}
                    </Text>
                </View>
            </View>

        </>
    );
}

BusinessHour.defaultProps = {
    day: 'Day',
    status: false,
    from: '',
    to: '',
    onChange: () => { },
};

export default BusinessHour;

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
