import { Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ImageBackground, Animated, Easing} from 'react-native'
import React, { Component } from 'react';
import StickerImg from '../../Images/sticker.png';
import BackgroundImg from '../../Images/background1.png';

export default class StickerModal extends Component {
    constructor(props) {
      super(props);
      this.state= {
        animatedValue: new Animated.Value(0),
      }
    }

    componentDidMount(){
      this.startRotation();
    }

    startRotation(){
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        this.state.animatedValue.setValue(0);
        this.startRotation();
      });
    }

  
render() {
  const rotateValue = this.state.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })
  const rotateValue2 = this.state.animatedValue.interpolate({
    inputRange: [0, 0],
    outputRange: ['0deg', '360deg'],
  })
  return (
    <View style={styles.centeredView}>
         <Modal
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
                this.props.setModalVisible(!this.props.modalVisible);
                    }}>
                    <Animated.View style={[styles.centeredView, {
                      transform: [{rotate: rotateValue}]
                    }]}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => this.props.setModalVisible(!this.props.modalVisible)}>
                            <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                                 {this.props.modalImg}
                                    </ImageBackground> 
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
          </Modal>
    </View>
   )
  }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'rgba(104, 6, 255, 0.23)',
      borderRadius: 50,
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
      borderWidth: 2,
      borderColor: "yellow",
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    stickerBackground: {
        width: 80,
        height: 80,
        margin: 2,
        alignItems: "center",
        justifyContent: "center",
      },
      newBackground: {
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center"
      }
  });
  