import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
//import DishesScreen from "../DishesScreen/index";
import AccountScreen from "../AccountScreen/index";
//import MyProgramScreen from "../MyProgramScreen/index";
import SideBar from "../SideBar/SideBar";
//import ChallengeScreen from "../MyProgramScreen/Challenges/index";
import { DrawerNavigator } from "react-navigation";
import firebase from 'firebase'
import firebaseConfig from '../../Config/app_config'

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    //Dishes: { screen: DishesScreen },
    Account: { screen: AccountScreen },
    //MyProgram: { screen: MyProgramScreen },
    /*Challenge: { 
      screen: ChallengeScreen ,
      navigationOptions : () => ({ 
      gesturesEnabled: false
    })}*/
  },
  {
    initialRouteName: "Account"
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
