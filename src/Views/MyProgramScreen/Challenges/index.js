import React, { Component } from "react";
import DailyChallenge from "./DailyChallenge.js";
import WeeklyChallenge from "./WeeklyChallenge.js";
import MonthlyChallenge from "./MonthlyChallenge.js";
import { createBottomTabNavigator } from "react-navigation";
import {
    Icon
} from "native-base";
export default (ProgramScreenNavigator = createBottomTabNavigator(
    {
        DailyChallenge: { screen: props => <DailyChallenge {...props} /> },
        WeeklyChallenge: { screen: props => <WeeklyChallenge {...props} /> },
        MonthlyChallenge: { screen: props => <MonthlyChallenge {...props} /> }
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'DailyChallenge') {
              iconName = `ios-calendar${focused ? '' : '-outline'}`;
            } 
            else if (routeName === 'WeeklyChallenge') {
              iconName = `ios-calendar${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'MonthlyChallenge') {
                iconName = `ios-calendar${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
    }
));
