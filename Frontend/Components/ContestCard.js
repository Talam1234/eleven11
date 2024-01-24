import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ContestCard({ data,id,team,setTeam }) {
  console.log(team)
  const objectArray = Object.entries(data);

  const func = (cid)=>{
    const data = {
      t_id : id,
      c_id : cid,
      team : team
    }
    // console.log(data)
    if(team)
    {
      axios.post(`${network.serverip}myContest`,data)
        .then((res)=>{
          console.log(res.status)
          if(res.status === 200)
          {
            setTeam(null)
            Alert.alert('Contest Created','Go to myContest to see active contest')
          }
          else{
            Alert.alert('Contest not Created','Please try after some time')
          }
        })
        .catch((error)=>{
          console.error(error)
        })
    }
    else{
      Alert.alert('Team','Please Select a team')
    }
  }
  // console.log(objectArray)
  return (
    <View style={{ alignItems: 'center' }}>
      {
        objectArray.map((item,index) => {
          // console.log(item)
          return(
            <View key={index}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>{item[0]}</Text>
              {item[1].map((item,index) => {
                return (
                  <View style={styles.container} key={index}>
                    <Text>{item.contest_name}</Text>
                    <Text style={styles.font}>Rs. {item.contest_totalprice}</Text>
                    <View style={styles.middle}>
                      <Text style={styles.font}>{item.contestant_size}</Text>
                      <TouchableOpacity style={{backgroundColor:"red",padding:5,borderRadius:8}} onPress={()=>  func(item.id)}>
                        <Text style={[styles.font,{color:'white'}]}>Rs. {item.contest_totalprice/item.contestant_size}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })}
            </View>
          )
        })
      }
    </View>
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
    padding: 10,
    justifyContent: 'space-between',
  },
  font: {
    fontSize: 20,
    color:'#264087'
  }
});