import {
  Linking,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  EvilIcons,
  Foundation,
  SimpleLineIcons,
  Octicons,
  Entypo,
  Fontisto
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CustomDrawer = ({ navigation,route }) => {
  // console.log(route)
  const handleYesButtonPress = () => {
    // Handle the action when the user presses "Yes"
    // console.log('User pressed "Yes"');
    AsyncStorage.setItem("email", "");
    AsyncStorage.setItem("password", "");
    navigation.navigate("Login")
  };

  const handleNoButtonPress = () => {
    // The "No" button press will automatically close the alert, no need to do anything here.
  };

  const showYesNoPopup = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to proceed?',
      [
        {
          text: 'No',
          onPress: handleNoButtonPress,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: handleYesButtonPress,
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              borderColor: "white",
              borderWidth: 10,
              borderRadius: 100,
              width: 120,
              height: 120,
              elevation: 10,
            }}
          >
            <Image
              source={ require("../assets/icon.png")}
              // source={employee ? employee.emp_image : null}
              style={{ height: 100, width: 100, borderRadius: 100 }}
            />
          </View>
          <View
            style={{ alignItems: "center", marginTop: 7, marginBottom: 24 }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>User Name</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                User ID :{" "}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                #123456789
              </Text>
            </View>
          </View>
          <Text style={{ color: "gray", alignSelf: "center" }}>
            ___________________
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
            style={{ margin: 11 }}
            onPress={() =>
              navigation.navigate("BottomTabNavigator", { screen: "Dashboard" })
            }
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="view-dashboard-outline"
                  size={24}
                  color="#667085"
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#667085",
                  }}
                >
                  Dashboard
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          

          {/* <TouchableOpacity
            style={{ margin: 11 }}
            // onPress={() =>
            //   navigation.navigate("BottomTabNavigator", { screen: "Profile" })
            // }
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="profile" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#667085",
                  }}
                >
                  Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={{ margin: 11 }}
            // onPress={() =>
            //   navigation.navigate("BottomTabNavigator", { screen: "Category" })
            // }
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="category" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#667085",
                  }}
                >
                  Categories
                </Text>
              </View>
            </View>
          </TouchableOpacity> */}


          {/* <TouchableOpacity
            style={{ margin: 11 }}
            // onPress={() =>
            //   navigation.navigate("MyOrderScreen")
            // }
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="star" size={24} color="black" />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#667085",
                  }}
                >
                  My Order
                </Text>
              </View>
            </View>
          </TouchableOpacity> */}


          {/* <TouchableOpacity style={{ margin: 11 }} onPress={showYesNoPopup}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="logout"
                  size={18}
                  color="#667085"
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#667085",
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon2: {},
});
export default CustomDrawer;
