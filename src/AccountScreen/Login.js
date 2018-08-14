import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
    )
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button block>
              <Text>Login</Text>
            </Button>
          </Form>
          <Text>New to Healthy? <Text onPress={() => this.props.navigation.navigate("SingUp") } style={{color:"blue", textDecorationLine: "underline"}}>Create an account</Text></Text>
        </Content>
      </Container>
    );
  }

}