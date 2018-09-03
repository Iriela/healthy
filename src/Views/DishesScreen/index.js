import React, { Component } from "react";
import NonVegDishes from "./NonVegDishes.js";
import SeaFoodDishes from "./SeaFoodDishes.js";
import VegDishes from "./VegDishes.js";
import {
  Button,
  Text,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import { createBottomTabNavigator } from "react-navigation";
export default (DishesScreenNavigator = createBottomTabNavigator(
  {
    NonVegDishes: { screen: props => <NonVegDishes {...props} /> },
    SeaFoodDishes: { screen: props => <SeaFoodDishes {...props} /> },
    VegDishes: { screen: props => <VegDishes {...props} /> }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let reverse;
        let type;
        if (routeName === 'NonVegDishes') {
          iconName = `sausage`;
          reverse = focused ? '' : 'reverse';
          type = 'MaterialCommunityIcons'
        }
        else if (routeName === 'VegDishes') {
          iconName = `leaf`;
          reverse = focused ? '' : 'reverse';
          type = 'Entypo';
        }
        else if (routeName === 'SeaFoodDishes') {
          iconName = `social-squidoo`;
          reverse = focused ? '' : 'reverse';
          type = 'Foundation';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons

        return<Icon
          {...reverse}
          name={iconName}
          type={type}
          size={25}
          color='#517fa4'
          color={tintColor}
        />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));
