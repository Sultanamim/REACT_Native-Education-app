import { View, Text, TextInput, StyleSheet, Modal, Alert, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import BookImage from '../../Images/book2.png';

const  Login = props => {
   const [authStates, setAuthStates] = useState({
      mode: 'login',
      inputs: {
        email: '',
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
   // props.navigation.navigate('Parent-menu');

      if(email !== "" && password  !== ""){
        if(re.test(email)){
          if(password.length >= 6){
            props.navigation.navigate('Parent-menu');
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
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                 <Pressable
                      style={[styles.button, styles.buttonClose , styles.Pressable]}
                      onPress={() => props.setModalVisible(!props.modalVisible)}>
                      <Text style={{color: "white", fontSize: 24,}}>&times;</Text>
                    </Pressable> 
            <View style={styles.row}>
                <Text style={styles.textStyle} >Sign in</Text>
            </View>
             <View style={styles.row}>
                <View style={styles.loginView}>
                  <TextInput 
                       style={styles.modalInput} 
                       placeholder='Email' 
                       value={authStates.inputs.email} 
                       onChangeText={value => updateInputs(value, "email")}
                       />
                  <TextInput 
                       style={styles.modalInput} 
                       placeholder='Password'
                       value={authStates.inputs.password}
                       onChangeText={value => updateInputs(value, "password")} 
                     />
                  <Pressable onPress={() => {handleAuth()}}>
                      <View style={styles.row}>
                          <Text style={styles.textStyle2} >Login</Text>
                      </View>
                      <View style={styles.svgView}>
                           <Image source={BookImage} style={styles.svgImg}  />
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

export default Login;

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
      marginLeft: 250,
      paddingBottom: 0,
      width: "15%",
      justifyContent: "center",
    },
    textStyle: {
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
      marginTop: 10,
      marginBottom: 0,
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
      width: 250,
      height: 34,
      borderRadius: 30,
      color: '#333',
    },
    loginView: {
      marginHorizontal: 2,
      paddingVertical: 3,
      paddingHorizontal: 0,
      alignItems: 'center',
      justifyContent: "center",
    },
    svgImg: {
      width: 60,
      height: 60,
      margin: 0,
      paddingVertical: 3,
      marginHorizontal: 5,
      justifyContent: "space-around",
      borderWidth: 1,
    },
   svgView: {
      width: "30%",
      borderWidth: 2,
      borderColor: "#05bffc",
      borderRadius: 20,
      paddingVertical: 3,
      marginTop: 3,
   },
})