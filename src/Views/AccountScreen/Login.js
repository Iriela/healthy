import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
import firebase from 'react-native-firebase'

export default class Login extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    const { email, pasword } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  
  render() {
    return (
      <Container>
        <Content padder>
          <View style={styles.container}>
            <Text>Login</Text>
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button title="Login" onPress={this.handleLogin} />
          </View>
          <Text>New to Healthy? <Text onPress={() => this.props.navigation.navigate("SingUp") } style={{color:"blue", textDecorationLine: "underline"}}>Create an account</Text></Text>
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