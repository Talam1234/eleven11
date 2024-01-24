import { View, Text, StatusBar, Dimensions, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Element/Header'
import { ContestCard, DashboardHeading, EventsCard, MyContest } from '../Components'
import { network } from '../Constant'
import axios from 'axios'

const Headings = [
  {
    Topic: "Tournament",
    id: 1
  },
  {
    Topic: "myContest",
    id: 2
  }
]

// let tournamentId = null;

export default function Dashboard({ navigation }) {
  // const [state,setState] = useState({Heading:1,contestDetail:null})
  const [Heading, setHeading] = useState(1)
  const [tournament, setTournament] = useState(null)
  // const [contestDetail,setcontestDetail] = useState(null)

  const ContestApi = () => {
    axios.get(`${network.serverip}tournamentData`)
      .then((res) => {
        // console.log('test')
        // console.log(res.data)
        setTournament(res.data)
        // setState({contestDetail:res.data})
        // setcontestDetail(res.data)
      }).catch((error) => {
        console.error(error);
      })
  }

  // console.log(contestDetail,Heading)

  useEffect(() => {
    ContestApi();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Header navigation={navigation} title={"Dashboard"}></Header>

      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Headings}
            renderItem={(item, index) => {
              // console.log(item)
              return (
                <TouchableOpacity style={{ marginBottom: 10 }} key={index} onPress={() => { setHeading(item.item.id) }}>
                  <DashboardHeading
                    title={item.item.Topic}
                  ></DashboardHeading>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View >
            {Heading === 1 && tournament ? <EventsCard data={tournament} navigation={navigation} /> : (Heading === 2 ?<MyContest/>:null)}
          </View>
        </ScrollView>

      </View>


    </View>
  )
}