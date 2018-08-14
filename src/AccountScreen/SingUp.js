import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
export default class SingUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    header:(
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Sing Up</Title>
        </Body>
        <Right />
      </Header>
    )
  }); 
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Input placeholder="Firstname" />
            </Item>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="Password" />
            </Item>
            <Item last>
              <Input secureTextEntry={true} placeholder="Confirm password" />
            </Item>
            <Button block>
                <Text>Register</Text>
            </Button>
          </Form>
          <Text>Already a member? <Text onPress={() => this.props.navigation.navigate("Login") } style={{color:"blue", textDecorationLine: "underline"}}>Log in</Text></Text>
        </Content>
      </Container>
    );
  }
}