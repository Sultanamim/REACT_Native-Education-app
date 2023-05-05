import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import StudentBookImg from '../../Images/history-1.svg';

export default function History(props) {
  const img = <StudentBookImg width={50} height={50} />;
 

  return (
    <View style={styles.historyContainer}>
      <View style={styles.headerContent}>
        <Text style={styles.text2}>Social Studies</Text>
        <TouchableOpacity style={styles.backButton2}>
           <Icon name="download" size={40} color="#333" />
           <Text style={styles.text1}>Download</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content1}>
         <View style={styles.historyRow}>
             <StudentBookImg style={styles.historyRowImg} width={50} height={50} />
             <Text style={styles.text3}>This is some question text. It can be a decent length. When it is long it will shrink.</Text>
             <Text style={styles.text4}>Answer text_ This is what the student answered.</Text>
         </View>
         <View style={styles.historyRow}>
             <StudentBookImg style={styles.historyRowImg} width={50} height={50} />
             <Text style={styles.text3}>This is some question text. It can be a decent length. When it is long it will shrink.</Text>
             <Text style={styles.text4}>Answer text_ This is what the student answered.</Text>
         </View>
         <View style={styles.historyRow}>
             <StudentBookImg style={styles.historyRowImg} width={50} height={50} />
             <Text style={styles.text3}>This is some question text. It can be a decent length. When it is long it will shrink.</Text>
             <Text style={styles.text4}>Answer text_ This is what the student answered.</Text>
         </View>
         <View style={styles.historyRow}>
             <StudentBookImg style={styles.historyRowImg} width={50} height={50} />
             <Text style={styles.text3}>This is some question text. It can be a decent length. When it is long it will shrink.</Text>
             <Text style={styles.text4}>Answer text_ This is what the student answered.</Text>
         </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  historyContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: 900,
    alignItems: "flex-start",
    marginLeft: 10,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backButton: {
    backgroundColor: "rgba(249, 201, 242, 0.92)",
    height: "auto",
    margin: 3,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 17,
    paddingVertical: 2,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  backButton2: {
    backgroundColor: "#bdfc56",
    height: "auto",
    margin: 3,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  text1: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    fontSize: 14,
    alignItems: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    elevation: 5,
    flexDirection: "column",
  },
  text2: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fcd808",
    marginTop: 25,
    marginLeft: 15,
    width: "50%",
    textAlign: "center",
  },
  text3: {
    fontSize: 12,
    textAlign: "left",
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    borderRightColor: "#8a918c",
    borderRightWidth: 1,
  },
  text4: {
    fontSize: 12,
    textAlign: "left",
    margin: 10,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  content1: {
    margin: 0,
    marginRight: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "orange",
    padding: 5,
    width: "100%"
  },
  historyRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#8a918c"
  },
  historyRowImg: { 
     margin: 5,
     marginTop: 10,
     padding: 5,
  },
})