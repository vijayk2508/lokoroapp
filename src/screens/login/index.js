import React from 'react';
import {Container, Header, Content, Input, Item, Form} from 'native-base';
function Login() {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
