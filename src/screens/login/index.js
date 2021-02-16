import React, {useState} from 'react';
import {
  Container,
  Content,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item,
  Input,
  Label,
  Title,
} from 'native-base';
import {Image, View} from 'react-native';
import {assestImages} from '../../assests';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
      <Content>
        {/* <Form>
          <Item>
            <Input
              placeholder="Username"
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(e) => {
                setPassword(e);
              }}
            />
          </Item>
        </Form>
       */}
        <View>
          <Image
            source={assestImages.logo_white_background}
            style={{height: 100, width: 150}}
          />
        </View>
        <Form>
          <Item>
            <Input
              placeholder="Username"
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(e) => {
                setPassword(e);
              }}
              secureTextEntry={true}
            />
          </Item>

          <Button full primary style={{paddingBottom: 4}}>
            <Text> Login </Text>
          </Button>
          <Button full light primary>
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
