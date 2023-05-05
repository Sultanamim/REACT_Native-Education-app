import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react';
import SideImg from '../../Images/emoji-normal.svg';
import Login from '../../Components/Login/Login';
import RegModal from '../../Components/RegModal/RegModal';

export default function Home(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [ regModal, setRegModal] = useState(false);
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.contents} >
        <View style={styles.textImageContent}>
          <View style={styles.colText}>
            <Text style={styles.headingTexts}>Education App</Text>
            <Text style={styles.baseText}>Here is some pitch and it will change and go along with the animated graphics.</Text>
          </View>
          <SideImg style={styles.svgImg} height={120} width={150} />
          </View>
        <View style={styles.btnContent}>
          <TouchableOpacity 
             style={styles.btnContainer1} 
             onPress={() => setModalVisible(true)}
            >
             <Text style={styles.button1}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
               style={styles.btnContainer2}
               onPress={() => setRegModal(true)}
          >
             <Text style={styles.button1}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnContainer3}>
             <Text style={styles.button1}>More..</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Login modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation} />
      <RegModal regModal={regModal} setRegModal={setRegModal} navigation={props.navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
    HomeContainer: {
        backgroundColor: "#8fe9ff",
        backgroundSize: "cover",
        marginVertical: 0,
        marginHorizontal: 0,
        paddingVertical: 30,
        paddingHorizontal: 5,
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    contents: {
      margin : 20,
      marginTop: 40,
      padding: 15,
      textAlign: "left",
    },
    colText: {
       flexDirection: "column",
       width: "60%",
    },
    headingTexts: {
      fontSize: 26,
      fontWeight: 800,
      marginBottom: 2,
      padding: 10, 
    },
    baseText: {
      fontSize: 18,
      fontWeight: 500,
      marginRight: 10,
      padding: 5,
      textAlign: "left",
      justifyContent: "center",
      alignItems: 'center',
      width: "100%",
    },
    button1: {
      fontSize: 16,
      color: "#333",
      alignSelf: "center",
    },
    btnContent:{
      flexDirection: "row",
      width: '100%',
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 20,
    },
    btnContainer1: {
      flexDirection: "row",
      width: 120,
      height: 50,
      paddingVertical: 5,
      marginVertical: 5,
      backgroundColor: "#06bbc7",
      borderRadius: 5,
      marginTop: 40,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#333",
    },
    btnContainer2: {
      flexDirection: "row",
      width: 120,
      height: 50,
      paddingVertical: 5,
      marginVertical: 5,
      backgroundColor: "#92f79f",
      borderRadius: 5,
      marginTop: 40,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#333",
      marginRight: 10,
    },
    btnContainer3: {
      flexDirection: "row",
      width: 80,
      height: 50,
      paddingVertical: 5,
      marginVertical: 5,
      backgroundColor: "#f9d4fa",
      borderRadius: 5,
      marginTop: 40,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#333",
    },
    textImageContent: {
      flexDirection: "row",
      margin: 2,
      padding: 10,
    },
    svgImg: {
      marginTop: 8,
      paddingVertical: 3,
      justifyContent: "space-around",
      marginRight: 10,
      marginLeft: 20,
    }
  })