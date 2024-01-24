import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { CartScreen, Category, CheckoutScreen, Dashboard, ForgetPasswordScreen, Login, MyAccountScreen, MyOrderDetailScreen, MyOrderScreen, MyWishlistScreen, OrderConfirmScreen, ProductDetailScreen, Profile, Search, SignupScreen, UpdatePasswordScreen, Wallet,CashfreeCheckoutScreen} from "../screens";
import Home from './Home';
import { Contest, Dashboard } from "../Screen";
import Header from "../Element/Header";
// import WebViewScreen from "../screens/WebViewScreen";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Contest" component={Contest} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
