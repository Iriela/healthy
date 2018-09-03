import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import DishesScreen from "../DishesScreen/index";
import AccountScreen from "../AccountScreen/index";
import MyProgramScreen from "../MyProgramScreen/index";
import ChallengeScreen from "../MyProgramScreen/Challenges/index";
import PedometerSensor from "../PedometerSensor/index"
import SideBar from "../SideBar/SideBar"

import { createDrawerNavigator, DrawerItems } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Dishes: { 
      screen: DishesScreen,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    },
    Account: { screen: AccountScreen },
    MyProgram: { screen: MyProgramScreen },
    Challenge: {
      screen: ChallengeScreen,
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    },
    PedometerSensor: { screen: PedometerSensor }
  },
  {
    contentComponent: SideBar
    //initialRouteName: 'Account'
  }
);
export default HomeScreenRouter;
