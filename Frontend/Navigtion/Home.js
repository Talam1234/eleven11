import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawers from "./Drawer";
import CustomDrawer from "./CustomDrawer";
import BottomTabNavigator from "./BottomTab";
import { Contest, Dashboard } from "../Screen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({route}) => {
  // console.log(route)

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff",
        },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={"BottomTabNavigator"}
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name={"Dashboard"}
        component={Dashboard}
      />
      <Drawer.Screen
        name={'Contest'}
        component={Contest}
      />
      {/* <Drawer.Screen
        name={"ProductDetailScreen"}
        component={ProductDetailScreen}
      /> */}
      {/* <Drawer.Screen
        name={"MyWishlistScreen"}
        component={MyWishlistScreen}
      /> */}
      {/* <Drawer.Screen
        name={"CartScreen"}
        component={CartScreen}
      /> */}
      {/* <Drawer.Screen
        name={"MyOrderScreen"}
        component={MyOrderScreen}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
