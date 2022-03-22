import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground,
    Button,
    Alert,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Text,
    Dimensions,
    Image
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../../component';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import { listUserRequests } from "../graphql/queries";

const { width, height } = Dimensions.get("screen");

const HistoryScreen = () => {
  const [searchValue, onChangesearchValue] = React.useState('');
  const [req, setReq] = React.useState([]);
  const [date, setDate] = useState(new Date());
  const [text,setText] = useState('');
  const [cur, setCur] = React.useState("DONE!!");
  const [ad, setAd] = React.useState("");

  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  React.useEffect(() => {
    const currentDate = date;
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+' '+month[(tempDate.getMonth())]+' '+tempDate.getFullYear()
    let fTime = tempDate.getHours()+':' + tempDate.getMinutes();
    setText(fDate + ' ' + fTime)
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
    <View style={styles.container}>
      <View style={styles.SectionHeader}>
      </View> 
      <View style={styles.DetailBox} >
        <Text style = {{ fontSize: 20, color: '#808080', marginLeft: 5 }}>
          {text}
        </Text>
        <FlatList 
        data={filData}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <View style={styles.userInfo}>
          <Image style={styles.UserImg} source={{uri: item.carUrl}} />
        <View style={styles.TextSection}>
        <View style={styles.TimeDate}>
    <Text style={{color: COLORS.gray, fontSize: 9,}}>{moment(item.createdAt).format('DD MMMM YYYY, h:mm:ss a')}</Text>
  </View>
  <View style={[styles.FirstRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
    <Text style={styles.UserName}>{/*item.vehicleType}{' - '*/}{item.package} - R {item.totalDue}</Text>
  </View>
  <View><Text>{item.brand} {item.model} - {item.regNO}</Text></View>
  <View style={[styles.SecondRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
    <Text style={{color: COLORS.black, fontSize: 10}}>Service date was on : {item.serTime}</Text>
  </View>
  <View style={{}}>
        <Text style={{color: COLORS.black, fontSize: 10}}>Wash completed exactly at: {moment(item.updatedAt).format('DD MMMM YYYY, h:mm:ss a')}</Text>
        </View>
        </View>
  </View> 
        )}
        ListEmptyComponent={<View 
          style={{flex: 1,
          alignItems: 'center',
          justifyContent: 'center',}}><Text 
          style={{fontWeight: 'bold', fontSize: 10, color: "green", }}>
            Sorry we currently do not have requests history for you</Text>
            </View>}
      />
      </View>
      <View style={{height: 10}}></View> 
    </View>
  );
};
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

});

export default HistoryScreen;
