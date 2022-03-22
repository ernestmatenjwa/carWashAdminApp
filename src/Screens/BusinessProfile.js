import * as React from 'react';
import { Text,  Dimensions, TextInput, Pressable, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getCarwash } from '../graphql/queries';
import { createCarwash } from '../graphql/mutations';
import Modal from "react-native-modal";
//import CustomInput from '../CustomInput/CustomInput';
import Iconicons from "react-native-vector-icons/Ionicons"
import {useForm} from 'react-hook-form';
import {
    Auth, 
    API,
    graphqlOperation,
  } from 'aws-amplify';

const { width, height }= Dimensions.get("screen");

export default function BusinessProfileScreen({ navigation }) {
  const {control, handleSubmit, watch} = useForm();
  const [user, setUser] = React.useState([]);
  const [hide, setHide] = React.useState(false);
  const [imageUrl, setBimageUrl] = React.useState("https://image.shutterstock.com/image-vector/camera-add-icon-260nw-1054194038.jpg");
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
  
  };

  React.useEffect( () => {
    const getCarwashDetails = async (e) => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const ID = userInfo.attributes.sub
         try{
          const userData = await API.graphql(graphqlOperation(getCarwash, {id: ID}));
         if (userData.data.getCarwash) {
          setHide(false)
          setName(userData.data.getCarwash.name)
          setLocation(userData.data.getCarwash.location)
          setDesc(userData.data.getCarwash.Desc)
          setBimageUrl(userData.data.getCarwash.imageUrl)
          setID(userData.data.getCarwash.id)
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
      <View style = {styles.container}>
   <View style={{ flexDirection: "row",}}>
       <Iconicons style={{padding: 10}} name="camera-outline" size={35} color={"#064451"} />
       {<Image style={{ width: width/4.7,
                        height: height/9,
                        borderRadius: 33,
                        borderWidth: 1,
                        borderColor: "grey",
                        }} 
                        source={{uri: imageUrl}} />}<Iconicons onPress={() =>  navigation.push("BusineEdit", {name, location, desc, id})} style={{padding: 10}} name="create-outline" size={35} color={"#064451"} />
   </View>
    <Text style={styles.text_footer}>Business Name</Text>
    <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300, alignSelf: "flex-start"}}>
    <Text style={{fontSize: 16}}>{name}</Text>
    </View>
    
    <Text style={styles.text_footer}>Business location</Text>
    <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300, alignSelf: "flex-start"}}>
    <Text style={{fontSize: 16}}>{location}</Text>
    </View>

    <Text style={styles.text_footer}>Business Description</Text>
    <View style={{borderWidth: 1, borderColor: "grey", padding: 7, width: 300, alignSelf: "flex-start"}}>
    <Text style={{fontSize: 16}}>{desc}</Text>
    </View>
    </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "grey"
    //overflow: "visible",
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
      paddingTop: 10,
      //paddingLeft: "5%",
      alignSelf: "flex-start",
      fontWeight: "bold"
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
