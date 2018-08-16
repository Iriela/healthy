import React from "react";
import {
    Button,
    Icon,
    Right,
    Title,
    Container,
    Header,
    Left,
    Content
  } from "native-base";
export default class HomeScreen extends React.Component {
    render() {
        return(
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
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>

                </Content>
            </Container>
        );
    }
}
