import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Iconicons from "react-native-vector-icons/Ionicons"
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
//import { getAdmin } from './../graphql/queries';
import { createAdmin } from './../src/graphql/mutations';
import { getAdmin } from './../src/graphql/queries'


const randomImages = [
  'https://tse2.mm.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&w=221&h=178',
  'https://tse1.mm.bing.net/th?id=OIP.Q_-11kM22YOL505PnecHqgHaI9&pid=Api&P=0&w=300&h=300',
]
/*
@auth(rules: [{ allow: owner }]) 
*/ 
// You can explore the built-in icon families and icons on the web at:
//input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!
// https://icons.expo.fyi/

export default function DashBoadScreen({ navigation }) {

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  React.useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if(userInfo){
        const userData = await API.graphql(
          graphqlOperation(
            getAdmin,
            { id: userInfo.attributes.sub }
            )
        )
        if (userData.data.getAdmin) {
          //console.log("User is already registered in database");
          return;
        }
        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          email: userInfo.attributes.email,
          phone: userInfo.attributes.phone_number,
          imageUrl: getRandomImage(),
        }
        await API.graphql(
          graphqlOperation(
            createAdmin,
            { input: newUser }
          )
        )
      }
    }
    fetchUser();
  }, []) 
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
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15 }}>Requests</Text>
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
      onPress={() =>  navigation.push("VehicleTypeScreen")}
      >
        <View style={{width: 100, height: 80, borderRadius:10, marginTop:30, alignItems:"center"}}>
           <Iconicons name={"folder-outline"} size={25} color={"#064451"} />
           <Text style={{color: "#064451", fontWeight: "bold", fontSize: 15, padding: 5, textAlign: "center" }}>Vehicle Type</Text>
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
      backgroundColor:'#064451',
  alignItems:'center',
     height:60,
      borderRadius:10,
      margin:4,
      marginTop: 20,
      padding:5,
      width: 340,
  },
  inner3:{
    backgroundColor:'lightgrey',
   alignItems:'center',
   height:200,
   width: 340,
    borderRadius:10,
    margin:4,
    marginTop: 20,
    padding:5,
    borderLeftColor: "#064451",
    borderLeftWidth: 15,
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