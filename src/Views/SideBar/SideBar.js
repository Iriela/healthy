import React from "react";
import { ScrollView, Image } from "react-native";
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
  View
} from "native-base";
import { DrawerItems, SafeAreaView } from "react-navigation";

const SideBar = (props) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
    <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />
      <View 
        style={{
          marginTop: 100
        }}>
      <DrawerItems
       {...props} 
      />
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default SideBar;