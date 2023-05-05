import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import BoyImg from '../../Images/boy-svgrepo-com-1.svg';
import StudentProfile from '../StudentProfile/StudentProfile';
import GirlImg from '../../Images/pngegg.png';
import ChemicalImg from '../../Images/chemical.svg';
import StudentBookImg from '../../Images/student-reading-book.png';
import HistoryImg from '../../Images/history-2.png';
import CountImg from '../../Images/counting-svgrepo-com.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function ParentMenu({navigation}) {
    const [img1, setImg1] = useState({id: 1,image: (<BoyImg width={70} height={70} />)});
    const [img2, setImg2] = useState({id: 1,image: (<Image source={GirlImg} style={styles.girlImg} />)});
    const [img3, setImg3] = useState({id: 1,image: (<Image source={StudentBookImg} style={{width: 30, height: 30}} />)});
    const [img4, setImg4] = useState({id: 1,image: (<ChemicalImg width={30} height={30} />)});
    const [img5, setImg5] = useState({id: 1,image: (<CountImg width={30} height={30} />)});
    const [img6, setImg6] = useState({id: 1,image: (<Image source={HistoryImg} style={{width: 30, height: 30}} />)});


  return (
    <SafeAreaView style={styles.parentMenuContainer}>
      <Text
           style={{
            fontSize: 24, 
            color: "#fff", 
            fontWeight: 700, 
            textAlign: "center", 
            marginTop: 20,}}
      >Admin-Students</Text>
      <View style={styles.menuContent}>
          <View style={{width: "70%", flexDirection: "column"}}>

                <TouchableOpacity 
                      style={styles.subjectList} 
                      onPress={() => {navigation.navigate('Student-profile', 
                                     {
                                      imageData: img1.image,
                                      names: "Marcus",
                                      info: {}
                                      }
                          )}}
                  >
                    <View style={{flexDirection: "column",width: "30%",}}>
                        {img1.image}
                        <Text style={styles.nameText}>Marcus</Text>
                    </View>
                    <View style={styles.menuContent2}>
                       <View style={{flexDirection: "row",backgroundColor: "#bcfc88", borderRadius: 20,padding: 3, marginleft: 5, marginBottom: 4}}>
                          {img4.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                        <View style={{flexDirection: "row",backgroundColor: "#cfd4cb", borderRadius: 20,padding: 3, marginleft: 5,marginTop: 4}}>
                          {img5.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                    </View>
                    <View style={styles.menuContent2}>
                       <View style={{flexDirection: "row",backgroundColor: "#bcfc88", borderRadius: 20,padding: 3, marginleft: 5, marginBottom: 4}}>
                          {img6.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                        <View style={{flexDirection: "row",backgroundColor: "#cfd4cb", borderRadius: 20,padding: 3, marginleft: 5,marginTop: 4}}>
                          {img3.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.subjectList} onPress={() => {navigation.navigate('Student-profile', {imageData: img2.image, names: "Melissa"})}}>
                    <View style={{flexDirection: "column",width: "30%",}}>
                        {img2.image}
                        <Text style={styles.nameText}>Melissa</Text>
                    </View>
                    <View style={styles.menuContent2}>
                       <View style={{flexDirection: "row",backgroundColor: "#bcfc88", borderRadius: 20,padding: 3, marginleft: 15, marginBottom: 4}}>
                          {img4.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                        <View style={{flexDirection: "row",backgroundColor: "#cfd4cb", borderRadius: 20,padding: 3, marginleft: 15,marginTop: 4}}>
                          {img5.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                    </View>
                    <View style={styles.menuContent2}>
                       <View style={{flexDirection: "row",backgroundColor: "#bcfc88", borderRadius: 20,padding: 3, marginleft: 5, marginBottom: 4}}>
                          {img6.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                        <View style={{flexDirection: "row",backgroundColor: "#cfd4cb", borderRadius: 20,padding: 3, marginleft: 5,marginTop: 4}}>
                          {img3.image} 
                          <Icon name='arrow-top-right' size={40} style={{marginLeft: -7,}} />
                        </View>
                    </View>
                </TouchableOpacity>
          </View>

      { /* ============ Tabs ================= */}

          <View style={{width: "20%"}}>
                <TouchableOpacity>
                    <View style={styles.tabs1}>
                    <MaterialIcon name="logout" size={50} color="#333" />
                    <Text style={styles.tabtext1}>Logout</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.tabs2}>
                    <Text style={styles.tabtext2}>Contact us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.tabs3}>
                    <Icon name="account-circle-outline" size={50} color="#333" />
                    <Text style={styles.tabtext1}>Setting</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.tabs4}>
                    <Ionicon name="person-add-sharp" size={50} color="#333" />
                    <Text style={styles.tabtext1}>Add User</Text>
                    </View>
                </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    parentMenuContainer: {
        height: 900,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#0446d4",
    },
    menuContent: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    menuContent2: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 0,
        width: "35%",
    },
    subjectList: {
        backgroundColor: "#fff",
        height: "auto",
        borderRadius: 20,
        margin: 5,
        padding: 15,
        marginBottom: 20,
        flexDirection: "row",
    },
    girlImg: {
        width: 70,
        height: 70,
    },
    nameText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      textShadowColor: '#000',
      textShadowOffset: {
        width: 0,
        height: 2,
      },
      textShadowRadius: 4,
      elevation: 5,
    },
    tabs1: {
        backgroundColor: "#fdd1fc",
        height: "auto",
        margin: 3,
        marginLeft: 5,
        marginBottom: 12,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    tabs2: {
        backgroundColor: "#fde1d1",
        height: "auto",
        margin: 3,
        marginLeft: 5,
        marginBottom: 12,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    tabs3: {
        backgroundColor: "#fdf9d1",
        height: "auto",
        margin: 3,
        marginLeft: 5,
        marginBottom: 12,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    tabs4: {
        backgroundColor: "#dcfdd1",
        height: "auto",
        margin: 3,
        marginLeft: 5,
        marginBottom: 12,
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderRadius: 15,
        flexDirection: "column",
        alignItems: "center",
    },
    tabtext2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        textAlign: "center",
        paddingVertical: 10,
    },
    tabtext1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: {
          width: 0,
          height: 2,
        },
        textShadowRadius: 4,
        elevation: 5,
        textAlign: "center",
    }
})