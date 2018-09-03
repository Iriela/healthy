import React from 'react';
import { StyleSheet } from "react-native";
import {
    Button,
    Text,
    Container,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    View
} from "native-base";
export default class DailyChallenge extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            steps : 0
        }
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            //onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Daily Challenge</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Text>Content for daily challenge</Text>
                </Content>
            </Container>
        );
    }
}