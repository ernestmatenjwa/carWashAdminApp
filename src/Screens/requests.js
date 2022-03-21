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
        console.log(re)
        const apdm = await API.graphql({query: updateUserRequests, variables: {input: re}});
        console.log("Completed!!")
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
        //return
        if(usersData.data.listUserRequests.items.length === 0)
        {
          Alert.alert("You have not made any request to any car wash yet")
          return
        }
        setReq(usersData.data.listUserRequests.items);
        console.log("req")
        for (let i = 0; i < usersData.data.listUserRequests.items.length; i++) {
          if(usersData.data.listUserRequests.items[i].brand === "BMW"){
            usersData.data.listUserRequests.items[i]
            console.log(i)
          }
          console.log(usersData.data.listUserRequests.items[i])
        }
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchReq();
  }, [req])
  const filData = ad && cur //PENDING WASH...
  ? req.filter(x => 
    x.packDesc.toLowerCase().includes(ad.toLowerCase()) && x.status.toLowerCase().includes(cur.toLowerCase())
    )
    : null
  return (
    <View style={{backgroundColor: "lightgrey", height: "100%",}} >
    <View style={{height: 10}}></View>
   
   <FlatList 
        data={filData}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
            // <View style={styles.userInfo}>
            //   <View style={styles.TextSection}>
            //     <View style={styles.UserInfoText}>
            //       <Text style={styles.packagee}>{item.package}</Text>
            //     </View>
            //     <Text style={styles.carbranndd}>{item.brand} - {item.regNO}</Text>
                
            //     <Text style={styles.UserName}>Service date: {item.serTime} | R {item.totalDue}</Text>
            //    <Pressable 
            //    onPress={() => com(item.id)}
            //    style={{
            //      marginLeft:"80%"
            //      }}>
            //        <Text style={{
            //          color: "green",  
            //          }}>
            //          DONE</Text>
            //          </Pressable> 
            //   </View>
            // </View>
            <View style={styles.userInfo}>
            <View style={styles.UserImgWrapper}>
                <Image style={styles.UserImg} source={{uri: item.carUrl}} />
            </View>
              <View style={styles.TextSection}>
              <Text style={{width: width/1.8,fontWeight: 'bold', fontSize: 12, color: "grey", marginLeft: "60%", marginTop: "10%"}}>{moment(item.createdAt).fromNow()}</Text>
                  <Text style={styles.UserName}>{item.package}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12, }}>{item.brand} - {item.model} - {item.regNO}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12, }}>Service Date: {item.serTime} </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12, }}>Subtotal: R {item.totalDue}</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 12, }}>Requester: {item.userName}</Text>
                 <View style={{flexDirection: 'row', paddingTop: "2%", marginLeft:"50%"}}>
                 <Pressable onPress={() => com(item.id)}><Text style={{color: "green", fontSize: 16, fontWeight: "bold", marginBottom: "40%"}}>DONE</Text></Pressable>
                  {/* <Pressable onPress={() => del(item.id)}><Text style={{flexDirection: "", color: "red", fontSize: 16, fontWeight: "bold"}}>DELETE</Text></Pressable> */}
                     </View> 
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
    width: width/1.03,
    height: "80%",
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    marginBottom: 5,
    //marginTop: 1,
    borderRadius: 13,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: 2,
  },
  UserImg: {
    width: width/4.7,
    height: height/9,
    borderRadius: 13,
    marginBottom: 15,
  },
  TextSection: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
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