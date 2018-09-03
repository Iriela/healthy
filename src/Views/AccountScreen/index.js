import React, { Component } from "react";
import Login from "./Login.js";
import SingUp from "./SingUp.js";
import { createStackNavigator } from "react-navigation";
import Loading from "./Loading.js";
export default (Account = createStackNavigator(
    {
      Login: { screen: props => <Login {...props}/> },
      SingUp: { screen: props => <SingUp {...props}/> },
      Loading: {screen: props => <Loading {...props}/>}
    },
    {
        initialRouteName: "Loading"
    }
));