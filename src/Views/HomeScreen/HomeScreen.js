import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  View
} from "native-base";
//import { getCurrentValue, incrementValue } from '../../Services/firebase_services';
import firebase from '../../Config/app_config'

export default class HomeScreen extends React.Component {
  state = { currentUser: null }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
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
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View>
            <Text>
              Hi {currentUser && currentUser.email}!
            </Text>

            <Button
              transparent
              onPress={() => this.props.navigation.navigate("MyProgram")}
            >
              <Text>Access to My Program</Text>
            </Button>

            <Button
              transparent
              onPress={() => this.props.navigation.navigate("FitScreen")}
            >
              <Text>Access Fitness Screen</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
