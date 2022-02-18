import * as React from 'react';
import { Text,  Dimensions, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import img from "../assets/pictures/person.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const { width, height }= Dimensions.get("screen");

export default function BusineEdit({ navigation }) {
  //const [text, onChangeText] = React.useState('');
  return (
    <View style = {styles.container}>
         <View style={{height: height/4.8, backgroundColor: "#064451", width: width, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <Icon1 name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
           <Text style={{color: "white", paddingTop: "2%", fontSize:50, fontWeight:"700", alignSelf: "center"}}>Edit Business</Text>
        </View>
    <View style = {{justifyContent:'center',alignItems:'center', width:"100%", paddingTop: 20 }}>          
       <Image source={img} style={styles.UserImg} /> 
    </View>
    <Text style = {styles.text_header}>Sek'Clean carwash</Text>

    <Text style={styles.text_footer}>Business Name</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        placeholder="Sek'Clean carwash"
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='home'/>}
        //disabled
    />
    <Text style={styles.text_footer}>location</Text>
    <Input 
       // onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}               
        placeholder="Pretoria, Soshanguve"
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='map-marker'/>}
        //disabled
    />
    <View style={[styles.button, {padding: 10}]}> 
        <LinearGradient
        
           colors={['#064451', '#064451']}
           style={[styles.signIn]}
        ><Text style={[
            styles.textSign, 
            {color:'#fff'}]}
            onPress={() =>  navigation.push("AdminEdit")}
            >Submit</Text>
        </LinearGradient>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: width,
    //backgroundColor: '#009387'
    //padding: 10
  },
  icon: {
      color: "#064451",
  },
  UserImg: {
      width: 90,
      height: 90,
      borderRadius: 25,
    },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      height: 450,
      marginLeft:10,
      marginRight:10,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      paddingHorizontal: 20,
      paddingVertical: 30,
      
      
     
  },
  text_header: {
      color: '#064451',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign:'center',
      paddingBottom:30
  },
  text_footer: {
      color: '#064451',
      fontSize: 18,
      paddingTop: 0,
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderTopWidth:1,
      borderTopColor:'#f2f2f2',
      borderLeftWidth:1,
      borderLeftColor:'#f2f2f2',
      borderRightWidth:1,
      borderRightColor:'#f2f2f2',
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      //marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
      
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: "-5%"
  },
  signIn: {
      width: '30%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      //marginTop: "1%"
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  text:{
      color: '#05375a',
  },
  icons:{
      flexDirection:'row',
      alignItems:'flex-start'
  },
  image: {
    height:'100%',
    width:"100%",
    justifyContent:'center',
    alignItems:"center",
    borderRadius:25,
    overflow:'hidden'
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
  
    }
});
