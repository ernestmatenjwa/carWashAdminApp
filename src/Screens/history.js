// import "react-native-gesture-handler"
// import React from 'react';
// import { Text,
//   View, 
//   StyleSheet,
//  Dimensions,
//  Pressable,
//  FlatList,
//  SafeAreaView,
// Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/MaterialIcons';
// import {
//   Auth, 
//   API,
//   graphqlOperation,
// } from 'aws-amplify';
// import { listRequests } from "../graphql/queries";

// const { width, height } = Dimensions.get("screen");

// const carwash = [
//   {
//     id: '1',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Alex Mathenjwa',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '2',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Gomolemo sibiya',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '3',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Shaun Lekalakala',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '4',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Mpho Everlin',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '5',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Gomolemo sibiya',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '6',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Shaun Lekalakala',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '7',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Alex Mathenjwa',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '8',
//     package: 'Full wash',
//     price: '12/02',
//     price: '150',
//     user: 'Gomolemo sibiya',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '9',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Shaun Lekalakala',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '10',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Mpho Everlin',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '11',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Gomolemo sibiya',
//     carBrand: 'BMW - WWE 123 GP',
//   },
//   {
//     id: '12',
//     package: 'Full wash',
//     date: '12/02',
//     price: '150',
//     user: 'Shaun Lekalakala',
//     carBrand: 'BMW - WWE 123 GP',
//   },
// ];

// export default function RequestScreen({ navigation }) {
//   //const [searchValue, onChangesearchValue] = React.useState('');
//   const [req, setReq] = React.useState([]);

//   React.useEffect(() => {
   
//     const fetchReq = async () => {
//       try {
//         const usersData = await API.graphql(
//           graphqlOperation(
//             listRequests
//           )
//         )
//         //return
//         if(usersData.data.listRequests.items.length === 0)
//         {
//           Alert.alert("You have not made any request to any car wash yet")
//           return
//         }
//         setReq(usersData.data.listRequests.items);
//         console.log("req")
//         for (let i = 0; i < usersData.data.listRequests.items.length; i++) {
//           if(usersData.data.listRequests.items[i].brand === "BMW"){
//             usersData.data.listRequests.items[i]
//             console.log(i)
//           }
//           console.log(usersData.data.listRequests.items[i])
//         }
//       } catch (e) {
//         console.log(e);
//       }
   
//     }
//     fetchReq();
//   }, [req])
//   return (
//     <SafeAreaView>
//        <View style={{height: height/4.8, backgroundColor: "#064451", width: width,}}>
//         <Icon1 name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "white", margin: "5%"}}/>
//            <Text style={{color: "white", fontSize:50, fontWeight:"600", alignSelf: "center", marginTop: "-5%"}}>History</Text>
//         </View>
        
//          <LinearGradient
//            colors={['white', 'white']}
//            style={[styles.signIn, {marginTop: -height/25, width: "95%", alignSelf: "center", borderTopEndRadius: 20, borderTopLeftRadius: 20, borderWidth: 1}]}
//         >
//           <FlatList 
//       style={{width: width, paddingBottom: 0, height: height/1.1 /*elevation: 50*/}}
//       data={req}
//       keyExtractor={item=>item.id}
//       renderItem={({item}) => (
        
//           <View style={styles.userInfo}>
//             <View style={styles.TextSection}>
//               <Text style={{paddingTop: 10}}>{item.o_date}</Text>
//               <Text style={styles.carbranndd}>{item.brand}</Text>
//               <Text>{item.package}</Text>
//               <Text style={styles.u}><Icon size={10}  name='user'/>{item.userName}</Text>
//               <View style={styles.btns} >
//                 <Text style={{marginLeft: "50%", marginTop: "-5%", fontWeight: "700"}}>Total: R{item.totalDue}</Text>
//                   </View>
//             </View>
//           </View>
//       )}
//     />
            
//         </LinearGradient>
    
//     </SafeAreaView>
  
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: height / 6.8,
//     borderBottomRightRadius: 20,
//     borderBottomLeftRadius: 20,
//   },
//   inputContainer: {
//     height: 50,
//     borderRadius:20,
//     //borderColor: '#064451',
//     //borderWidth: 1,  
//     paddingRight:10,
//     backgroundColor:"white",
//   },
//   inputText: {
//     color: '#064451',
//     fontWeight:'normal',
//     padding: 13,
//     paddingLeft:15,
//     marginRight:5,
//     borderRadius:20,
//   },
//   seachInput: {
//     fontSize: 15,
//     paddingRight:10,
//     fontWeight: "bold",
//     borderRadius: 20,
//     width: width / 1.1,
//     height: 50,
//     backgroundColor: "#f8f8ff",
//     marginTop: height / 90,
//     alignSelf: 'center'
//   },
//   card: {
//     width: "100%",
//   },
//   userInfo: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingBottom: 20,
//   },
//   u: {
//     fontSize: 10,
//     color: "lightgrey",
//     fontWeight: "700",
//   },
//   UserImgWrapper: {
//     paddingTop: 50,
//     paddingBottom: 15,
//     marginLeft: 5,
//   },
//   UserImg: {
//     width: 120,
//     height: 70,
//     borderRadius: 0,
//   },
//   icon:{
//     color:'#064451',
//     width:20,
//   },
//   TextSection: {
//     flexDirection: "column",
//     justifyContent: "center",
//     paddingBottom: 1,
//     paddingTop: 3,
//     //paddingLeft: 5,
//     //marginLeft: 10,
//     width: width,
//     //borderWidth: 0.1,
//     //elevation: 100,
//    // borderColor: "#cccccc",
//     //borderLeftColor: "#064451",
//     //borderLeftWidth: 7,
//     //borderTopLeftRadius: 7,
//     //borderBottomLeftRadius: 7,
//     //backgroundColor: "white"
//   },
//   UserInfoText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: -4,
//   },
//   btns: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 5,
//   },
//   UserName: {
//     fontSize: 14,
//     fontWeight: "bold",
//     //margin: 20,
//     //fontFamily: "Lato-Regular",
//   },
//   packagee: {
//     fontSize: 18,
//     fontWeight: "bold",
//     backgroundColor: "#064451",
//     color: "white",
//     //fontFamily: "Lato-Regular",
//   },
//   carbranndd: {
//     fontSize: 18,
//     fontWeight: "500",
//     //fontFamily: "Lato-Regular",
//   },
//   PostTime: {
//     fontSize: 12,
//     color: "#666",
//     //fontFamily: "Lato-Regular",
//   },
//   MessageText: {
//     fontSize: 14,
//     color: "#333333"
//   }
// })
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
    SafeAreaView,
    Dimensions
} from 'react-native';
import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants';
import { McText, McIcon } from '../../component';
import {
  Auth, 
  API,
  graphqlOperation,
} from 'aws-amplify';
import { listRequests } from "../graphql/queries";

const { width, height } = Dimensions.get("screen");

const HistoryScreen = () => {
  const [searchValue, onChangesearchValue] = React.useState('');
  const [req, setReq] = React.useState([]);
  const [date, setDate] = useState(new Date());
  const [text,setText] = useState('');

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  React.useEffect(() => {
    const currentDate = date;

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+' '+month[(tempDate.getMonth())]+' '+tempDate.getFullYear()
    let fTime = tempDate.getHours()+':' + tempDate.getMinutes();
    setText(fDate + ' ' + fTime)
    console.log(text)
    const fetchReq = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listRequests
          )
        )
        //return
        if(usersData.data.listRequests.items.length === 0)
        {
          Alert.alert("You have not made any request to any car wash yet")
          return
        }
        setReq(usersData.data.listRequests.items);
        console.log("req")
        for (let i = 0; i < usersData.data.listRequests.items.length; i++) {
          if(usersData.data.listRequests.items[i].brand === "BMW"){
            usersData.data.listRequests.items[i]
            console.log(i)
          }
          console.log(usersData.data.listRequests.items[i])
        }
      } catch (e) {
        console.log(e);
      }
   
    }
    fetchReq();
  }, [req])
  
  const _renderItem = ({item, index}) => {
    return (
      <View marginVertical={10} marginHorizontal={15}>
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
      <SectionHeader>
        <ImageBackground
          resizeMode='cover'
          source={images.hero_bg}
          style = {{
            width: '100%',
            height: '100%',
          }}
          imageStyle= {{opacity:0.5}}
        >
        </ImageBackground>
      </SectionHeader> 
      <DetailBox >
        <McText style = {{ fontSize: 20, color: '#808080', marginLeft: 5 }}>
          {text}
        </McText>
          <FlatList 
            keyExtractor={(item) => 'event_' + item.id}
            data={req}
            renderItem={_renderItem}
          />
      </DetailBox> 
    </View>
  );
};

const TimeDate = styled.View`
`;

const FirstRow = styled.View`
`;

const SecondRow = styled.View`
`;

const SectionHeader = styled.View`
  width: 100%;
  height: 220px;
  background-color: ${COLORS.black}
  flex-direction: row;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const DetailBox = styled.View`
  width: 90%;
  height: 550px;
  border-radius: ${SIZES.radius};
  background-color: ${COLORS.white};
  elevation: 12;
  top: -80;
  left: 20;
  padding: 10px;
`;

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
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});

export default HistoryScreen;
