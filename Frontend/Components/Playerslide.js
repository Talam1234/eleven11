import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, Animated, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Playerslide({ data, id }) {
    const [selectedContainer, setselectedContainer] = useState([])
    const [isDisabled, setisDisabled] = useState(true)
    const [myArray, setmyArray] = useState([])

    console.log(myArray)

    const selectPlayer = (data, playerName) => {
        const isSelected = selectedContainer.includes(data);
        if (selectedContainer.length === 11 && !isSelected) {
            Alert.alert('Players', 'You already achieve the limit')
            setisDisabled(true)
        }
        else {
            if (isSelected) {
                // If container is already selected, remove it from the array
                setselectedContainer(selectedContainer.filter(id => id !== data));
                setmyArray(myArray.filter(item => item != playerName))
                setisDisabled(true)
            } else {
                // If container is not selected, add it to the array
                setselectedContainer([...selectedContainer, data]);
                setmyArray([...myArray, playerName])
                if(selectedContainer.length === 10)
                {
                    setisDisabled(false)
                }
            }
        }
    }

    const SavePlayer = () => {

        const string = myArray.join(',')

        const json_data = {
            array_data: string,
            t_id: id
        }
        console.log(json_data)

        axios.post(`${network.serverip}myPlayer`, json_data)
            .then((res) => {
                Alert.alert('Team',res.data.result)
                // console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        Animated.timing(progress, {
            toValue: selectedContainer.length,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [selectedContainer])

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, 11],
        outputRange: ["0%", "100%"],
    });

    const renderProgressBar = () => {
        return (
            <View
                style={{
                    width: "100%",
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: "#000000",
                }}
            >
                <Animated.View
                    style={[
                        {
                            height: 20,
                            borderRadius: 20,
                            backgroundColor: '#264087',
                        },
                        {
                            width: progressAnim,
                        },
                    ]}
                ></Animated.View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container]} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data.tournament.tournament_name}</Text>
                    <Text style={{ fontSize: 16 }}>{selectedContainer.length}/11</Text>
                </View>
                <View style={styles.middle}>
                    <View>
                        <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                        <Text>{data.tournament.tournament_team1}</Text>
                    </View>
                    <Text>Vs</Text>
                    <View>
                        <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                        <Text>{data.tournament.tournament_team2}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-around", padding: 10 }}>
                {renderProgressBar()}
            </View>
            <ScrollView style={{ padding: 10, flex: 1 }}>
                <View style={{ marginBottom: 60 }}>
                    {data?.players.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={{ paddingVertical: 5, alignItems: 'center', justifyContent: 'center' }} onPress={() => { selectPlayer(item.id, item.player_name) }}>
                                <View style={{ height: 65, width: '95%', alignItems: 'center', justifyContent: 'space-between', backgroundColor: selectedContainer.includes(item.id) ? "#fffec8" : 'white', borderRadius: 8, flexDirection: 'row', padding: 10 }}>
                                    <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                    <Text>{item.player_name}</Text>
                                    <Text>{item.player_country}</Text>
                                    <Text>{item.player_point}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
                        <TouchableOpacity disabled={isDisabled} onPress={()=>SavePlayer()}>
                            <View style={{ borderWidth: 2, borderRadius: 5, alignItems: 'center', backgroundColor: selectedContainer.length === 11 ? 'green' : '#abf7b1',padding:8 }}>
                                <Text style={{fontSize:15}}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        padding: 10,
        marginVertical: 5,
    },
    middle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    }
});