import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MyContest() {
  const [data,setData] = useState(null)

  const myContest = () => {
    axios.get(`${network.serverip}myContestData`)
      .then((res) => {
        // console.log('test')
        // console.log(res.data)
        setData(res.data)
        // setState({contestDetail:res.data})
        // setcontestDetail(res.data)
      }).catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    myContest()
  }, [])

  return (
    <ScrollView>
      <View style={{alignItems:'center',justifyContent:'center',flex:1,marginBottom:60}}>
        {data?.map((item,index)=>{
          return(
            <View style={styles.container} key={index}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:15}}>{item.tournament.tournament_name}   ({item.tournament.tournament_team1} vs {item.tournament.tournament_team2})</Text>
                <Text style={{color:'green',fontSize:15}}>Contest Full</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                  <Text style={{fontWeight:'bold',fontSize:18}}>{item.contest.contest_name}</Text>
                  <Text style={{fontSize:15}}>Price : {item.contest.contest_totalprice/item.contest.contestant_size}</Text>
                  <Text style={{fontSize:15}}>Team Activatated  :  {item.Team}</Text>
                </View>
                <View>
                  <Text></Text>
                  <Text style={{fontSize:15}}>Participant</Text>
                  <Text style={{fontSize:15}}>{item.contest.contestant_size}/{item.contest.contestant_size}</Text>
                </View>
              </View>
              
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width * 0.9,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    padding: 5,
    marginVertical: 5,
    elevation: 5,
  },
  middle: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  }
});