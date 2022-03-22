import "react-native-gesture-handler"
import React from 'react';
import { Text,
  View, 
  StyleSheet,
 Dimensions,
 Pressable,
 FlatList,
 Alert,
Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import moment from "moment";
import { listUserRequests } from "../graphql/queries";
import { updateUserRequests } from '../graphql/mutations';
import Iconicons from "react-native-vector-icons/Ionicons"
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';

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
  const [req, setReq] = React.useState([]);
  const [cur, setCur] = React.useState("PENDING WASH...");
  const [ad, setAd] = React.useState("");
  const com = async (id) => {
    try{
        const re = {
            id: id,
            status: "DONE!!",
        }
        const apdm = await API.graphql({query: updateUserRequests, variables: {input: re}});
        Alert.alert("Completed!!")
        
    } catch (e) {
      console.log(e)
        Alert.alert(e)
    } 
    //navigation.navigate("businessPage")
 }

  React.useEffect(() => {
    const fetchReq = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setAd(userInfo.attributes.sub)
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listUserRequests
          )
        )
        if(usersData.data.listUserRequests.items.length === 0)
        {
          Alert.alert("You have not made any request to any car wash yet")
          return
        }
        setReq(usersData.data.listUserRequests.items);
        for (let i = 0; i < usersData.data.listUserRequests.items.length; i++) {
          if(usersData.data.listUserRequests.items[i].brand === "BMW"){
            usersData.data.listUserRequests.items[i]
          }
        }
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchReq();
  }, [req])
  const filData = ad && cur
  ? req.filter(x => 
    x.packDesc.toLowerCase().includes(ad.toLowerCase()) && x.status.toLowerCase().includes(cur.toLowerCase())
    )
    : null
  return (
    <View style={{backgroundColor: "lightgrey", height: "100%",}} >
    <View style={{height: 10}}></View>
   <FlatList 
   style={{height:height/1.54}}
        data={filData}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
            <View style={styles.userInfo}>
                <Image style={styles.UserImg} source={{uri: item.carUrl}} />
              <View style={styles.TextSection}>
              <View style={styles.TimeDate}>
              <View style={{height: 15}}></View>
          <Text style={{color: COLORS.gray, fontSize: 9,}}>{moment(item.createdAt).format('DD MMMM YYYY, h:mm:ss a')}</Text>
        </View>
        <View style={[styles.FirstRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
          <Text style={styles.UserName}>{/*item.vehicleType}{' - '*/}{item.package} - R {item.totalDue}</Text>
        </View>
        <View><Text>{item.brand} {item.model} - {item.regNO}</Text></View>
        <View style={[styles.SecondRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
          <Text style={{color: COLORS.black, fontSize: 10}}>Service date: {item.serTime}</Text>
        </View>
     
        <Pressable 
        style={{marginLeft: "70%", }}
        onPress={() => com(item.id)}><Text style={{color: "green", fontSize: 16, fontWeight: "bold"}}>DONE</Text></Pressable>
              </View>
        </View> 
        )}
        ListEmptyComponent={<View 
          style={{flex: 1,
          alignItems: 'center',
          justifyContent: 'center',}}><Text 
          style={{fontWeight: 'bold', fontSize: 10, color: "green", }}>
            Sorry we currently do not have requests for you</Text>
            </View>}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecondRow: {

  },
  FirstRow: {

  },
  TimeDate: {

  },
  inputContainer: {
    //height: 50,
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
    width: width/1.03,
    height: 90,
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 13,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    //padding: 2,
  },
  UserImg: {
    width: 60,
    height: 60,
    borderRadius: 13,
    padding: 10,
    marginTop: 25,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingTop: 1,
    //marginLeft: -110,
    width: 300,
    
  },
  UserInfoText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  UserName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#064451",
  },
  MessageText:{
    fontWeight: 'bold',
    fontSize: 14, 
    color: "lightgrey",
  },

  UserImgWrapper: {
    padding: 30,
    //paddingBottom: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})