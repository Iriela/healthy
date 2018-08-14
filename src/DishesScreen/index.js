import React, { Component } from "react";
import NonVegDishes from "./NonVegDishes.js";
import SeaFoodDishes from "./SeaFoodDishes.js";
import VegDishes from "./VegDishes.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";
export default (DishesScreenNavigator = TabNavigator(
  {
    NonVegDishes: { screen: props => <NonVegDishes {...props}/> },
    SeaFoodDishes: { screen: props => <SeaFoodDishes {...props} /> },
    VegDishes: { screen: props => <VegDishes {...props} /> }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("NonVegDishes")}
            >
              <Icon name="bowtie" />
              <Text>NonVeg</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("SeaFoodDishes")}
            >
              <Icon name="briefcase" />
              <Text>Sea Food</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("VegDishes")}
            >
              <Icon name="headset" />
              <Text>Veg</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
