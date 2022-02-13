import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Iconicons from "react-native-vector-icons/Ionicons"

export default function DashBoadScreen({ navigation }) {
  return (
  <View style={styles.container}>
    <View style={{marginTop:10, 
                  width:'100%',
                  flexDirection:'row', 
                  flexWrap:'wrap',
                  justifyContent:'center',
                  }}>
    <TouchableOpacity
     style={styles.inner}
     onPress={() =>  navigation.push("RequestScreen")}
     >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"list-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>Request</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={() =>  navigation.push("HistoryScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"apps"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>History</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={() =>  navigation.push("BusinessPageScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"folder-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15, padding: 5, textAlign: "center" }}>Business Page</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={() =>  navigation.push("InformationScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"alert-circle-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>Information</Text>
        </View>
       
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={() =>  navigation.push("DocumentsScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"folder-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>Documents</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      onPress={() =>  navigation.push("StaffScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"people-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>Staff</Text>
        </View>
        
      </TouchableOpacity>
    </View>
    <View 
      style={styles.inner2}
      >
        <Text style={{
          color: "white", 
          fontWeight: "bold", 
          fontSize: 18, 
          alignSelf: "flex-start",
          padding: 3,
          paddingLeft: 20,
        }}>Client base</Text>
        <Text style={{
          color: "white", 
          fontWeight: "bold", 
          fontSize: 10, 
          alignSelf: "flex-start",
          padding: 3,
          paddingLeft: 20,
        }}>Your current score</Text>
        <View style={{width: 338, borderRadius:10, marginTop:30, alignItems:"center"}}>
        
        </View>
        
      </View>
      <View 
      style={styles.inner3}
      >
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-start",
          padding: 10,
          paddingTop: 40,
        }}>New requests</Text>
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-start",
          padding: 10,
        }}>Completed</Text>
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-start",
          padding: 10,
        }}>Overview</Text>
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-end",
          padding: 10,
         // paddingTop: 40,
          marginTop: -120,
        }}>4</Text>
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-end",
          padding: 10,
          //paddingTop: 40,
        }}>12</Text>
        <Text style={{
          color: "#064451", 
          fontWeight: "bold", 
          fontSize: 15, 
          alignSelf: "flex-end",
          padding: 10,
          //paddingTop: 40,
        }}>134</Text>
        <View style={{width: 338, borderRadius:10, marginTop:30, alignItems:"center"}}>
        
        </View>
        
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        //height:'85%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
 
    inner:{
  
      
        backgroundColor:'#ffffff',
    alignItems:'center',
       height:110,
        borderRadius:10,
        margin:4,
        padding:5,
        
    },
    inner2:{
      backgroundColor:'#ffffff',
  alignItems:'center',
     height:60,
      borderRadius:10,
      margin:4,
      marginTop: 20,
      padding:5,
      backgroundColor: "rgba(0, 0, 0, 0.31)"
  },
  inner3:{
    backgroundColor:'#ffffff',
alignItems:'center',
   height:200,
    borderRadius:10,
    margin:4,
    marginTop: 20,
    padding:5,
    //backgroundColor: "#064451"
},
    subHeader:{
      color: 'black',
      marginTop: 30,
      fontWeight: 'bold',
      fontSize: 17,
  
    },
    header:{
      marginTop: 30,
      flexDirection: 'row',
      paddingHorizontal: 20,
    },

})