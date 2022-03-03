import * as React from 'react';
import { Text,  Dimensions, TextInput, Pressable, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import img from "../assets/pictures/person.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCarwash } from '../src/graphql/queries';
import { createCarwash } from '../src/graphql/mutations';
import Modal from "react-native-modal";
//import CustomInput from '../CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
import {
    Auth, 
    API,
    graphqlOperation,
  } from 'aws-amplify';

const { width, height }= Dimensions.get("screen");

export default function BusinessProfileScreen({ navigation }) {
  //const [text, onChangeText] = React.useState('');
  //const [fill, setFill] = React.useState(0);
  const {control, handleSubmit, watch} = useForm();
  const [user, setUser] = React.useState([]);
 // const [b_location, setB_Location] = React.useState("");
  const [hide, setHide] = React.useState(false);
  const [imageUrl, setBimageUrl] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [carwash, setSetCarwash] = React.useState([]);

  const close = () => {
    setModalVisible(!isModalVisible);
  };
  
  const RegisterCc = async data => {
    const {  location: b_location, name: bname, imageUrl: imageUrl } = data;
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    if(userInfo){
        const userData = await API.graphql(
          graphqlOperation(
            getCarwash,
            { id: userInfo.attributes.sub }
            )
        )
        if (userData.data.getCarwash) {
          console.log("User is aalreadyyy registered in database");
          setModalVisible(false);
          return;
        }
        const newUser = {
          id: userInfo.attributes.sub,
          location: data.location,
          name: data.name,
          imageUrl: "https://image.shutterstock.com/image-vector/camera-add-icon-260nw-1054194038.jpg",
        }
        await API.graphql(
          graphqlOperation(
            createCarwash,
            { input: newUser }
          )
        )
      }
    
   /* console.log(data)
    try{
        await API.graphql(graphqlOperation(createCarwash, { input: data}));
        alert('Car wash successfully registered')
        setModalVisible(false);
       // window.location.replace('/profile')
    } catch (e) {
        console.log('error creating user ', e);
    }*/
  };
//   const handleSubmittt = async (e) => {
//     e.preventDefault();
//        const data = { location: b_location, name: bname, imageUrl: imageUrl };
//          console.log('data', l)
//        try{
//            await API.graphql(graphqlOperation(createCarwash, { input: data}));
//            alert('Car wash successfully registered')
//            setModalVisible(false);
//           // window.location.replace('/profile')
//        } catch (e) {
//            console.log('error creating user ', e);
//        }  
// }

  React.useEffect( () => {
    console.log("we about to display carwash")
    const getCarwashDetails = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const ID = userInfo.attributes.sub
      if(!ID){
        setHide(true)
      }
         //e.preventDefault();
         console.log('ca++++==', hide);
         try{
           //console.log('try');
          const userData = await API.graphql(graphqlOperation(getCarwash, {id: ID}));
          console.log('yes22 ', userData);
         // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
          setSetCarwash({data: userData})
            } catch (e) {
                console.log('error getting user 22', e);  
            } 
   }
   getCarwashDetails();
  }, []) 
  return (
    <View style = {styles.container}>
        {(() => {
       if (hide === true){
      return (
        <>
      <View style = {{justifyContent:'center',alignItems:'center', width:"100%", marginTop: "1%", marginBottom: "0%"}}>          
       <Image source={{uri:carwash.data?.data.getCarwash.imageUrl}} style={styles.UserImg} /> 
    </View>
  
    <Text style={styles.text_footer}>Business Name</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle ={[styles.inputText, {paddingLeft: 15}]}                
        value={carwash.data?.data.getCarwash.name}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='home'/>}
        disabled
    />
    
    <Text style={styles.text_footer}>Business location</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        value={carwash.data?.data.getCarwash.location}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='map-marker'/>}
        disabled
    />

<Text style={styles.text_footer}>Business Description</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        value={carwash.data?.data.getCarwash.Desc}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='map-marker'/>}
        disabled
    />
    
    <View style={styles.button}> 
        <LinearGradient
           colors={['#064451', '#064451']}
           style={styles.signIn}
        ><Text style={[
            styles.textSign, 
            {color:'#fff'}]}
            onPress={() =>  navigation.push("BusineEdit")}
            >Edit</Text>
        </LinearGradient>
    </View> 
    </>
        )
      }
      return (
        null
      );
    })()}
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
  },
  Con: {
    height: 35,
    padding: 5,
  },
  tit: {
    fontSize: 20,
    padding: 5,
    color: "#064451",
    fontWeight: "bold",
    paddingLeft: "5%",
  },
  inpt:{
    height: 30,
    borderColor: "black",
    backgroundColor: "white",
    opacity: 1,
    borderWidth: 0.5,
    borderColor: "black"
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
      paddingBottom: 10,
      paddingLeft: "5%"
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
      //marginTop: "-3%"
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
