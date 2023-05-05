import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Image } from 'react-native'
import React, { useState } from 'react';
import MainImg from '../../Images/emoji-normal.svg';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Font5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import BookImg from '../../Images/book2.png';
import AdminModal from '../AdminModal/AdminModal';

export default function MainPage({route, navigation}) {
    const {imageData, names} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [adminModal, setAdminModal] = useState(false);
    const [currentView, setCurrentView] = useState('view1');

    const view1 = (
        <View style={styles.miniContents31}>
                   <View style={{flexDirection: "row"}}>
                       <View style={{flexDirection: "column",}}>
                           <Text style={{marginLeft: 0, marginRight: 20, textAlign: "center",marginTop: 20,}}>Vedios</Text>
                       </View>

                       <View style={{flexDirection: "column"}}>
                           <View style={styles.iconContent}>
                               <Font5Icon name="hand-pointer" size={20} />
                           </View>
                           <View style={styles.iconContent}>
                               <Ionicons name="play" size={20} />
                           </View>
                       </View>
                   </View>
       </View>
);

const view2 =  (
    <View style={styles.miniContents32}>
        <View style={{flexDirection: "row"}}>
            <View style={{flexDirection: "column",}}>
                <Text style={{marginLeft: 0, marginRight: 20, textAlign: "center",marginTop: 20,}}>Right</Text>
            </View>
            <View style={{flexDirection: "column"}}>
                <View style={styles.iconContent}>
                    <Ionicons name="ios-checkmark-circle-sharp" size={20} color="#28a602" />
                </View>
                <View style={styles.iconContent}>
                    <Ionicons name="play" size={20} />
                </View>
            </View>
        </View>
    </View>
   ) ;
   
    const view3 =  (
        <View style={styles.miniContents33}>
                   <View style={{flexDirection: "row"}}>
                       <View style={{flexDirection: "column",}}>
                           <Text style={{marginLeft: 0, marginRight: 20, textAlign: "center",marginTop: 20,}}>Wrong</Text>
                       </View>

                       <View style={{flexDirection: "column"}}>
                           <View style={styles.iconContent}>
                               <EntypoIcon name="circle-with-cross" size={20} color="#f51702" />
                           </View>
                           <View style={styles.iconContent}>
                               <Ionicons name="play" size={20} />
                           </View>
                       </View>
                   </View>
       </View>
);



  return (
    <View style={styles.mainPageContainer}>
      <View style={styles.mainPageContainer2}>
        <TouchableOpacity             
              onPress={() => setModalVisible(true)}
              >
            <FontIcon name="bars" size={20} style={{
                                marginLeft: 15, 
                                borderWidth: 1, 
                                borderColor: "#333", 
                                margin: 3,
                                padding: 3,
                                paddingHorizontal: 10,
                                backgroundColor: "#f7f5ad",
                                borderRadius: 5,
                                }} />
        </TouchableOpacity>
         
         <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <View style={{flexDirection: "column", width: "50%", marginRight: 5,}}>
                <MainImg style={styles.mainImg} width={200} height={250} />
                <Text style={styles.imgText}>This is just some question text, it can be a decent length</Text>
                <View style={styles.iconContent2}>
                    <Ionicons name="play" size={30} />
                </View>
            </View>
            <View style={{flexDirection: "column", width: "50%"}}>
                <TouchableOpacity onPress={() => setCurrentView('view3')}>
                        {currentView === 'view3' ? view3 : view1}
                </TouchableOpacity>
             
                <TouchableOpacity onPress={() => setCurrentView('view2')}>
                      {currentView === 'view2' ? view2 : view1}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentView('view4')}>
                      {currentView === 'view4' ? view3 : view1}   
                </TouchableOpacity>
            </View>
         </View>
      </View>

      {/* ================== Modal ================== */}
      <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Pressable
                      style={[styles.button, styles.buttonClose , styles.Pressable]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={{color: "white", fontSize: 24,}}>&times;</Text>
                </Pressable> 
                <View style={{flexDirection: "row", }}>
                    <View style={{flexDirection: "column", width: "40%", alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Sticker-book')}}>
                            <View style={{
                                    flexDirection: "row", 
                                    borderWidth: 2, 
                                    borderColor: "#333", 
                                    borderRadius: 10, 
                                    marginBottom: 3,
                                    paddingVertical: 15,
                                    paddingHorizontal: 5,
                                    width: "70%",
                                }}
                                >
                                <Icon name='arrow-top-right' size={50} style={{marginRight: -15, marginBottom: -15, marginLeft: -8}} />
                                <Ionicons name="md-star-half" size={40} style={{marginTop:  -15, marginLeft: -8}} color="#b49afc" />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.textStyleMain} >Sticker Book</Text>
                    </View>
                    <View style={{flexDirection: "column", width: "50%", alignItems: "center"}}>
                        <View>
                            {imageData}
                        </View>
                       <Text style={styles.textStyleMain2} >Student {names}</Text>
                       <View style={{flexDirection: "column", alignItems: "center"}}>
                          <TouchableOpacity
                                 onPress={() => {setAdminModal(true)}} 
                                 style={{borderWidth: 1, borderColor: "#333", padding: 5, borderRadius: 10,}}>
                             <Image source={BookImg} style={{width: 40, height: 40}} />
                          </TouchableOpacity>
                          <Text style={styles.textStyleMain3} >Switch</Text>
                          <Text style={styles.textStyleMain2} >User</Text>
                       </View>
                    </View>
                </View>
            </View>
            </View>
        </Modal>

        <AdminModal adminModal={adminModal} setAdminModal={setAdminModal} navigation={navigation} />
    </View>
            


    </View>
  )
}
const styles = StyleSheet.create({
    mainPageContainer: {
        height: 900,
        justifyContent: "flex-start",
        backgroundColor: "#8fe9ff",
    },
    mainPageContainer2: {
       marginTop: 15,
       alignItems: "flex-start"
    },
    mainImg: {
        marginTop: 20,
        marginLeft: 30,
    },
    miniContents: {
        backgroundColor: "#fffdc7",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    miniContents2: {
        backgroundColor: "#dce9f7",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    miniContents31: {
        backgroundColor: "#f7dff0",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    miniContents32: {
        backgroundColor: "#c8f5b8",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    miniContents33: {
        backgroundColor: "#f5c5c1",
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20,
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    iconContent: {
        alignSelf: "center",
        justifyContent: "space-between",
        padding: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 10,
        marginTop: 5,
        marginRight: -30,
    } ,
    iconContent2: {
        alignSelf: "center",
        justifyContent: "space-between",
        padding: 5,
        paddingHorizontal: 30,
        borderWidth: 3,
        borderColor: "#333",
        borderRadius: 15,
        marginTop: 5,
        marginRight: -30,
    } ,
    imgText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 2,
        fontSize: 20,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: 0,
        marginBottom: 10,
        marginLeft: 30,
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
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      textStyleMain: {
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
        marginTop: 0,
        marginBottom: 40,
      },
      textStyleMain2: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: 0,
        marginBottom: 20,
      },
      textStyleMain3: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center',
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        marginTop: 0,
        marginBottom: 0,
      },
})