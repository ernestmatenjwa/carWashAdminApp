import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable, ImageBackground, Alert} from 'react-native';
import CustomInput from '../components/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';
//import {useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import gbImage from '../../assets/pictures/homeBG3.jpg';

//function LoginScreen({ navigation }) {

function ConfirmEmailScreen({ navigation, route }) {
  //const route = useRoute();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const username = watch('username');

  //const navigation = useNavigation();

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('LoginScreen');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('LoginScreen');
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was resent to your email');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  return (
    <ImageBackground source={gbImage}  style={styles.container}>
    <View style={styles.frame}>
        <Text style={styles.title}>Confirm your email</Text>
        <SafeAreaView>
          <Text style={styles.label}>Username</Text> 
          <CustomInput
          name="username"
          control={control}
          placeholder="Enter Username"
          rules={{
            required: 'Username code is required',
          }}
        />
          <Text style={styles.label}>Code</Text> 
          <CustomInput
          name="code"
          control={control}
          placeholder="Enter Confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />
          
          <View style={styles.space} /> 
          <Pressable 
             style={styles.login} 
             onPress={handleSubmit(onConfirmPressed)}>
           <Text style={styles.text}>Confirm</Text>
          </Pressable> 
          <View style={styles.space} />
          <Pressable 
             style={styles.loginG} 
             onPress={onResendPress}>
           <Text style={styles.text}>Resend Code</Text>
          </Pressable>
          <View style={styles.space} />     
          <Text style={styles.label}
          onPress={onSignInPress}
          > Back to sign in</Text> 
        </SafeAreaView>
    </View>
  </ImageBackground>
    // <ScrollView showsVerticalScrollIndicator={false}>
    //   <View style={styles.root}>
    //     <Text style={styles.title}>Confirm your email</Text>

    //     <CustomInput
    //       name="username"
    //       control={control}
    //       placeholder="Enter Username"
    //       rules={{
    //         required: 'Username code is required',
    //       }}
    //     />

    //     <CustomInput
    //       name="code"
    //       control={control}
    //       placeholder="Enter Confirmation code"
    //       rules={{
    //         required: 'Confirmation code is required',
    //       }}
    //     />

    //     <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

    //     <CustomButton
    //       text="Resend code"
    //       onPress={onResendPress}
    //       type="SECONDARY"
    //     />

    //     <CustomButton
    //       text="Back to Sign in"
    //       onPress={onSignInPress}
    //       type="TERTIARY"
    //     />
    //   </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 5,
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
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
    padding: 13,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  inputContainer: {
    height: 50,
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
    //fontFamily: `"Inter-Bold", "Inter", sans-serif`,
    color: '#064451',
    fontSize: 18,  
    marginLeft: 15,
    marginBottom: 10,
  },
  link:{
    color: 'blue'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    // backgroundColor:'#064451',
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
  },
  frame: {
    width: "90%",
    // boxShadow: "0px 14px 9px 0px rgba(0, 0, 0, 0.05)",
    backgroundColor: "rgb(247, 247, 247)",
    overflow: "visible",
    borderRadius: 15,
   
  },
   title: {
      textAlign: 'center',
      marginTop: 25,
      overflow: 'visible',
      fontWeight: "700",
      color: '#064451',
      fontSize: 20,  
      marginBottom: 30,    
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
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
    display: 'flex',
    flexWrap: 'nowrap'
  }
});

export default ConfirmEmailScreen;
