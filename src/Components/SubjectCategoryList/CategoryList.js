import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react';
import AdditionVertical from '../../Images/AdditionVertical-2.svg';
import MathImg from '../../Images/math.svg';
import HistoryImg from '../../Images/history-1.svg';
import MinusIcon from 'react-native-vector-icons/AntDesign';

export default function CategoryList() {

  return (
    <View style={styles.categoryContainer}>
              <View style={styles.flatlistContent}>
                <View style={styles.imgContent}>
                   <AdditionVertical style={styles.addverImg} width={40} height={40} />
                </View>
                <View style={styles.secContainer}>
                  <Text style={styles.mainText}>Addition Vertical</Text>
                  <Text style={styles.normalText}>15 out of 24 correct</Text>
                  <Text style={styles.normalText}>70% last 10</Text>
                </View>
                <View style={styles.secContainer2}>
                  <Text style={styles.normalText4}>In Progress</Text>
                  <Text style={styles.normalText5}>Started 18/03/23</Text>
                </View>
              </View>

              <View style={styles.flatlistContent2}>
                <View style={styles.imgContent}>
                   <MathImg style={styles.addverImg} width={40} height={40} />
                </View>
                <View style={styles.secContainer}>
                  <Text style={styles.mainText}>Math</Text>
                  <Text style={styles.normalText}>Terms & equations</Text>
                  <Text style={styles.normalText}>Plus, minus, divide & multiply</Text>
                </View>
                <View style={styles.secContainer2}>
                  <Text style={styles.normalText3}>Reassigned</Text>
                  <Text style={styles.normalText5}>Started 10/02/23</Text>
                </View>
              </View>

              <View style={styles.flatlistContent}>
                <View style={styles.imgContent}>
                   <HistoryImg style={styles.addverImg} width={40} height={40} />
                </View>
                <View style={styles.secContainer}>
                  <Text style={styles.mainText}>History</Text>
                  <Text style={styles.normalText}>Ethnic & Social Development</Text>
                  <Text style={styles.normalText}>50% out off 30</Text>
                </View>
                <View style={styles.secContainer2}>
                  <Text style={styles.normalText2}>Completed</Text>
                  <Text style={styles.normalText5}>Started 17/03/23</Text>
                </View>
              </View>

              <View style={styles.flatlistContent3}>
                <View style={styles.imgContent}>
                   <MinusIcon name="minuscircleo" size={40} color="#333" />
                </View>
                <View style={styles.secContainer}>
                  <Text style={styles.mainText}>Substraction</Text>
                  <Text style={styles.normalText}>18 out of 36 correct</Text>
                  <Text style={styles.normalText}>60% last 10</Text>
                </View>
                <View style={styles.secContainer2}>
                  <Text style={styles.normalText3}>Reassigned</Text>
                  <Text style={styles.normalText5}>Started 10/02/23</Text>
                </View>
              </View>
          
    </View>
  )
}
const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 25,
    marginLeft: 15,
    padding: 0,
    flexDirection: "column",
    alignItems: "center",
  },
 flatlist: {
     margin: 0,
     padding: 5,
 },
 flatlistContent: {
  backgroundColor: "#fff",
  marginTop: 10,
  padding: 5,
  borderRadius: 10,
  flexDirection: "row",
  paddingVertical: 15,
 },
 flatlistContent2: {
  backgroundColor: "#faf8c0",
  marginTop: 10,
  padding: 5,
  borderRadius: 10,
  flexDirection: "row",
  paddingVertical: 15,
 },
 flatlistContent3: {
  backgroundColor: "rgba(181, 223, 245, 0.95)",
  marginTop: 10,
  padding: 5,
  borderRadius: 10,
  flexDirection: "row",
  paddingVertical: 15,
  paddingHorizontal: 17,
 },
 imgContent: {
  alignItems: "flex-start",
  marginTop: 15,
 },
 addverImg: {
   padding: 0,

 },
 mainText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'left',
  margin: 2,
  padding: 3,
  fontSize: 14,
  alignItems: 'center',
  textShadowColor: '#000',
  textShadowOffset: {
    width: 0,
    height: 2,
  },
  textShadowRadius: 4,
  elevation: 5,
 },
 secContainer: {
  flexDirection: "column",
  justifyContent: "center",
  margin: 5,
  marginLeft: 5,
  width: "60%",
 },
 secContainer2: {
  flexDirection: "column",
  justifyContent: "center",
  margin: 5,
  marginLeft: 8,
  width: "30%",
 },
 normalText: {
  fontSize: 10,
  fontWeight: 800,
  color: "#333",
  textAlign: "left",
 },
 normalText2: {
  fontSize: 10,
  fontWeight: 800,
  color: "#02b010",
  textAlign: "left",
 },
 normalText3: {
  fontSize: 10,
  fontWeight: 800,
  color: "#fa9725",
  textAlign: "left",
 },
 normalText4: {
  fontSize: 10,
  fontWeight: 800,
  color: "#b02740",
  textAlign: "left",
 },
 normalText5: {
  fontSize: 10,
  fontWeight: 800,
  color: "#727273",
  textAlign: "left",
 },
})