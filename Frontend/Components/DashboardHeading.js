import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DashboardHeading({ title }) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 8, margin: 5, backgroundColor: 'white', borderRadius: 8 }
})