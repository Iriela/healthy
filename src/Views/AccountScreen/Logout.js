import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from '../../Config/app_config'
export default class Logout extends React.Component {
    componentDidMount() {
      firebase.auth().signOut();
      this.props.navigation.navigate('Login');
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