import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TargetIcon from 'react-native-vector-icons/Foundation'; 
import BackIcon from 'react-native-vector-icons/AntDesign';

export default function Tablist(props) {
  return (
    <View style={styles.tablistContainer}>
          <TouchableOpacity>
            <View style={styles.tablists1}>
              <Icon name="question-circle" size={30} color="#7491f7" />
              <Text style={styles.tablistText}>Off</Text>
            </View>
          </TouchableOpacity>
        
            <View style={styles.tablists2}>
              {props.imageData}
              <Text style={styles.tablistText}>{props.names}</Text>
            </View>

        <TouchableOpacity onPress={() => {props.navigation.navigate('History')}}>
            <View style={styles.tablists3}>
              <MatIcon name="clipboard-text-search-outline" size={40} color="#333" />
              <Text style={styles.tablistText2}>Printable</Text>
              <Text style={styles.tablistText2}>History</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <View style={styles.tablists4}>
              <TargetIcon name="target" size={50} color="rgba(248, 47, 54, 0.92)" />
              <Text style={styles.tablistText2}>Target</Text>
            </View>
        </TouchableOpacity>

     
    </View>
  )
}

const styles = StyleSheet.create({
  tablistContainer : {
    marginTop: 40,
    marginRight: 15,
    padding: 0,
    flexDirection: "column",
    alignItems: "center",
  },
  tablists1: {
    backgroundColor: "#d6dfff",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical:3,
    borderRadius: 15,
    flexDirection: "row",
  },
  tablists2: {
    backgroundColor: "rgba(94, 251, 144, 0.34)",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 5,
    flexDirection: "column",
  },
  tablists3: {
    backgroundColor: "rgba(159, 241, 185, 0.92)",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  tablists4: {
    backgroundColor: "rgba(234, 250, 109, 0.92)",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 17,
    paddingVertical: 2,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  tablists5: {
    backgroundColor: "rgba(249, 201, 242, 0.92)",
    height: "auto",
    margin: 3,
    marginBottom: 5,
    paddingHorizontal: 17,
    paddingVertical: 2,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  tablistText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 2,
    padding: 3,
    fontSize: 16,
    alignItems: 'center',
    textShadowColor: '#000',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
  //  textShadowOpacity: 0.25,
    textShadowRadius: 4,
    elevation: 5,
  },
  tablistText2: {
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
  }
})