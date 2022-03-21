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
    console.log(text)
    
    const fetchReq = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      setAd(userInfo.attributes.sub)
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listUserRequests
          )
        )
        console.log(usersData.data.listUserRequests.items.length)
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
  const filData = ad
  ? req.filter(x => 
    x.packDesc.toLowerCase().includes(ad) //&& x.status.toLowerCase().includes(cur.toLowerCase())
    )
    : null
  const _renderItem = ({item, index}) => {
    return (
      <View marginVertical={10} marginHorizontal={15} style={{}}>
        <TimeDate>
          <McText body3 style={{color: COLORS.gray, fontSize: 9}}>{item.o_date}</McText>
        </TimeDate>
        <FirstRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{item.brand}{' - '}{item.regNO}</McText>
          <McText body3 style={{color: COLORS.black}}>{/*item.vehicleType}{' - '*/}{item.package}</McText>
        </FirstRow>
        <SecondRow style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          <McText body3 style={{color: COLORS.black}}>{item.userName}</McText>
          <McText h3 style={{color: '#0B6F83', fontWeight: 'bold'}}>R {item.totalDue}</McText>
        </SecondRow>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.SectionHeader}>
        {/* <ImageBackground
          resizeMode='cover'
          source={images.hero_bg}
          style = {{
            width: '100%',
            height: '50%',
          }}
          imageStyle= {{opacity:0.5}}
        >
        </ImageBackground> */}
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
          <Text style={{color: COLORS.gray, fontSize: 9,}}>{item.serTime}</Text>
        </View>
        <View style={[styles.FirstRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
          <Text style={{color: COLORS.black}}>{item.brand}{' - '}{item.regNO}</Text>
          <Text style={{color: COLORS.black}}>{/*item.vehicleType}{' - '*/}{item.package}</Text>
        </View>
        <View style={[styles.SecondRow, {flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}]}>
          <Text style={{color: COLORS.black}}>{item.serTime}</Text>
          <Text h3 style={{color: '#0B6F83', fontWeight: 'bold'}}>R {item.totalDue}</Text>
        </View>
              </View>
            </View>
        )}
      />
      </View>
      <View style={{height: 10}}></View> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 6.8,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  DetailBox: {
    width: "95%",
    height: "490%",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 12,
    top: "-120%",
    left: 10,
    //padding: 10,
  },
  SectionHeader: {
    width: "100%",
    height: 220,
    backgroundColor: "#064451",
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  SecondRow: {

  },
  FirstRow: {

  },
  TimeDate: {

  },
  inputContainer: {
    height: 50,
    borderRadius:20,
    //borderColor: '#064451',
    //borderWidth: 1,  
    paddingRight:10,
    backgroundColor:"white",
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'blue',
    fontSize: 24,
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
    paddingBottom: 2,
    paddingTop: 2,
    marginLeft: "-5%",
    width: "95%",
  },
  u: {
    fontSize: 10,
    color: "lightgrey",
    fontWeight: "700",
  },
  UserImgWrapper: {
    //paddingRight: 50,
    //paddingBottom: 15,
    //marginLeft: 5,
  },
  UserImg: {
    width: 20,
    height: 20,
    borderRadius: 0,
    marginLeft: "7%"
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
    paddingRight: 5,
    marginLeft: "3%",
    width: "90%",
    
    //borderWidth: 0.1,
    //elevation: 100,
   // borderColor: "#cccccc",
    borderLeftColor: "#064451",
    borderLeftWidth: 7,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "white", borderWidth: 1, borderColor: "grey",
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
    color: "#064451",
    //color: "white",
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
});

export default HistoryScreen;
