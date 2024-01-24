import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Element/Header'
import { ContestCard, Playerslide } from '../Components'
import axios from 'axios'
import MyTeam from '../Components/MyTeam'

export default function Contest({ navigation, route }) {
    const tournamentId = route?.params?.data
    console.log(tournamentId)
    const [contestDetail, setcontestDetail] = useState(null)
    const [playerDetail, setplayerDetail] = useState(null)
    const [player, setplayer] = useState('1')
    const [team,setTeam] = useState(null)

    const ContestApi = () => {
        // console.log(`${network.serverip}contestData`)
        axios.get(`${network.serverip}contestData`)
            .then((res) => {
                setcontestDetail(res.data)
            }).catch((error) => {
                console.error(error);
            })

        axios.get(`${network.serverip}playersData/${tournamentId}`)
            .then((res) => {
                setplayerDetail(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    // console.log(contestDetail,Heading)

    useEffect(() => {
        ContestApi();
    }, [])
    return (
        <View style={{flex:1}}>
            <StatusBar hidden={true} />
            <Header navigation={navigation} title={"Contest"}></Header>
            {contestDetail && player === '1' ? <ContestCard data={contestDetail} id={tournamentId} team={team} setTeam={setTeam}/> : (player === '2' ? <Playerslide data={playerDetail} id={tournamentId} /> : (player === '3'?<MyTeam id={tournamentId} setTeam={setTeam} setplayer={setplayer}/>:null))}
            <View style={{ alignItems: 'center' }}>
                <View style={{ bottom: 25, position: 'absolute', flexDirection: 'row', backgroundColor: 'black', borderRadius: 15 }}>
                    <TouchableOpacity onPress={() => { setplayer('1') }}>
                        <View style={{ padding: 10 }}>

                            <Text style={{ color: 'white' }}>Contest</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>

                        <Text style={{ color: 'white' }}>|</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setplayer('2') }}>

                        <View style={{ padding: 10 }}>

                            <Text style={{ color: 'white' }}>Create Team</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center' }}>

                        <Text style={{ color: 'white' }}>|</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setplayer('3') }}>

                        <View style={{ padding: 10 }}>

                            <Text style={{ color: 'white' }}>My team</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}