import React from "react";
import { View,
  Text,
  StyleSheet,
  Image, 
  Dimensions, 
  FlatList, 
  TouchableOpacity,
  ImageBackground  } from "react-native";
import COLORS from '../constants/colors';
import img from '../../assets/pictures/person.png';
import Iconicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("screen");

export default function StaffScreen({ navigation }) {
  const [people,setPeople] =React.useState([
    {name:'karabo',jobTitle:'CEO',email:'k@gmail.com',key:'1'},
    {name:'Alex',key:'2'},
    {name:'Gomolemo',key:'3'},
    {name:'Shaun',key:'4'},
    {name:'Mpho',key:'5'},
    {name:'Innocent',key:'6'},
  ]);
  const staff = [
    {
      id: '1',
      names: 'Alex Mathenjwa',
      position: 'Senior Developer',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
    {
      id: '2',
      names: 'Gomolemo sibiya',
      position: 'UI designer',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
    {
      id: '3',
      user: 'Shaun Lekalakala',
      position: 'Developer',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
    {
      id: '4',
      user: 'Mpho Everlin',
      position: 'Scrum master',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
    {
      id: '5',
      names: 'Karabo Molepo',
      position: 'Developer',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
    {
      id: '6',
      names: 'Innocent',
      position: 'Project Manager',
      fone: '0729476167',
      profile: require('../../assets/pictures/person.png'),
    },
  ];
  return (
    <View style={styles.container}>
    <View style={{marginTop:"1%", 
                  width:'100%',
                  flexDirection:'row', 
                  flexWrap:'wrap',
                  justifyContent:'center',
                  }}>
    <TouchableOpacity
     style={[styles.inner, {}]}
     >
          <View>
        <Image 
           source={img}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
           <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Gomolemo Sibiya</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>UI designer</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      >
        <View>
        <Image 
           source={img} 
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
                   <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Alex Mathenjwa</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>Senior Developer</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      >
        <View>

        <Image 
           source={img}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
                    <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Shaun Lekalakala</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>Developer</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      >
        <View>
        <Image 
           source={img}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
                  <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Mpho</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>Scrum Master</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
       
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      >
        <View>
        <Image 
           source={img}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
                   <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Innocent</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>Project Manager</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
        
      </TouchableOpacity>   
      <TouchableOpacity 
      style={styles.inner}
      >
        <View>
        <Image 
           source={img}
           style={{marginTop: "2%", width:150, height:100, borderRadius: 5, width: width/4.7,
           height: height/9,
           borderRadius: 40,
           marginBottom: 15, alignSelf: "center"}}
           />
          <Text style={{alignSelf:"center", color: "#064451", fontWeight: "bold", fontSize: 15 }}>Karabo Molepo</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>Developer</Text>
           <Text style={{alignSelf:"center", color: "green", fontSize: 16,  }}>0729476167</Text>
        </View>
        
      </TouchableOpacity>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
},
actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
container: {
    backgroundColor: COLORS.gray,
    flex: 1,
  },
  item: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 35,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  subHeader:{
    color: COLORS.tial,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 15,

  },
  price:{
    fontSize: 15,
    //marginRight: -85,
    marginTop: -23,
    fontWeight: 'bold',
    marginRight: "50%"
  },
  userInfo: {
    width: width/1.122,
    height: 130,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    //justifyContent: "space-between",
    //marginHorizontal: 2,
    //marginBottom: 0,
    marginTop: 3,
    borderRadius: 5,
  },
  UserImg: {
    width: width/2.7,
    height: height/8,
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
    color: COLORS.lightGray
  },

  UserImgWrapper: {
    paddingTop: 12,
    paddingBottom: 2,
    paddingLeft: 2,
  },
  inner:{
    backgroundColor:'#ffffff',
    alignItems:'center',
    height:"35%",
    width: "45%",
    //borderRadius:100,
    margin:4,
    marginTop: "3%"
    //padding:5,
      
  },
  inner2:{
    //backgroundColor:'#064451',
//alignItems:'center',
   height:60,
    //borderRadius:10,
    margin:4,
    marginTop: 20,
    //padding:5,
    width: 340,
},
inner3:{
 // backgroundColor:'lightgrey',
 //alignItems:'center',
 height:200,
 width: 340,
  //borderRadius:10,
  margin:4,
  marginTop: 20,
  //padding:5,
  //borderLeftColor: "#064451",
  //borderLeftWidth: 15,
  //backgroundColor: "#064451"
},
  subHeader:{
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 17,

  },
  header:{
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

})
