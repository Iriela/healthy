import React from "react";

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
import { auth, database, provider, refValue } from '../../Config/app_config.js';
import { getCurrentValue, incrementValue } from '../../Services/firebase_services';
import firebase from 'react-native-firebase'

export default class HomeScreen extends React.Component {
  state = { currentUser: null }

  constructor(props) {
    super(props);

    this.state = {
      valera: 5
    };

    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  /*componentDidMount() {
    var closure = this;
    console.log("Component did mount");
    //let valera = {...this.state.valera}
    //let ret = 0;
    refValue.on("value", function(snapshot){
      console.log('makato', snapshot.child('Value').val());
      let a = snapshot.child('Value').val();
      closure.setValue(a);
    });

    //this.setState({valera: ret});
  }*/

  setValue = (value) => {
    console.log('eeeooo', value);
    this.setState({
      valera: value
    });
  }

  addQuantity = () =>{
    console.log(this.state.valera);
    incrementValue(this.state.valera);
    //"this".state.value++;
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
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View style={styles.container}>
            <Text>
              Hi {currentUser && currentUser.email}!
            </Text>
          </View>
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
  }
})