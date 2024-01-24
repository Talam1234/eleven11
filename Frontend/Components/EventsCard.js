import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function EventsCard({ data, navigation }) {
  return (
    
    <View style={{ alignItems: 'center' }}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => { navigation.navigate('Contest', { data: item.tournmaent_id }) }}>
            <View style={styles.container} >
              <Text>{item.tournament_name}</Text>
              <View style={styles.middle}>
                <View>
                  <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                  <Text>{item.tournament_team1}</Text>
                </View>
                <Text>Vs</Text>
                <View>
                  <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, borderRadius: 50 }} />
                  <Text>{item.tournament_team2}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )
      })}
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
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  }
});