import React, {Component, useEffect, useState} from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {
  width,
  defaultfontFamily,
  commonStyle,
} from '../../constants/generalSettings';
import AsyncStorage from '@react-native-community/async-storage';
// import {Button} from 'react-native-elements';
// import {Text} from 'react-native';

import {assestImages} from '../../assests';
import { Container,Header,Left,Right,Body, Button, Icon, Item,Input,CardItem,Thumbnail,Badge,Fab,Footer,FooterTab, } from 'native-base';

import { TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import FooterLoko from '../../components/FooterLoko';
import CardImage from '../../components/CardImage';
import DrawerComponent from '../../components/DrawerComponent';
import {Drawer} from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { TabNavigator } from "react-navigation";

 import BuzzScreen from '../buzz/BuzzScreen.js';
 import GolokoScreen from './GolokoScreen.js';
 import ListingScreen from './ListingScreen.js';















export default class UserScreen extends Component<TabNavigator> {

  

  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }


  

  

  

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
    <Image source={(assestImages.menuu) }style={{  height: 24, width: 24 ,}} />
        {/* <Icon name = 'menu'/> */}

    </Button>


    


</Left>
<Body></Body>
<Right>

  
<CardItem style={{flexDirection: "row",backgroundColor:'transparent', }}>
            
            <Text style={{justifyContent:'center',fontFamily: defaultfontFamily.quicksand.bold,fontSize:18,color:'#FFFFFF',}}>20</Text>

            <Thumbnail source={(assestImages.img4) }style={{  height: 24, width: 24 ,marginLeft:3,}} />
</CardItem>



<Button transparent badge vertical>
<Badge style={{  height: 13, width: 20 ,marginLeft:15,justifyContent:'center',}} ><Text style={{  fontSize:6,color:'#FFF',}}>23</Text></Badge>
  <Image source={(assestImages.chatwh) }style={{  height: 20, width: 20 ,marginLeft:3,}} />
</Button>

</Right>




</Header>

<Header searchBar rounded style={{backgroundColor:'#1190CB',}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-filter" />
          </Item>
         

         

<Button transparent>
 <Icon name='heart' />
</Button>

        </Header>


                
              <CardImage/>


               <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#1190CB' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="add" />
           
          </Fab>
             

              </Container>





              <Footer>
          <FooterTab style={{backgroundColor:"#1190CB"}}>
            <Button vertical 
           // active={props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate("buzz")}>
            
          
           
            <Image
              source={assestImages.buzz_white}
              style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            />
            
              <Text style={styles.logoText}>Buzz</Text>
            </Button>
            <Button vertical  onPress={() => navigation.navigate('BuzzScreen')}>
             
            <Image
              source={assestImages.goloko_white}
              style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            />
              <Text style={styles.logoText}>Goloko</Text>
            </Button>
            <Button vertical >
            <Image
              source={assestImages.listing_white}
              style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            />
              <Text style={styles.logoText}>List</Text>
            </Button>
            <Button vertical>
            <Image
             source={assestImages.joining_white}
             style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            />
              <Text style={styles.logoText}>Join</Text>
            </Button>
          </FooterTab>
        </Footer>

              
              {/* <FooterLoko/>  */}
                 
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

