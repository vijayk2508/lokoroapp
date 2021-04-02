import React, { Component } from 'react'
import { Text, View , StyleSheet,Image } from 'react-native'
import { Container,  Content, Footer, FooterTab,Button, Icon } from 'native-base';
import {
  width,
  defaultfontFamily,
  commonStyle,
} from '../constants/generalSettings';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {assestImages} from '../assests';
//import BuzzScreen from '../screens/buzz/BuzzScreen.js';



export default class FooterLoko extends Component <TabNavigator> {
    render() {

       
    tabBarComponent: props => {


    // const Tab = createBottomTabNavigator();

 
  


        return (


          // <Content>
          //   {this.renderSelectedTab()}
          // </Content>
       
      
        <Footer>
          <FooterTab style={{backgroundColor:"#1190CB"}}>
            <Button vertical 
             onPress={() => props.navigation.navigate("buzz")}>
            
          
           
            <Image
              source={assestImages.buzz_white}
              style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            />
            
              <Text style={styles.logoText}>Buzz</Text>
            </Button>
            <Button vertical  onPress={() => navigation.navigate('')}>
             
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
       
        );
    }
    }
}



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


