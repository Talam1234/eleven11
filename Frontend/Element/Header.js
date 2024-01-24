import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  RefreshControl,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import NetInfo from '@react-native-community/netinfo';

export default function Header({ navigation, title }) {
  const [isOnline, setIsOnline] = useState(null);
  const [onlineHide, setOnlineHide] = useState(true)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
      // console.log(state.isConnected);
    });

    // Cleanup the event listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(()=>{
    if(isOnline)
      {
        setTimeout(()=>{
          setOnlineHide(false)
        },1000)
      }
      else{
        setOnlineHide(true)
      }
  },[isOnline])
  // console.log(navigation)
  // const [num] = useGlobalState("top");
  // console.log(isOnline,onlineHide)
  return (
    <View>
      
      {onlineHide?<View style={{backgroundColor:isOnline?'green':'red',justifyContent:'center',alignItems:'center'}}>
        {isOnline !== null ? (
          <Text style={{fontSize:15,padding:8}}>{isOnline ? 'Online' : 'Offline'}</Text>
        ) : (
          <Text>Checking connectivity...</Text>
        )}
      </View>:null}
      <View style={styles.topBarContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="#264087" />
        </TouchableOpacity>
        <View style={styles.topbarlogoContainer}>
          {/* <Image source={aktlogo} style={styles.logo} /> */}
          <Text style={styles.topBarText}>{title}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Search")
            }
          >
            {/* <Image
              style="{{padding: '0'}}"
              source={require("../assets/icons/search.png")}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate("MyWishlistScreen")
            // }
            style={{ marginHorizontal: 6 }}
          // onPress={() => navigation.navigate("cart")}
          >
            {/* <Image source={require("../assets/icons/wishlist.png")} /> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartIconContainer}
          // onPress={() =>
          //   navigation.navigate("CartScreen")
          // }
          >
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="bells" size={24} color="#264087" />
              {/* <Ionicons name="cart-outline" size={26} color="#264087"/> */}
              <View
                style={{
                  height: 12,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: "green",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 10, textAlign: "center" }}
                >
                  1
                </Text>
              </View>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  topbarlogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 25,
  },
  cartIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  topBarText: {
    fontSize: 20,
  }
});
