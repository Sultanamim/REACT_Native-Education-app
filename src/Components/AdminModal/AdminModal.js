import { View, Text, TextInput, StyleSheet, Modal, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BookImage from '../../Images/book2.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function AdminModal(props) {
  const [authStates, setAuthStates] = useState({
    mode: 'login',
    inputs: {
      password: '',
    }
 }) ;

 const updateInputs = (value, name) => {
  setAuthStates({
    ...authStates,
    inputs: {
      ...authStates.inputs,
      [name]: value,
    }
  })
 }

 const handleAuth = () => {
  const password = authStates.inputs.password;
  if(password !== ""){
    if(password.length >= 6){
        props.navigation.navigate('Parent-menu');
    
    }else{
      alert("Password must at least 6 characters!")
    }
  } else {
    alert("Please Input the Password!")
  }
      
 }

  return (
    <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.adminModal}
        onRequestClose={() => {
            props.setAdminModal(!props.adminModal);
        }}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable
                        style={[styles.button, styles.buttonClose , styles.Pressable]}
                        onPress={() => props.setAdminModal(!props.adminModal)}>
                        <Text style={{color: "white", fontSize: 24,}}>&times;</Text>
                    </Pressable> 
            <View style={styles.row}>
                <Text style={styles.textStyle} >Login As Admin</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.loginView}>
                  <View style={{flexDirection: "column", width: "50%", alignItems: "flex-start"}}>
                    <Text style={styles.textStyle2}>Password for</Text>
                    <TextInput 
                       style={styles.modalInput} 
                       placeholder='Password'
                       value={authStates.inputs.password}
                       onChangeText={value => updateInputs(value, "password")}  
                       />
                  </View>
                  <View style={{flexDirection: "column", width: "40%", marginLeft: 10, paddingHorizontal: 28}}>
                      <Pressable onPress={() => {handleAuth()}}>
                        <Text style={styles.textStyle2}>Login</Text>
                        <View style={styles.svgView}>
                            <Image source={BookImage} style={styles.svgImg} />
                        </View>
                      </Pressable>
                  </View>
                </View>
            </View>
               <View style={{flexDirection: "row", marginTop: 20, marginBottom: 10,}}>
                 <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>
                <View style={{flexDirection: "column"}}>
                    <TouchableOpacity>
                        <Text style={styles.textStyle3}>Logout</Text>
                        <View style={styles.tabs1}>
                           <MaterialIcon name="logout" size={50} color="#333" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Modal>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8fe9ff",
        margin: 0,
        marginHorizontal: 5,
        paddingVertical: 10,
        padding: 0,
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#333",
      },
      row: {
        flexDirection: "row",
        justifyContent: "center",
      },
      button: {
        borderRadius: 50,
        paddingHorizontal: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#fcaeb1',
        marginLeft: 280,
        paddingBottom: 0,
        width: "15%",
        justifyContent: "center",
      },
      textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: -40,
        marginBottom: 40,
      },
      textStyle2: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginBottom: 5,
      },
      textStyle3: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 26,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: 10,
        marginBottom: 20,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      }, 
      modalInput: {
        marginVertical: 10,
        marginHorizontal: 0,
        padding: 8,
        borderWidth: 1,
        borderColor: "#333",
        flexDirection: "column",
        width: 140,
        height: 30,
        borderRadius: 15,
        color: '#333',
      },
      loginView: {
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
      },
      svgImg: {
        margin: 0,
        paddingVertical: 0,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,

      },
     svgView: {
        borderWidth: 2,
        borderColor: "#333",
        borderRadius: 10,
        paddingVertical: 3,
        marginTop: 3,
        alignItems: "center"
     },
     tabs1: {
      backgroundColor: "#fdd1fc",
      margin: 3,
      marginLeft: 5,
      marginBottom: 12,
      paddingHorizontal: 0,
      paddingVertical: 2,
      borderRadius: 5,
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#333",
  },
    
  })