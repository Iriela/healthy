import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Icon, Button, Left, Body, Right, Switch, Title } from 'native-base';
export default class MyProgram extends Component {
    constructor(props) {
        super(props);
    }
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
                <Content>
                    <ListItem icon
                        onPress={() => this.props.navigation.navigate("Challenge")}
                    >
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="trophy" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Challenges</Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>

        );
    }
}