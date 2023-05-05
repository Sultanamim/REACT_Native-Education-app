import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListItem() {
  return (
    <View style={styles.listContainer}>
      <Text>ListItem 1</Text>
      <Text>ListItem 2</Text>
      <Text>ListItem 3</Text>
      <Text>ListItem 4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: "#fff",
        color: "#333",
        textAlign: "center",
        alignItems: "center",
    }
})