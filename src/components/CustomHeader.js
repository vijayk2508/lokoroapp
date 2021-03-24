import React,{Component} from 'react';
import {View,Text,StyleSheet,}from 'react-native';
import {Container,Header,Left,Right,Body,Button,Icon,Title} from 'native-base';


export default class CustomHeader extends Component{
    render(){
        return(
            <Header style={{backgroundColor:'#1190CB',}}>

             <Left>
                 <Button transparent >
                     <Icon name = 'menu'/>

                 </Button>


               


             </Left>
             <Body></Body>
             <Right>
             <Button transparent>
              <Icon name='search' />
            </Button>

            <Button transparent>
              <Icon name='heart' />
            </Button>

             </Right>




            </Header>
        );
    }
}

