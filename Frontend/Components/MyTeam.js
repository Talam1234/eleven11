import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyTeam({id,setTeam,setplayer}) {
    const [myTeam,setmyTeam] = useState([])
    const [selectedContainer,setselectedContainer] = useState(null)

    const playerData = () => {
        axios.get(`${network.serverip}myplayersData/${id}`)
            .then((res) => {
                setmyTeam(res.data)
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        playerData()
    }, [])

    return (
        <ScrollView>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                {myTeam?.map((item,index)=>{
                    const arr = item?.player_array.split(',');
                    return(
                        <TouchableOpacity key={index} onPress={()=>{setselectedContainer(item.id) 
                            setTeam(`Team${index+1}`)
                            setplayer('1')
                        }} style={{width: '90%'}}>
                            <View style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center',backgroundColor:selectedContainer === item.id?"#fffec8":'white',marginVertical:5,borderRadius:5 }} >
                                <View>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>Team{index+1}</Text>
                                </View>
                                <View>
                                    <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                    <Text>{arr[0]}</Text>
                                </View>
                                <View>
                                    <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                                    <Text>{arr[1]}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </ScrollView>
    )
}