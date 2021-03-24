import React, { Component, useState,useEffect  } from 'react'
import {  Image,View ,ScrollView,StyleSheet,Switch } from 'react-native'
import{Button,Text,CardItem, Card,Thumbnail,} from 'native-base'
import {assestImages} from '../assests';
import {
    width,
    defaultfontFamily,
    commonStyle,
  } from '../constants/generalSettings';
  import AsyncStorage from '@react-native-community/async-storage';

  
  


const DrawerComponent =  (props)  =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [userDetail, setUserDetail] = useState('');

    let getLocalUserData = async () => {
            let data = await AsyncStorage.getItem('user_id');
            let parsedData = JSON.parse(data).userObj;
            setUserDetail(parsedData);
          };

           useEffect(() => {
                 getLocalUserData();
               }, []);
   
   
          
        return (
            
           <ScrollView style ={styles.container}>
               {/* <Text style={StyleSheet.text}>Side menu</Text> */}
             <Card style={{ marginTop:19,marginLeft:17,marginRight:17,height:88,borderRadius:10,shadowOpacity:'50%',shadowColor:'#000029', }}>
               <CardItem style={{flexDirection: "row" }}>
               <Thumbnail source={(assestImages.profile) }style={{  height: 60, width: 60 ,shadowOpacity: 1,borderRadius:10,}} />

               <CardItem style={{flexDirection: "column" }}>
              <Text style={{marginLeft:5,justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:16,}}>displayName</Text>
              <Text style={{marginLeft:5,justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:12,color:'#007AB3',}}>Edit</Text>
              </CardItem>
            </CardItem>

            </Card>
             


            <CardItem style={{flexDirection: "row" }}>
              <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,}}>Switch to Personal Account</Text>
              <Switch style={styles.container}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#1190CB" : "#1190CB"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </CardItem>


            <View
             style={{
             borderBottomColor: '#DCDCDC',
             borderBottomWidth: 1,
             marginTop:17,
                   }}
             />


            <CardItem style={{flexDirection: "row",marginTop:30, }}>
            <Image source={(assestImages.friends) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Loko Friends</Text>
            </CardItem>


            <CardItem style={{flexDirection: "row",marginTop:20, }}>
            <Image source={(assestImages.crown) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Local Campaign Application</Text>
            </CardItem>


            <CardItem style={{flexDirection: "row",marginTop:20, }}>
            <Image source={(assestImages.img4) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Buy Loko Coins</Text>
            </CardItem>


            <CardItem style={{flexDirection: "row",marginTop:20, }}>
            <Image source={(assestImages.clipboard) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Communities Guidelines</Text>
            </CardItem>


            <CardItem style={{flexDirection: "row",marginTop:20, }}>
            <Image source={(assestImages.bell) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Notification</Text>

            <Switch style={styles.container}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#1190CB" : "#1190CB"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </CardItem>


            <CardItem style={{flexDirection: "row",marginTop:20, }}>
            <Image source={(assestImages.email) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}>Contact us</Text>
            </CardItem>


            <View
             style={{
             borderBottomColor: '#DCDCDC',
             borderBottomWidth: 1,
             marginTop:21,
                   }}
             />

            
            <CardItem style={{flexDirection: "row",marginTop:30, }} >
            <Image source={(assestImages.logout) }style={{  height: 22, width: 22 ,}} />
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:14,color:'#141414',marginLeft:10,}}onPress={async () => {
             await AsyncStorage.removeItem('user_id');
             props.navigation.navigate('auth');
         }}>Log Out</Text>
            </CardItem>



            <CardItem style={{marginEnd:10,marginTop:50 }}>
            
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.medium,color:'#ACACAC',fontSize:10,}}>App Version -v1.10</Text>
            </CardItem>

               
               
           </ScrollView>
        )
    }
//}

export default DrawerComponent;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFFFFF',
        marginRight:5
    },
    text:{
        color:'#000',
        marginTop:50,
        marginLeft:10,

    },

    containers: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }
});


