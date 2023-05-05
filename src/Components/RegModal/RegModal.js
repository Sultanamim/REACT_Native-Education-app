import { View, Text, TextInput, StyleSheet, Modal, Alert, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import BookImage from '../../Images/book2.png';

export default function RegModal(props) {
  const [authStates, setAuthStates] = useState({
    mode: 'login',
    inputs: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    }
 }) ;

 const re = /\S+@\S+\.\S+/;


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
  const email = authStates.inputs.email;
  const password = authStates.inputs.password;
  const name = authStates.inputs.name;
  const confirmPassword = authStates.inputs.confirmPassword;
 // props.navigation.navigate('Parent-menu');

    if(email !== "" && password  !== "" && confirmPassword !=="" && name !== ""){
      if(re.test(email)){
        if(password.length >= 6){
          if(password === confirmPassword){
            props.navigation.navigate('Parent-menu');
          } else {
            alert("Password fields dosen't match!")
          }
         
        }else{
          alert("Password must at least 6 characters!")
        }

      }else {
      alert("Invalid email!")
      }
    } else {
     alert("Input all the fields!");
    }

 }
  return (
    <View style={styles.containerReg}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.regModal}
        onRequestClose={() => {
            props.setRegModal(!props.regModal);
        }}>
        <View style={styles.centeredViewReg}>
            <View style={styles.modalViewReg}>
                <Pressable
                        style={[styles.buttonReg, styles.buttonCloseReg , styles.PressableReg]}
                        onPress={() => props.setRegModal(!props.regModal)}>
                        <Text style={{color: "white", fontSize: 24,}}>&times;</Text>
                    </Pressable>
            <View style={styles.rowReg}>
                <Text style={styles.textStyleReg} >Register</Text>
            </View>
            <View style={styles.rowReg}>
                <View style={styles.loginViewReg}>
                    <TextInput 
                        style={styles.modalInputReg} 
                        placeholder='Email'
                        value={authStates.inputs.email} 
                        onChangeText={value => updateInputs(value, "email")} 
                        />
                    <TextInput 
                        style={styles.modalInputReg} 
                        placeholder='Name'
                        value={authStates.inputs.name}
                        onChangeText={value => updateInputs(value, "name")} 
                       />
                    <TextInput 
                        style={styles.modalInputReg} 
                        placeholder='Password'
                        value={authStates.inputs.password}
                        onChangeText={value => updateInputs(value, "password")}  
                        />
                    <TextInput 
                        style={styles.modalInputReg} 
                        placeholder='Confirm password'
                        value={authStates.inputs.confirmPassword}
                        onChangeText={value => updateInputs(value, "confirmPassword")}  
                        />
                    <Pressable onPress={() => {handleAuth()}}>
                    <Text style={styles.textStyleReg2} >Register</Text>
                    <View style={styles.svgViewReg}>
                        <Image source={BookImage} style={styles.svgImgReg} />
                    </View>
                    </Pressable>
                </View>
            </View>
            </View>
        </View>
        </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    containerReg: {
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
      centeredViewReg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalViewReg: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 45,
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
      rowReg: {
        flexDirection: "row",
        justifyContent: "center",
      },
      buttonReg: {
        borderRadius: 50,
        paddingHorizontal: 10,
        elevation: 2,
      },
      buttonOpenReg: {
        backgroundColor: '#F194FF',
      },
      buttonCloseReg: {
        backgroundColor: '#fcaeb1',
        marginLeft: 250,
        paddingBottom: 0,
        width: "15%",
        justifyContent: "center",
      },
      textStyleReg: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 36,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: -50,
        marginBottom: 40,
      },
      textStyleReg2: {
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
        marginTop: 10,
        marginBottom: 5,
      },
      modalTextReg: {
        marginBottom: 15,
        textAlign: 'center',
      }, 
      modalInputReg: {
        marginVertical: 10,
        marginHorizontal: 0,
        padding: 8,
        borderWidth: 1,
        borderColor: "#333",
        flexDirection: "column",
        width: 250,
        height: 34,
        borderRadius: 30,
        color: '#333',
      },
      loginViewReg: {
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: "center",
      },
      svgImgReg: {
        margin: 0,
        paddingVertical: 3,
        marginHorizontal: 5,
        justifyContent: "space-around",
        borderWidth: 1,
        width: 50,
        height: 50,
      },
     svgViewReg: {
        width: "30%",
        borderWidth: 2,
        borderColor: "#05bffc",
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 3,
     },
  })