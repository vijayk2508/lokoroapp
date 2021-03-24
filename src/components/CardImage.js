import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import {assestImages} from '../assests';
import {
  width,
  defaultfontFamily,
  commonStyle,
} from '../constants/generalSettings';

export default class CardImage extends Component {
    render() {
        return (
            <Container style={styles.container}>
             
              <Content>
                <Card style={styles.cardsize}>
                  <CardItem style={{flexDirection: "row" }}>
                    <Left>
                    {/* <Image
              source={assestImages.img1}
              style={{ flex: 1, height: 24, width: 24, resizeMode: 'cover' }}
            /> */}
                      <Thumbnail source={(assestImages.img4) }style={{  height: 32, width: 32 ,shadowOpacity: 1,}} />
                      <Body>
                        <Text style={[ styles.setColorblack, ]}>Rechard Son</Text>
                        <Text note>4.5*</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>

                  <Image
              source={assestImages.img2}
              style={{ flex: 1, height: 168, width: null }}
            />
                    {/* <Image source={assestImages.img2} style={{height: 200, width: null, flex: 1}}/> */}
                  </CardItem>
                  <CardItem style={{flexDirection: "row"}}>
                    <Left style={{flexDirection: "row",justifyContent:'center'}}>
                      <Button transparent>
                      <Image
              source={assestImages.like}
              style={{ height: 20, width: 20,alignItems: 'center', }}
            />
                        {/* <Icon active name="thumbs-up" /> */}
                        <Text style={{ justifyContent:'center',alignItems: 'center',}}>12</Text>
                      </Button>

                      <Button transparent  style={{ marginLeft:30,alignItems: 'center', }}>

                      <Image
              source={assestImages.comment}
              style={{ height: 20, width: 20 }}
            />
                        {/* <Icon active name="thumbs-up" /> */}
                        
                      </Button>

</Left>
                      
                      <Body style={{flexDirection: "row",justifyContent:'center'}}>
                      <Button transparent style={{ justifyContent:'center',alignItems: 'center',}} >
                      <Image
              source={assestImages.share}
              style={{ height: 20, width: 20, }}
            />
                        
                      </Button>
                      </Body>
                      <Right style={{flexDirection: "row",justifyContent:'center'}}>
                      <Button transparent style={{ marginLeft:-20,alignItems: 'center', }}>
                    <Image
              source={assestImages.chat}
              style={{ height: 20, width: 20, }}
            />
                    {/* <Icon active name="chatbubbles" /> */}
                       
                    </Button>

                    <Button transparent style={{ marginLeft:50,alignItems: 'center', }}>
                    {/* <Icon active name="chatbubbles" /> */}
                    <Image
              source={assestImages.more}
              style={{ height: 20, width: 20, }}
            />
                       
                    </Button>
          </Right>
                    

                   
                    
                  </CardItem>
                </Card>
              </Content>

             </Container>

             
           
           
          );
        }
    }


    const styles = StyleSheet.create({
  
      container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        
      },

      cardsize:{
        flex:1,
        backgroundColor:'#F5F5F5',
        marginTop:10,
       
       
        shadowOffset: {
          width: 5,
          height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 5,
      
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

      setColorblack : {
        color: '#141414',
        fontFamily: defaultfontFamily.quicksand.bold,
      },


    });

