import * as React from 'react';
import { Text,  Dimensions, StyleSheet, View, Alert,Pressable } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import img from "../../assets/pictures/person.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getAdmin } from '../graphql/queries';
import { getCarwash } from '../graphql/queries';
import { updateCarwash } from '../graphql/mutations';
import Modal from "react-native-modal";
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';

const { width, height }= Dimensions.get("screen");

export default function BusineEdit({ navigation, route }) {
    const {name, location, desc, id} = route?.params || {};
    const {control, handleSubmit, watch} = useForm();
  const apd = async data => {
    const {name: name, desc: desc, location: location} = data;
    //const {  location: b_location, name: bname, Desc : Desc, imageUrl: imageUrl } = data;
    console.log(data.name)
    try{
        const bus = {
            id: id,
            name: data.name,
            location: data.location,
            Desc: data.desc
        }
        console.log(bus)
        const apdm = await API.graphql({query: updateCarwash, variables: {input: bus}});
        console.log("You have successfully apdated your profile")
        Alert.alert("You have successfully apdated your profile")
        
    } catch (e) {
      console.log(e)
        Alert.alert(e)
    } 
    navigation.navigate("businessPage")
 }
  return (
<View style={styles.container}>
    <View style={{marginTop: "30%",height:width-2, width:"90%", alignSelf: "center", flex: 1}}>
    <View
    style={{ }}
    >
    <Text style={[styles.tit, {alignSelf: "center", color:"green"}]}>UPDATE</Text>
    <Text style={styles.tit}>Business Name</Text>
    <CustomInput
      name="name"
      control={control}
      style={styles.inpt}
      inputContainerStyle={styles.Con}
      inputStyle ={styles.inputText}
      defaultValue={name}
      iconName='home'
      rules={{
        required: 'Name is required',
        minLength: {
          value: 3,
          message: 'Name should be at least 3 characters long',
        },
        maxLength: {
          value: 24,
          message: 'Name should be max 24 characters long',
        },
      }}
    />
      <Text style={styles.tit}>Business Location</Text>
    <CustomInput
    name="location"
    control={control}
    style={styles.inpt}
      inputContainerStyle={styles.Con}
      inputStyle ={styles.inputText}
      defaultValue={location}
      rules={{
        required: 'Location is required',
        minLength: {
          value: 12,
          message: 'Location should be at least 3 characters long',
        },
      }}
      iconName='map-marker'
     // value={email}
    />
    <Text style={styles.tit}>Business Description</Text>
    <CustomInput
    name="desc"
    control={control}
      style={styles.inpt}
      inputContainerStyle={styles.Con}
      inputStyle ={styles.inputText}
      defaultValue={desc}
      iconName='pencil'
      rules={{
        required: 'Description is required',
        minLength: {
          value: 5,
          message: 'Description should be at least 5 characters long',
        },
      }}
    /> 
      <View style={{flexDirection:"row", alignContent: "center"}}>
    <Pressable
    onPress={handleSubmit(apd)}
    style={{padding: 10}}
    ><Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>UPDATE</Text></Pressable>
    <Pressable 
    onPress={() => navigation.goBack()}
    style={{padding: 10}}
    ><Text style={{fontSize: 20, fontWeight: "bold", color: "red"}}>CANCEL</Text></Pressable>
    </View>
    </View>
  
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
        //padding: 5
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
        paddingLeft: "5%",
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
  