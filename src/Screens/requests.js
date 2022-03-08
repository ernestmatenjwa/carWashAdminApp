import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 Pressable,
 FlatList,
 TouchableOpacity,
Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const { width, height } = Dimensions.get("screen");

const carwash = [
  {
    id: '1',
    package: 'Full wash',
    date: '12/02',
    user: 'Alex Mathenjwa',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '2',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '3',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '4',
    package: 'Full wash',
    date: '12/02',
    user: 'Mpho Everlin',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '5',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '6',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '7',
    package: 'Full wash',
    date: '12/02',
    user: 'Alex Mathenjwa',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '8',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '9',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '10',
    package: 'Full wash',
    date: '12/02',
    user: 'Mpho Everlin',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '11',
    package: 'Full wash',
    date: '12/02',
    user: 'Gomolemo sibiya',
    carBrand: 'BMW - WWE 123 GP',
  },
  {
    id: '12',
    package: 'Full wash',
    date: '12/02',
    user: 'Shaun Lekalakala',
    carBrand: 'BMW - WWE 123 GP',
  },
];

export default function RequestScreen({ navigation }) {
  const [searchValue, onChangesearchValue] = React.useState('');

  return (
  <View style={{backgroundColor: "lightgrey"}} >
  <View style={{height: 10}}></View>
  <Input 
    onChangeText={onChangesearchValue} value={searchValue}
    inputContainerStyle={styles.inputContainer}
    inputStyle ={styles.inputText}
    placeholder="Search"
    rightIcon={ <Icon size={15} 
    style={styles.icon} name='search'/>}
  />
 <FlatList 
      style={{width: 356, paddingBottom: 0, height: width/0.61666 /*elevation: 50*/}}
      data={carwash}
      keyExtractor={item=>item.id}
      renderItem={({item}) => (
        <View >
          <View style={styles.userInfo}>
            <View style={styles.UserImgWrapper}>
            <Text style={styles.UserName}>{item.date}</Text>
            </View>
            <View style={styles.TextSection}>
              <View style={styles.UserInfoText}>
                <Text style={styles.packagee}>{item.package}</Text>
              </View>
              <Text style={styles.carbranndd}>{item.carBrand}</Text>
              <Text style={styles.u}>{item.user}</Text>
              <View style={styles.btns} >
                <Pressable style={{marginLeft: 150, borderColor: "lightgrey", borderWidth: 0.2, padding: 5, paddingLeft: 10, paddingRight: 10, height: 20 }}><Text style={{color: "red", marginTop: -7 }}>reject</Text></Pressable>
                  <Pressable style={{ borderColor: "lightgrey", borderWidth: 0.2, padding: 5, height: 20 }}><Text style={{color: "green", marginTop: -7 }}>approve</Text></Pressable>
                  </View>
            </View>
          </View>
        </View>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 6.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  inputContainer: {
    height: 50,
    borderRadius:20,
    //borderColor: '#064451',
    //borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"white",
  },
  inputText: {
    color: '#064451',
    fontWeight:'normal',
    padding: 13,
    paddingLeft:15,
    marginRight:5,
    borderRadius:20,
  },
  seachInput: {
    fontSize: 15,
    paddingRight:10,
    fontWeight: "bold",
    borderRadius: 20,
    width: width / 1.1,
    height: 50,
    backgroundColor: "#f8f8ff",
    marginTop: height / 90,
    alignSelf: 'center'
  },
  card: {
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  u: {
    fontSize: 10,
    color: "lightgrey",
    fontWeight: "700",
  },
  UserImgWrapper: {
    paddingTop: 50,
    paddingBottom: 15,
    marginLeft: 5,
  },
  UserImg: {
    width: 120,
    height: 70,
    borderRadius: 0,
  },
  icon:{
    color:'#064451',
    width:20,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 1,
    paddingTop: 3,
    paddingLeft: 5,
    marginLeft: 10,
    width: 300,
    //borderWidth: 0.1,
    //elevation: 100,
   // borderColor: "#cccccc",
    borderLeftColor: "#064451",
    borderLeftWidth: 7,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    backgroundColor: "white"
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -4,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 14,
    fontWeight: "bold",
    //margin: 20,
    //fontFamily: "Lato-Regular",
  },
  packagee: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#064451",
    color: "white",
    //fontFamily: "Lato-Regular",
  },
  carbranndd: {
    fontSize: 18,
    fontWeight: "500",
    //fontFamily: "Lato-Regular",
  },
  PostTime: {
    fontSize: 12,
    color: "#666",
    //fontFamily: "Lato-Regular",
  },
  MessageText: {
    fontSize: 14,
    color: "#333333"
  }
})