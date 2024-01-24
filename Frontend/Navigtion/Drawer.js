import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';


// import Dashboard from '../Screens/Dashboard';

// import BottomTabNavigator from './BottomTabNavigator';
// import BottomTab from '../components/BottomNavigation';
// import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#4f4f4f',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{ color: '#fff' }}>Home</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
        headerShown: false,
      }}
    //   drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={'BottomTabNavigator'}
        component={Home}
        options={{
          headerShown: false,
          drawerLabel: 'Home Screen',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Home'}
        component={Home}
        options={{
          // drawerLabel: 'My Rewards Screen',
          drawerIcon: ({ focused, size, color }) => (
            <View style={{ flexDirection: "row", }}>
              <MaterialCommunityIcons name="firewire" color={color} size={size} style={{}} />
              <Text>My Rewards Screen</Text>
              <MaterialCommunityIcons name="firewire" color={color} size={size} />
            </View>
          ),
        }}
      />
      {/* <Drawer.Screen
        name={'MyWishlistScreen'}
        component={MyWishlistScreen}
        options={{
          drawerLabel: 'Locations Screen',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="location-enter"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;
