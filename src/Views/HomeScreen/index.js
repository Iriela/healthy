import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
/*import MainScreenNavigator from "../ChatScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";*/
//import AboutUs from "../AboutScreen/index.js"
import MyAccount from "../AccountScreen/index.js"
//import DashScreen from "../DashScreen/index.js"
//import MyCalendar from "../MyCalendarScreen/index.js"
//import MyProgram from "../MyProgramScreen/index.js"
//import Settings from "../Settings/index.js"
//import Workout from "../WorkoutScreen/index.js"
import DishesScreenNavigator from "../DishesScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    /*Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen },*/
    // AboutScreen { screen: AboutScreen },
    Dishes: { screen: DishesScreenNavigator},
    Account: { screen: MyAccount}
  },
  {
    initialRouteName: 'Account'
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
