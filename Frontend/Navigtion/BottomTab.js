import * as React from "react";
//import {createBottomTabNavigator,createDrawerNavigator} from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View, Platform } from "react-native";

import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
  Entypo,
  MaterialIcons
} from "@expo/vector-icons";

//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import drawernav from "./CustomDrawer";
import { Dashboard } from "../Screen";

// import Profile from "../Screens/Profile";
// import Setting from "../Screens/Setting";
// import MyLeaveList from "../Leaves/MyLeaveList";
// import Notification from "../Screens/Notification";
//import CustomDrawer from './Navigation/CustomDrawer';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#264087",
        tabBarStyle: {
          height: 50,
          position: "absolute",
          bottom: Platform.OS === "ios" ? 5 : 10,
          borderRadius: 30,
          marginHorizontal: 20,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Brand"
        component={Brand}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="star" size={24} color="black" />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color} />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="wallet" size={24} color={color} />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="MyLeaveList"
        component={MyLeaveList}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-edit"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color}
            />

            
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;
