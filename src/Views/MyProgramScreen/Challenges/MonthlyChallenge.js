import React from 'react';
import {
    Container,
    Content,
    Accordion,
    Header,
    Left,
    Button,
    Body,
    Title,
    Right,
    View,
    Icon
} from "native-base";
import firebase from '../../../Config/app_config'

export default class MonthlyChallenge extends React.Component {
    render() {
        let dataArray = [
            { title: "Day 1", content: "Lorem ipsum" },
            { title: "Day 2", content: "Lorem ipsum" },
            { title: "Day 3", content: "Lorem ipsum" },
            { title: "Day 4", content: "Lorem ipsum" },
            { title: "Day 5", content: "Lorem ipsum" },
            { title: "Day 6", content: "Lorem ipsum" },
            { title: "Day 7", content: "Lorem ipsum" },
            { title: "Day 8", content: "Lorem ipsum" },
            { title: "Day 9", content: "Lorem ipsum" },
            { title: "Day 10", content: "Lorem ipsum" },
            { title: "Day 11", content: "Lorem ipsum" },
            { title: "Day 12", content: "Lorem ipsum" },
            { title: "Day 13", content: "Lorem ipsum" },
            { title: "Day 14", content: "Lorem ipsum" },
            { title: "Day 15", content: "Lorem ipsum" },
            { title: "Day 16", content: "Lorem ipsum" },
            { title: "Day 17", content: "Lorem ipsum" },
            { title: "Day 18", content: "Lorem ipsum" },
            { title: "Day 19", content: "Lorem ipsum" },
            { title: "Day 20", content: "Lorem ipsum" },
            { title: "Day 21", content: "Lorem ipsum" },
            { title: "Day 22", content: "Lorem ipsum" },
            { title: "Day 23", content: "Lorem ipsum" },
            { title: "Day 24", content: "Lorem ipsum" },
            { title: "Day 25", content: "Lorem ipsum" },
            { title: "Day 26", content: "Lorem ipsum" },
            { title: "Day 27", content: "Lorem ipsum" },
            { title: "Day 28", content: "Lorem ipsum" },
            { title: "Day 29", content: "Lorem ipsum" },
            { title: "Day 30", content: "Lorem ipsum" }];
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
                        <Title>Monthly Challenge</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Accordion
                        dataArray={dataArray}
                        icon="add"
                        expandedIcon="remove"
                        iconStyle={{ color: "green" }}
                        expandedIconStyle={{ color: "red" }}
                    />
                </Content>
            </Container>
        );
    }
}