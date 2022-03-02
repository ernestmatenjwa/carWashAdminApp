import * as React from 'react';
import { Text,  Dimensions, StyleSheet, View, Image,Pressable } from 'react-native';
import { StatusBar } from "expo-status-bar";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import img from "../assets/pictures/person.png"
import Icon from 'react-native-vector-icons/FontAwesome';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getAdmin } from '../src/graphql/queries';
import { getCarwash } from '../src/graphql/queries';
import { createCarwash } from '../src/graphql/mutations';
import Modal from "react-native-modal";
import CustomInput from './CustomInput/CustomInput';
import {useForm} from 'react-hook-form';

const { width, height }= Dimensions.get("screen");

export default function AdminProfileScreen({ navigation }) {
    const [text, onChangeText] = React.useState('');
    const [user, setUser] = React.useState([]);
    const [profile, setProfile] = React.useState([]);
    const [idd, setIdd] = React.useState([]);
    const [isModalVisible, setModalVisible] = React.useState(false);
    const {control, handleSubmit, watch} = useForm();

      React.useEffect( () => {
        console.log("Car is already");
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
            if(userInfo){
              const userData = await API.graphql(
               graphqlOperation(
                getCarwash,
                { id: userInfo.attributes.sub }
              )
           ) 
          if (userData.data.getCarwash) {
          console.log("Car is already registered in database");
          return;
        }  
        setModalVisible(true)
        console.log("we here");
        // return(
        //     <Modal isVisible={isModalVisible} style={{backgroundColor: "white",opacity: 0.8,}}>   
        //     <View
        //     style={{height:"50%"}}
        //     >
        //     <Text style={[styles.tit, {alignSelf: "center", color:"green", fontSize: 30, paddingBottom: "10%"}]}>Register Carwash</Text>
        //     <Text style={styles.tit}>Business Name</Text>
        //     <CustomInput
        //       name="name"
        //       control={control}
        //       placeholder="Enter name"
        //       rightIcon={<Icon size={24} 
        //       style={styles.icon} name='user'/>}
        //       rules={{
        //         required: 'Username is required',
        //         minLength: {
        //           value: 3,
        //           message: 'Username should be at least 3 characters long',
        //         },
        //         maxLength: {
        //           value: 24,
        //           message: 'Username should be max 24 characters long',
        //         },
        //       }}
        //     />
        //       <Text style={styles.tit}>Business Location</Text>
        //       <CustomInput
        //       name="location"
        //       control={control}
        //       placeholder="Enter location"
        //       rightIcon={<Icon size={24} 
        //       style={styles.icon} name='user'/>}
        //       rules={{
        //         required: 'Username is required',
        //         minLength: {
        //           value: 3,
        //           message: 'Username should be at least 3 characters long',
        //         },
        //         maxLength: {
        //           value: 24,
        //           message: 'Username should be max 24 characters long',
        //         },
        //       }}
        //     />
        //     </View>
        //     <View style={{ alignContent: "center"}}>
        //     <Pressable
        //     onPress={handleSubmit(RegisterC)}
        //     style={{padding: 1, alignSelf: "center",}}
        //     ><Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>SUBMIT</Text></Pressable>
        //     </View>
        //   </Modal>
        // )
        }
    }
    // const fetchUser = async () => {
    //   const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //   if(userInfo){
    //     const userData = await API.graphql(
    //       graphqlOperation(
    //         getCarwash,
    //         { id: userInfo.attributes.sub }
    //         )
    //     )
    //     if (userData.data.getAdmin) {
    //       console.log("Car is already registered in database");
    //       return;
    //     }
    //     setModalVisible(true)
    //   }
    // }
    fetchUser();
  }, []) 
  const RegisterC = async data => {
    console.log("123456")
    const {  location: b_location, name: bname, Desc : Desc, imageUrl: imageUrl } = data;
    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    console.log(data)
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
          Desc: data.Desc,
          imageUrl: "https://image.shutterstock.com/image-vector/camera-add-icon-260nw-1054194038.jpg",
        }
        try{
          await API.graphql(graphqlOperation(createCarwash, { input: newUser}));
          alert('Car wash successfully registered')
          setModalVisible(false);
         // window.location.replace('/profile')
      } catch (e) {
          console.log('error creating user ', e);
      }
        // await API.graphql(
        //   graphqlOperation(
        //     createCarwash,
        //     { input: newUser }
        //   )
        // )
        // console.log('done')
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
    React.useEffect(() => {
        const getProfile = async (e) => {
          const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
          const ID = userInfo.attributes.sub
             //e.preventDefault();
             console.log('called1111111========', ID);
             try{
               //console.log('try');
              const userData = await API.graphql(graphqlOperation(getAdmin, {id: ID}));
              //console.log('yes22 ', userData);
             // console.log('>> ', profile.data?.data.getUserByEmail.name, '<<');
              setProfile({data: userData})
                } catch (e) {
                    console.log('error getting user 22', e);  
                } 
       }
           function loadUser() { 
               return Auth.currentAuthenticatedUser({bypassCache: true});
           }
           async function onLoad() {
               try {
                   const user = await loadUser();
                   setUser(user.attributes);
               }catch (e) {
                   alert(e)
               }
           }
           onLoad();
           getProfile();
       }, []);
  return (
    <View style = {styles.container}>
      {(() => {
       if (isModalVisible === true){
      return (
      <Modal isVisible={isModalVisible} style={{backgroundColor: "white",opacity: 0.8,}}>   
        <View
        style={{height:"50%"}}
        >
        <Text style={[styles.tit, {alignSelf: "center", color:"green", fontSize: 30, paddingBottom: "10%"}]}>Register Carwash</Text>
        <Text style={styles.tit}>Business Name</Text>
        <CustomInput
          name="name"
          control={control}
          placeholder="Enter name"
          rightIcon={<Icon size={24} 
          style={styles.icon} name='user'/>}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
          <Text style={styles.tit}>Business Location</Text>
          <CustomInput
          name="location"
          control={control}
          placeholder="Enter location"
          rightIcon={<Icon size={24} 
          style={styles.icon} name='user'/>}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <Text style={styles.tit}>Business Description</Text>
          <CustomInput
          name="Desc"
          control={control}
          placeholder="Enter Description"
          rightIcon={<Icon size={24} 
          style={styles.icon} name='user'/>}
          rules={{
            required: 'Description is required',
            minLength: {
              value: 5,
              message: 'Description should be at least 5 characters long',
            },
            maxLength: {
              value: 50,
              message: 'Username should be max 50 characters long',
            },
          }}
        />
        </View>
        <View style={{ alignContent: "center"}}>
        <Pressable
        onPress={handleSubmit(RegisterC)}
        style={{padding: 1, alignSelf: "center",}}
        ><Text style={{fontSize: 20, fontWeight: "bold", color: "green"}}>SUBMIT</Text></Pressable>
        </View>
      </Modal>
        )
      }
      return (
        null
      );
    })()}
    <View style = {{justifyContent:'center',alignItems:'center', width:"100%", }}>          
       <Image source={img} style={styles.UserImg} /> 
    </View>
    
    <Text style={[styles.text_footer, {marginTop:"-10%"}]}>Full Name</Text>
    <Input 
        onChangeText={onChangeText} value={profile.data?.data.getAdmin.name}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle ={[styles.inputText, {paddingLeft: 15}]}                
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='user'/>}
        disabled
    />
    
    <Text style={styles.text_footer}>Email Address</Text>
    <Input 
        onChangeText={onChangeText} value={profile.data?.data.getAdmin.email}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='envelope'/>}
        disabled
    />
    <Text style={styles.text_footer}>Phone</Text>
    <Input 
        onChangeText={onChangeText} value={profile.data?.data.getAdmin.phone}
        inputContainerStyle={[styles.inputContainer, {backgroundColor: "white", borderRadius: 10}]}
        inputStyle = {[styles.inputText, {paddingLeft: 15}]}               
        rightIcon={ <Icon size={24} 
        style={styles.icon} name='phone'/>}
        disabled
    />
    <View style={styles.button}> 
        <LinearGradient       
           colors={['#064451', '#064451']}
           style={styles.signIn}
        ><Text style={[
            styles.textSign, 
            {color:'#fff'}]}
            onPress={() =>  navigation.push("AdminEdit")}
            >Edit</Text>
        </LinearGradient>
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
