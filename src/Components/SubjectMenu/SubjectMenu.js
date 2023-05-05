import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import CategoryList from '../SubjectCategoryList/CategoryList';
import Tablist from '../Tablist/Tablist';

export default function Menu({route, navigation}) {
  const {imageData, names} = route.params;
  return (
    <SafeAreaView>
       <View style={styles.menuContainer}>
      <View style={styles.categoryList}>
         <CategoryList />
      </View>
      <View >
          <Tablist navigation={navigation} imageData={imageData} names={names} />
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(248, 11, 93, 0.97)",
    backgroundSize: "cover",
    alignItems: "flex-start",
    height: 900,
    justifyContent: "space-between",
  },
  categoryList: {
    width: "60%",
    margin: 10,
    marginLeft: 20,
  },
  tablist: {
    width: "20%",
  }
})