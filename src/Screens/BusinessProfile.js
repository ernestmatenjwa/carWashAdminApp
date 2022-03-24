import * as React from 'react';
import { Text,  Dimensions, TextInput, Pressable, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCarwash } from '../graphql/queries';
import { createCarwash } from '../graphql/mutations';
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
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [carwash, setSetCarwash] = React.useState([]);
  const [id, setID] = React.useState("");

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
         //e.preventDefault();
         console.log('ca++++==', hide);
         try{
           //console.log('try');
          const userData = await API.graphql(graphqlOperation(getCarwash, {id: ID}));
          console.log('yes22 ', userData);
         // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
         if (userData.data.getCarwash) {
          setHide(false)
          setName(userData.data.getCarwash.name)
          setLocation(userData.data.getCarwash.location)
          setDesc(userData.data.getCarwash.Desc)
          setBimageUrl(userData.data.getCarwash.imageUrl)
          setID(userData.data.getCarwash.id)
          console.log("carwash exist");
          return;
        } else{
          setHide(true)
        }
          setSetCarwash({data: userData})
            } catch (e) {
                console.log('error getting user 22', e);  
            } 
   }
   getCarwashDetails();
  }, [name, location, desc, id, imageUrl]) 
  return (
    <View style = {styles.container}>
        {(() => {
       if (hide === false){
      return (
        <>
    
    <Image style={styles.avatar} source={imageUrl}/>
    {/* <Image style={styles.avatar} source={{uri:profile.data?.data.getUser.imageUrl}}/> */}
    <View style={styles.viewAl}>
    <Pressable 
      // onPress={show}
      style={[styles.text_footer, {}]}>
      <Icon
          style={styles.iconZb}
          size={24}
          name="camera"
       />
      </Pressable> 
      <Pressable 
      // style={styles.iconZb} 
      // onPress={show}
      onPress={() =>  navigation.push("BusineEdit", {name, location, desc, id})}
         
      >        
      <Icon
        style={styles.iconZb}
        size={24}
        name="edit"
      />
      </Pressable>
    </View>

   

    <View style={styles.body}>
    <View style={styles.items}>
          <Icon
          
          style={styles.icon}
            size={24}
            name="home"
          />
           <Text style={styles.name}>{name ? name: "loading..."}</Text>              
          
          </View>
          <View style={styles.items}>
          <Icon
          style={styles.icon}
            size={24}
            name="map-marker"
          />
          <Text style={styles.info}>{location ? location : "loading...."}</Text>
      
          </View>
          <View style={styles.items} >
          <Icon
          
          style={styles.icon}
            size={24}
            name="pencil"
          />
  <Text style={styles.description}>{desc ? desc: "loading"}</Text>
        
          </View>
          </View>
     
      {/* <View style = {{justifyContent:'center',alignItems:'center', width:"100%", marginTop: "1%", marginBottom: "0%"}}>          
       <Image source={{imageUrl}} style={styles.UserImg} /> 
    </View>
  
    <Text style={styles.text_footer}>Business Name</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle ={[styles.inputText, {paddingLeft: 15}]}                
        value={name}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='home'/>}
        disabled
    />
    
    <Text style={styles.text_footer}>Business location</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        value={location}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='map-marker'/>}
        disabled
    />

<Text style={styles.text_footer}>Business Description</Text>
    <Input 
        //onChangeText={onChangeText} value={text}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        value={desc}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='pencil'/>}
        disabled
    />
    
    <View style={styles.button}> 
        <LinearGradient
           colors={['#064451', '#064451']}
           style={styles.signIn}
        ><Text style={[
            styles.textSign, 
            {color:'#fff'}]}
            onPress={() =>  navigation.push("BusineEdit", {name, location, desc, id})}
            >Edit</Text>
        </LinearGradient>
    </View>  */}


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
    width: width,
    // backgroundColor: "white",
    // padding: 1,
  },
  viewAl: {
    // marginTop:50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconZb: {
    height: 30,
    width: 30,
    margin:40,
    color:"#064451"
  },
  header:{
    backgroundColor: "#064466",
    height:120,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius:25
  },
  HeaderText:{
    color: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:10,
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:5,
    
    backgroundColor:  "#064400"
  },
 
  body:{
    margin: 15,
    backgroundColor: `transparent`,
    borderColor: "#064451",
    borderWidth: 2,
    borderTopWidth:0,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius:25,
    padding: 15
  },
  bodyContent: {
    flex: 1,
    // alignItems: 'flex-start',
    padding:30,
  },
  items:{
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  name:{
    fontSize:22,
    color:"#064451",
    fontWeight:'600',
    // textAlign: 'flex-start',
  },
  icon:{
    color: "#064451",
    marginRight: 20,
  },
  info:{
    fontSize:16,
    color: "#064451",
    fontWeight:'400',
  },
  description:{
    fontSize:14,
    color: "#696969",
    fontWeight:'300',
    height: 75,
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#064451",
  },
  buttonText:{
    color: "#ffffff",
  }
});
const stylez = StyleSheet.create({
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
