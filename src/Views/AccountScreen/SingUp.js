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
  Title
} from 'native-base';
//import firebase from 'react-native-firebase'
import { StyleSheet } from "react-native"
export default class SingUp extends Component {
  state =
    {
      email: '',
      password: '',
      errorMessage: null
    }
  /*handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }*/

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
          <View style={styles.container}>
            <Text>Sign Up</Text>
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button title="Sign Up" />
            <Button
              title="Already have an account? Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
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