import React, { Component } from 'react';
import { TextInput } from 'react-native'
import {
  Container,
  Content,
  Button,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Label,
  Form,
  Item,
  Input,
  Icon
} from 'native-base';
import firebase from 'firebase'
import { StyleSheet } from "react-native"
export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
            <Title>Login</Title>
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
                placeholder=""
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
            <Button onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          </Form>
          <Text>New to Healthy? <Text onPress={() => this.props.navigation.navigate("SingUp")} style={{ color: "blue", textDecorationLine: "underline" }}>Create an account</Text></Text>
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