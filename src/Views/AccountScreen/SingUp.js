import React, { Component } from 'react';
import { TextInput } from 'react-native'
import {
  Container,
  Content,
  Button,
  Text,
  View,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon
} from 'native-base';
import firebase from 'firebase'
import { StyleSheet } from "react-native"
export default class SingUp extends Component {
  state =
    {
      email: '',
      password: '',
      errorMessage: null
    }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <Container>
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
            <Title>Sign Up</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form>
            {
              this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>
            }
            <Item inlineLabel>
              <Label>
                Email
              </Label>
              <Input
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item inlineLabel>
              <Label>
                Password
              </Label>
              <Input
                secureTextEntry
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Button onPress={this.handleSignUp}>
              <Text>Sign Up</Text> 
            </Button>
          </Form>
          <Text>Already a member? <Text onPress={() => this.props.navigation.navigate("Login")} style={{ color: "blue", textDecorationLine: "underline" }}>Log in</Text></Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})