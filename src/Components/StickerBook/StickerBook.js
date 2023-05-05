import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Animated, Easing, Modal } from 'react-native';
import React, { useState } from 'react';
import StickerImg from '../../Images/sticker.png';
import ChemicalImg from '../../Images/chemical.svg';
import StudentBookImg from '../../Images/student-reading-book.png';
import CountImg from '../../Images/counting-svgrepo-com.svg';
import ClockImg from '../../Images/clock.png';
import AlphabetImg from '../../Images/alphabet.png';
import Icon from 'react-native-vector-icons/AntDesign';
import StickerModal from '../StickerModal/StickerModal';

export default function StickerBook({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [img1, stImg1] = useState((<ChemicalImg width={40} height={40} />));
  const [img2, stImg2] = useState((<CountImg width={40} height={40} />));
  const [img3, stImg3] = useState((<Image source={StudentBookImg} style={{width: 40, height: 40,}} />));
  const [img4, stImg4] = useState((<Image source={AlphabetImg} style={{width: 40, height: 40,}} />));
  const [img5, stImg5] = useState((<Image source={ClockImg} style={{width: 40, height: 40,}} />));



  const handleModal = (img) => {
    setModalVisible(!modalVisible);
    setModalImg(img);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sticker Book</Text>
      <View style={{flexDirection: "row", marginTop: 20,}}>
        <View style={{flexDirection: "column", width: "70%", marginRight: 20,}}>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={() => {handleModal(img1)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                        {img1}
                        <Text style={styles.texts}>
                              science 1
                        </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {handleModal(img2)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                            {img2}
                            <Text style={styles.texts}>
                                 Counting
                            </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {handleModal(img3)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                         {img3}
                        <Text style={styles.texts}>
                              Reading 2
                        </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {handleModal(img4)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                      {img4}
                      <Text style={styles.texts}>
                              Alphabet
                        </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row", marginTop: 10,}}>
             <TouchableOpacity onPress={() => {handleModal(img3)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                           {img3}
                          <Text style={styles.texts}>
                                Reading 1
                          </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {handleModal(img5)}}>
                <View>
                    <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                      {img5}
                      <Text style={styles.texts}>
                                Time
                          </Text>
                    </ImageBackground>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </View>
               {/* ========== Modal ========= */}
      {/* <Animated.View style={[styles.centeredView, {transform: [{rotate: RotateData}]}]}>
         <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    {modalImg}
                                 <ImageBackground source={StickerImg} style={styles.stickerBackground}>
                                       {props.modalImg}
                                    </ImageBackground> 
                             </TouchableOpacity>
                        </View>
                    </View>
          </Modal>
     </Animated.View>  */}

      <StickerModal  modalVisible={modalVisible} setModalVisible={setModalVisible} modalImg={modalImg}  /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcd4e8",
    height: 900,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  stickerBackground: {
    width: 80,
    height: 80,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
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
    marginTop: 20,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#81c2f7",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: -60,
  },
  texts: {
    fontSize: 14, 
    color: "#fff",
    fontWeight: 'bold', 
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    elevation: 5,
  },
  /* ===== Modal ====== */

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
})