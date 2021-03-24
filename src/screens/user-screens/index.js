import React, {Component, useEffect, useState} from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  width,
  defaultfontFamily,
  commonStyle,
} from '../../constants/generalSettings';
import AsyncStorage from '@react-native-community/async-storage';
// import {Button} from 'react-native-elements';
// import {Text} from 'react-native';

import {assestImages} from '../../assests';
import { Container,Header,Left,Right,Body, Button, Icon, Item,Input,CardItem,Thumbnail } from 'native-base';

import { TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import FooterLoko from '../../components/FooterLoko';
import CardImage from '../../components/CardImage';
import DrawerComponent from '../../components/DrawerComponent';
import {Drawer} from 'native-base';
import CustomHeader from '../../components/CustomHeader';






const Tab = createMaterialBottomTabNavigator();






export default class index extends Component {

  closeDrawer () {
    this.drawer._root.close()
  };
  
  openDrawer ()
   { this.drawer._root.open() };

  render() {

    return (
    
             


               <Drawer ref={(ref) => { this.drawer = ref; }} 
               content={<DrawerComponent navigator={this._navigator} />} 
               onClose={() => this.closeDrawer()} >
               
               {/* <CustomHeader/> */}
              <Container >

             

 <Header style={{backgroundColor:'#1190CB',}}>

<Left>
    <Button transparent onPress={()=>this.openDrawer()}>
        <Icon name = 'menu'/>

    </Button>


    


</Left>
<Body></Body>
<Right>

  
<CardItem style={{flexDirection: "row",backgroundColor:'transparent', }}>
            
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:18,color:'#FFFFFF',}}>20</Text>

            <Thumbnail source={(assestImages.img4) }style={{  height: 24, width: 24 ,shadowOpacity: 1,marginLeft:3,}} />
</CardItem>



<Button transparent>
 <Icon name='heart' />
</Button>

</Right>




</Header>

<Header searchBar rounded style={{backgroundColor:'#1190CB',}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
         

         

<Button transparent>
 <Icon name='heart' />
</Button>

        </Header>


                
              <CardImage/>
             

              </Container>
              <FooterLoko/>
                 
              </Drawer> 



             
            
            
    
      
    )
  }
}






// function UserScreen(props) {
//   const [userDetail, setUserDetail] = useState('');

//   let getLocalUserData = async () => {
//     let data = await AsyncStorage.getItem('user_id');
//     let parsedData = JSON.parse(data).userObj;
//     setUserDetail(parsedData);
//   };

//   useEffect(() => {
//     getLocalUserData();
//   }, []);

//   console.log(userDetail.displayName);

//   return (
//     <>
//       <Text style={{justifyContent: 'center'}}>
//         Hi , {userDetail.displayName}
//       </Text>
//       <Button
//         title="Logout"
//         onPress={async () => {
//           await AsyncStorage.removeItem('user_id');
//           props.navigation.navigate('auth');
//         }}></Button>
//     </>
//   );
// }

// export default UserScreen;


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
 
  logoText: {
    color: 'white',
    fontFamily: defaultfontFamily.quicksand.semibold,
    fontSize: 12,
    marginTop: 0,
    fontWeight: '300',
    
    textTransform: 'capitalize',
  },
 

  textDescription: {
    fontSize: 16,
    fontFamily: defaultfontFamily.quicksand.medium,
    width: width - 30,
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'justify',
  },
});

