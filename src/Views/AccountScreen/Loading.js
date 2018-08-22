import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'
import firebaseConfig from '../../Config/app_config'
export default class Loading extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Login')
      })
    }
    componentWillMount(){
      firebase.initializeApp(firebaseConfig);
    }
    render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})