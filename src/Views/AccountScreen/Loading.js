import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../../Config/app_config'
export default class Loading extends React.Component {
    componentDidMount() {
      /*if(firebase.auth().currentUser === null){
        this.props.navigation.navigate('Login');
      }*/
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Login')
      })
    }
    
    render() {
    return (
      <View>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}