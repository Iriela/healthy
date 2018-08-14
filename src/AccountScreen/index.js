import React, { Component } from "react";
import Login from "./Login.js";
import SingUp from "./SingUp.js";
import { StackNavigator } from "react-navigation";
export default (Account = StackNavigator(
    {
      Login: { screen: props => <Login {...props}/> },
      SingUp: { screen: props => <SingUp {...props} /> }
    },
    {
        initialRouteName: "Login"
    }
));