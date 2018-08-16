import React, { Component } from "react";
import DailyChallenge from "./DailyChallenge.js";
import WeeklyChallenge from "./WeeklyChallenge.js";
import MonthlyChallenge from "./MonthlyChallenge.js";
import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Segment,
  Container,
  Left,
  Icon,
  Right,
  Header,
  Title,
  Body
} from "native-base";
export default (DishesScreenNavigator = TabNavigator(
  {
    DailyChallenge: { screen: props => <DailyChallenge {...props}/> },
    WeeklyChallenge: { screen: props => <WeeklyChallenge {...props} /> },
    MonthlyChallenge: { screen: props => <MonthlyChallenge {...props} /> }
  },
  {
    tabBarPosition: "top",
    tabBarComponent: props => {
      return (
        <Container>
            <Header hasSegment>
                <Left>
                    <Button
                        transparent
                        onPress={() => props.navigation.navigate("DrawerOpen")}
                        >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Challenges</Title>
                </Body>
                <Right />
            </Header>
            <Segment>
                <Button first
                    vertical
                    active={ props.navigationState.index === 0}
                    onPress={() => props.navigation.navigate("DailyChallenge")}
                >
                <Text>Daily</Text>
                </Button>
                <Button
                    vertical
                    active={ props.navigationState.index === 1}
                    onPress={() => props.navigation.navigate("WeeklyChallenge")}
                >
                <Text>Weekly</Text>
                </Button>
                <Button last
                    vertical
                    active={ props.navigationState.index === 2}
                    onPress={() => props.navigation.navigate("MonthlyChallenge")}
                >
                <Text>Monthly</Text>
                </Button>
            </Segment>
        </Container>
      );
    }
  }
));
