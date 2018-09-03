import React, { Component } from "react";
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
    Icon,
    Text
} from "native-base";
import firebase from '../../../Config/app_config'
let challengesRef = firebase.database().ref('/challenges/weekly');
export default class WeeklyChallenge extends React.Component {
    constructor() {
        super();
        this.state = {
            challenges: [],
            challengesStatus: []
        };
        this._renderHeader = this._renderHeader.bind(this);
        this._renderContent = this._renderContent.bind(this);
    }

    componentWillMount() {
        let userID = firebase.auth().currentUser.uid;
        let ref = `/userdata/${userID}/challenges/weekly/completed`;

        console.debug('url for get ref =>>>>>', ref);

        let statusWeeklyChallenges = firebase.database().ref(ref);
        challengesRef.once('value').then(snapshot => {
            // snapshot.val() is the dictionary with all your keys/values from the '/store' path
            console.debug('challenges value', this.snapshotToArray(snapshot));
            //this.setState({ challenges: this.snapshotToArray(snapshot) })
            this.setState({ challenges: this.snapshotToArray(snapshot) })
        });
        statusWeeklyChallenges.once('value').then(snapshot => {
            console.debug('challengesStatus value', this.snapshotToArray(snapshot));
            this.setState({ challengesStatus: this.snapshotToArray(snapshot) })

            console.debug('challengeStatus in state : +++++++++++++++++', this.state.challengesStatus);
        });
    }

    snapshotToArray = (snapshot) => {
        var returnArr = [];

        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            //item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };

    _renderHeader(dataArray, expanded) {
        let index = this.state.challenges.findIndex(x => x.title == dataArray.title);
        //console.debug('data in header: ///// <dataArray> ', dataArray);
        //console.debug('index of data header in array <<<<<', index);
        let isCurrentDayInArrayDone = false;
        if (index != null) {
            // check if current day is already done by the user
            isCurrentDayInArrayDone = this.state.challengesStatus[index];
            //console.debug('Current value of index ', index);
            //console.debug('Zany le izy ry mainty e ', this.state.challengesStatus);
        }

        return (
            <View
                style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: isCurrentDayInArrayDone ? "#A9DAD6" : "#FFFFFF"
                }}
            >
                <Text style={{ fontWeight: "600" }}>
                    {" "}{dataArray.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }

    _isFirstOccurenceForUnfinishedChallenge(){

    }    

    _renderContent(dataArray) {
        let index = this.state.challenges.findIndex(x => x.title == dataArray.title);
        let firstIndexOfUnfinishedChallenge = this.state.challengesStatus.indexOf(false);
        let shouldShowStartButton = firstIndexOfUnfinishedChallenge === index;
        console.debug('index ', index);
        console.debug('firstIndexOfUnfinishedChallenge', firstIndexOfUnfinishedChallenge);
        console.debug('shouldShowStartButton', shouldShowStartButton);
        let isCurrentDayInArrayDone = false;
        if (index != null) {
            isCurrentDayInArrayDone = this.state.challengesStatus[index];
        }

        return (
            <View
                style={{
                    backgroundColor: "#e3f1f1",
                    padding: 10
                }}>
                <Text>
                    {dataArray.content}
                </Text>
                {
                    !isCurrentDayInArrayDone && shouldShowStartButton ?
                        <Button bordered success
                            style={{
                                padding: 10,
                                alignSelf: "center"
                            }}>
                            <Text>Start</Text>
                        </Button> 
                        : null
                }

            </View>
        );
    }
    render() {
        let dataArray = this.state.challenges;
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
                        <Title>Weekly Challenge</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder style={{ backgroundColor: "white" }}>
                    <Accordion
                        dataArray={dataArray}
                        animation={true}
                        expanded={true}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                    <Text>
                        {this.state.challengesStatus}
                    </Text>

                </Content>
            </Container>
        );
    }
}
