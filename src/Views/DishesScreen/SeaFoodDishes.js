import React, { Component } from 'react';
import { Image } from 'react-native';
import { Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, View, DeckSwiper, Thumbnail } from 'native-base';
const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../../img/Seafood/Seafood1.jpg')
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('../../img/Seafood/Seafood2.jpg')
    },
    {
        text: 'Card Three',
        name: 'Three',
        image: require('../../img/Seafood/Seafood3.jpg')
    }
];
export default class SeaFoodDishes extends React.Component {
    render() {
        return (
        <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>SeaFood Dishes</Title>
          </Body>
          <Right />
        </Header>
        <View>
            <DeckSwiper
                dataSource={cards}
                renderItem={item =>
                <Card style={{ elevation: 3 }}>
                    <CardItem>
                        <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                            <Text>{item.text}</Text>
                            <Text note>NativeBase</Text>
                        </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>
                    <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.name}</Text>
                    </CardItem>
                </Card>
            }
            />
        </View>
      </Container>
      );
    }
}