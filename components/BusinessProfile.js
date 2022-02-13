import * as React from 'react';
import { Text,  ImageBackground, StyleSheet, View, TextInput,TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';


const image = { uri: "https://th.bing.com/th/id/OIP.p2Q3PvICv3cCa1XnpVlnKAHaE7?w=286&h=190&c=7&r=0&o=5&pid=1.7" };

export default function BusinessProfileScreen({ navigation }) {
  return (
    <View style = {styles.container}>
        
      <StatusBar backgroundColor="#009387" barStyle="light-content"/>


      <View style={{height:250, backgroundColor:'#eeeeee', borderRadius:20}}>
     
          <View style={{height:180, marginTop:22, borderRadius:20,alignItems:'center',justifyContent:'center'}}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Business Page</Text>
    </ImageBackground>

          </View>

          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <Text>admin profile </Text>
                  <Text style={styles.text_footer} >business profile</Text>
              </View>
      </View>
 

          <View style={styles.footer}>

              <Text>Edit business Profile</Text>

         

              <View style = {{justifyContent:'center',alignItems:'center', width:"100%"}}>
             
   < FontAwesome 
     name = "user-circle"
     color = "#05375a"
     size = {50}
   
     />
              </View>

              
              <Text style = {styles.text_header}>Add business Logo </Text>

              <Text style={styles.text_footer}> Business Name</Text>

<View style={styles.action}>
<View style={{position:'absolute' ,left:280, top:5}}>

   < FontAwesome 
     name = "envelope"
     color = "#05375a"
     size = {20}
   
     />
</View>
     <TextInput
     placeholder="4 The Dead Business Palour Pty Ltd"
     styles={styles.textInput}
     autoCapitalize="none"
     />
  
</View>
             <Text style={styles.text_footer}> Busness Location</Text>

             <View style={styles.action}>
             <View style={{position:'absolute' ,left:280, top:5}}>

                < FontAwesome 
                  name = "map-marker"
                  color = "#05375a"
                  size = {20}
                
                  />
             </View>
                  <TextInput
                  placeholder="14 Corpse Street,Parktown"
                  styles={styles.textInput}
                  autoCapitalize="none"
                  />
               
             </View>

           
            

             
             <View style={styles.button}> 

             <LinearGradient
                    colors={['#064451', '#064451']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Submit</Text>
                </LinearGradient>
                

                <TouchableOpacity
                   onPress={() => {
                    navigation.navigate("VihicletypeScreen");
                  }}
                    
                >
                   
                </TouchableOpacity>
               
               


             </View>
        </View>
      
      
   

      

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
 
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
        color: '#05375a',
        fontSize: 15
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
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 35
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
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