import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react';
import BoyImg from '../../Images/boy-svgrepo-com-1.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
//import Ionicon from 'react-native-vector-icons/Ionicons';
import HistoryImg from '../../Images/history-2.png';
import ChemicalImg from '../../Images/chemical.svg';
import StudentBookImg from '../../Images/student-reading-book.png';
import CountImg from '../../Images/counting-svgrepo-com.svg';

export default function StudentProfile({route, navigation}) {
  const {imageData, names} = route.params;
return (
    <View style={styles.studentProfileContainer}>
      <Text 
         style={{
            fontSize: 24, 
            color: "#fff", 
            fontWeight: 700, 
            textAlign: "center", 
            marginTop: 20,}}
            >Student Profile</Text>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 20, }}>
        {/* ======= Subject Categories ======= */}
       <View style={styles.subCategoryList}>
         <View style={{margin: 0, padding: 5,}}>

                <TouchableOpacity onPress={() => {navigation.navigate('Subject-menu', {imageData: imageData, names: names})}}>
                        <View style={{ 
                          backgroundColor: "rgba(178, 213, 252, 1)",
                          marginTop: 5,
                          padding: 5,
                          borderRadius: 10,
                          paddingVertical: 0,
                        }}>
                              <Text style={styles.mainText}>Social Studies</Text>
                              <View style={{flexDirection: "row"}}>
                                  <View style={{ alignItems: "flex-start",marginTop: 0,}}>
                                    <Image source={HistoryImg} style={{width: 40, height: 40}} />
                                    <Icon name='arrow-top-right' size={30} style={{marginLeft: 0,}} />
                                  </View>
                                  <View style={styles.secContainer}>
                                      <Text style={styles.normalText}>1st Grade</Text>
                                      <Text style={styles.normalText}>52 mins</Text>
                                  </View>
                                  <View style={styles.secContainer}>
                                    <Text style={styles.normalText}>53% complete</Text>
                                    <Text style={styles.normalText}>+4% per week</Text>
                                  </View>
                              </View>
                            </View>
                </TouchableOpacity>
           

                <TouchableOpacity onPress={() => {navigation.navigate('Subject-menu', {imageData: imageData, names: names})}}>
                        <View style={{ 
                            backgroundColor: "#fff",
                            marginTop: 5,
                            padding: 5,
                            borderRadius: 10,
                            paddingVertical: 0,
                          }}>
                            <Text style={styles.mainText}>Science</Text>
                            <View style={{flexDirection: "row"}}>
                                <View style={{ alignItems: "flex-start",marginTop: 0,}}>
                                  <ChemicalImg width={40} height={40} />
                                  <Icon name='arrow-top-right' size={30} style={{marginLeft: 0,}} />
                                </View>
                                <View style={styles.secContainer}>
                                    <Text style={styles.normalText}>2nd Grade</Text>
                                    <Text style={styles.normalText}>24 mins</Text>
                                </View>
                                <View style={styles.secContainer}>
                                  <Text style={styles.normalText}>2% complete</Text>
                                  <Text style={styles.normalText}>+3% per week</Text>
                                </View>
                            </View>
                          </View>
                </TouchableOpacity>
                  

                <TouchableOpacity onPress={() => {navigation.navigate('Subject-menu', {imageData: imageData, names: names})}}>
                      <View style={{ 
                          backgroundColor: "rgba(247, 180, 185, 1)",
                          marginTop: 5,
                          padding: 5,
                          borderRadius: 10,
                          paddingVertical: 0,
                        }}>
                          <Text style={styles.mainText}>Math</Text>
                          <View style={{flexDirection: "row"}}>
                              <View style={{ alignItems: "flex-start",marginTop: 0,}}>
                                <CountImg width={40} height={40} />
                                <Icon name='arrow-top-right' size={30} style={{marginLeft: 0,}} />
                              </View>
                              <View style={styles.secContainer}>
                                  <Text style={styles.normalText}>1st Grade</Text>
                                  <Text style={styles.normalText}>44 mins</Text>
                              </View>
                              <View style={styles.secContainer}>
                                <Text style={styles.normalText}>8% complete</Text>
                                <Text style={styles.normalText}>Mixed Progress</Text>
                              </View>
                          </View>
                        </View>
                </TouchableOpacity>
               

                <TouchableOpacity onPress={() => {navigation.navigate('Subject-menu', {imageData: imageData, names: names})}}>
                      <View style={{ 
                          backgroundColor: "#fff",
                          marginTop: 5,
                          padding: 5,
                          borderRadius: 10,
                          paddingVertical: 0,
                        }}>
                          <Text style={styles.mainText}>Language Arts</Text>
                          <View style={{flexDirection: "row"}}>
                              <View style={{ alignItems: "flex-start",marginTop: 0,}}>
                                <Image source={StudentBookImg} style={{width: 40, height: 40}} />
                                <Icon name='arrow-top-right' size={30} style={{marginLeft: 0,}} />
                              </View>
                              <View style={styles.secContainer}>
                                  <Text style={styles.normalText}>1st Grade</Text>
                                  <Text style={styles.normalText}>38 mins</Text>
                              </View>
                              <View style={styles.secContainer}>
                                <Text style={styles.normalText}>22% complete</Text>
                                <Text style={styles.normalText}>Needs Guidence</Text>
                              </View>
                          </View>
                        </View>
                </TouchableOpacity>
                
              </View>
        </View>
        
             {/*======= Tabs ====== */}
        <View style={{alignItems: "flex-start",justifyContent: "space-between", flexDirection: "row", }}>
              <View style={{flexDirection: "column"}}>
                  <TouchableOpacity>
                        <View style={styles.tabs1}>
                        <MaterialIcon name="logout" size={50} color="#333" />
                        <Text style={styles.tabtext1}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.tabs3}>
                        <Icon name="account-circle-outline" size={50} color="#333" />
                        <Text style={styles.tabtext1}>Edit</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.tabs2}>
                        <Text style={styles.tabtext2}>Contact us</Text>
                        </View>
                    </TouchableOpacity>
              </View>
               
              <View style={{flexDirection: "column"}}>
                        <View style={styles.tabs5}>
                           {imageData}
                          <Text style={styles.mainText}>{names}</Text>
                        </View>

                    <TouchableOpacity onPress={() => {navigation.navigate('Classroom',{imageData: imageData, names: names} )}}>
                        <View style={styles.tabs4}>
                        <Icon name="account-check-outline" size={60} color="#333" />
                        <Text style={styles.tabtext1}>Start</Text>
                        </View>
                    </TouchableOpacity>
              </View>
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    studentProfileContainer: {
      backgroundColor: "#fa5b2f",
      alignItems: "center",
      justifyContent: "flex-start",
      height: 900,
    },
    subCategoryList: {
      width: "50%",
      marginLeft: 3,
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
      borderWidth: 2,
      borderColor: "#333",
      width: 80,
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
      width: 80,
      borderWidth: 2,
      borderColor: "#333",
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
      borderWidth: 2,
      borderColor: "#333",
  },
  tabs4: {
      backgroundColor: "#dcfdd1",
      height: "auto",
      margin: 3,
      marginLeft: 5,
      marginBottom: 12,
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 25,
      flexDirection: "column",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "#333",
  },
  tabs5: {
    backgroundColor: "rgba(249, 178, 215, 0.48)",
    height: "auto",
    margin: 3,
    marginLeft: 5,
    marginBottom: 12,
    paddingHorizontal: 3,
    paddingVertical: 15,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    width: 80,
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
  },
  mainText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    padding: 1,
    fontSize: 16,
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
    margin: 3,
    marginLeft: 8,
   },
   normalText: {
    fontSize: 10,
    fontWeight: 800,
    color: "#333",
    textAlign: "left",
   },
})