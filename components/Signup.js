import React, {useState} from 'react';
import { SafeAreaView, Alert, Text, Pressable, ImageBackground, StyleSheet, View } from 'react-native';
import gbImage from './../assets/pictures/homeBG3.jpg';
import CustomInput from '../src/componets/CustomInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';


export default function SignupScreen({ navigation }) {
  const {control, handleSubmit, watch} = useForm();
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phone_number, setPhone_number] = useState('');

  const onRegisterPressed = async data => {
    const {username, password, email, phone_number} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, phone_number, preferred_username: username},
      });
      navigation.navigate('ConfirmEmailScreen', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <ImageBackground source={gbImage}  style={styles.container}>
      <View style={styles.frame}>
        <Text style={styles.title}>Sign Up</Text>
        <SafeAreaView>  
          <Text style={styles.label}>Full Name</Text> 
          <CustomInput
          name="username"
          control={control}
          placeholder="Username"
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
          <Text style={styles.label}>Email Address</Text> 
          <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rightIcon={<Icon size={24} style={styles.icon} name='envelope'/>}
          rules={{
            required: 'Email is required',
            // pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

          <Text style={styles.label}>Phone Number</Text> 
          <CustomInput
          name="phone_number"
          control={control}
          placeholder="Enter phone number"
          rightIcon={<Icon size={24} 
            style={styles.icon} name='phone'/>}
          rules={{
            required: 'Phone number is required',
            minLength: {
              value: 10,
              message: 'Phone should be at least 10 characters long',
            },
          }}
        />

          <Text style={styles.label}>Password</Text> 
          <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          rightIcon={<Icon size={28} 
            style={styles.icon} name='lock'/>} 
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

           <Text style={styles.label}>
             Already have an account?
             <Pressable style={styles.label}
               onPress={() => {
               navigation.navigate("LoginScreen");
              }}>
             <Text style={styles.link}>Login</Text>
             </Pressable>
            </Text> 
         
            <View style={styles.space} />
            <Pressable 
               style={styles.login} 
               onPress={handleSubmit(onRegisterPressed)}>
              <Text style={styles.text}>Create Account</Text>
            </Pressable>
 
            <View style={styles.space} />
            <Text style={styles.tnc}>
              By Signing up, you are agreeing to our Term & Conditions?        
            </Text>
            <View style={styles.space} />  
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    backgroundColor:"rgb(247, 247, 247)"
  },
  inputText: {
    color: '#064451',
    fontWeight:'normal',
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    padding: 1,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  inputContainer: {
    height: 40,
    borderRadius:20,
    borderColor: '#064451',
    borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"rgb(247, 247, 247)",
  },
  icon:{
    color:'#064451',
    width:20,
  },
  card:{
    marginLeft:20
  },
  textBody:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'right',
    marginRight:15,  
    color: '#064451'
  
  },
  label: {
    overflow: 'visible',
    fontWeight: "300",
    // fontFamily: '"Times New Roman", Times, serif',
   // fontFamily: '"Inter-Bold", "Inter", sans-serif',
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 10,
  },
  link:{
    color: 'blue',
    fontWeight: "300",

  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  frame: {
    width: "90%",
    //boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgb(247, 247, 247)",
    overflow: "visible",
    borderRadius: 15,
  },
  title: {
      textAlign: 'center',
      marginTop: 25,
      overflow: 'visible',
      fontWeight: "700",
      //fontFamily: `"Inter-Bold", "Inter", sans-serif`,
      color: '#064451',
      fontSize: 20,  
      marginBottom: 30,    
  },
  space: {
    width: 20, // or whatever size you need
    height: 10,
  },
  login:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#064451',
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: 50,
    marginLeft: 10,
  },
  loginG:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "rgb(11, 111, 131)",
    borderWidth:2,
    borderColor: '#064451',
    width: '94%',
    height: 50,
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"bold",
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  tnc:{
    textAlign:"center",
    width:"100%"
  },
  socials:{
    textAlign:"center",
    width:"100%"
  }
});
