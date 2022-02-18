import * as React from 'react';
import { Text, View, StatusBar, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const image = { uri: "https://th.bing.com/th/id/OIP.p2Q3PvICv3cCa1XnpVlnKAHaE7?w=286&h=190&c=7&r=0&o=5&pid=1.7" };

const {width, height }= Dimensions.get("screen");
const options = [
  {
    key: 0,
    text: 'Truck',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "DC34HF GP"
  },
  {
    key: 1,
    text: 'Boats',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "FCK 344 KZN"
  },
  {
    key: 2,
    text: 'Contruction',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "DCH 342 NW"
  },
  {
    key: 3,
    text: 'Car',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "12434FD CT"
  },
  {
    key: 4,
    text: 'MotorBike',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  {
    key: 5,
    text: 'Tractor',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  {
    key: 6,
    text: 'Taxi',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  {
    key: 7,
    text: 'Bus',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  {
    key: 8,
    text: 'Van',
    model: 'Standard vehicle',
    imageURL: require('../assets/pictures/car.jpg'),
    regNumber: "Not Provided"
  },
  
];


export default function DocumentsScreen({ navigation }) {

  const Card = ({options}) =>{
     
    return(<View style={styles.card}>
        <View style={{height: height/13, alignItems: 'center'}}>
        <Image 
         style={{flex: 1, resizeMode: 'contain', width: width/3.2, height: height/1, borderTopLeftRadius:40, borderTopRightRadius: 40}}
        source={options.imageURL}/>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 10}}>{options.text}</Text>
      <Text style={{fontWeight: 'bold', fontSize: 7, marginTop: 10}}>{options.model}</Text>
      <View>
      <View style={{alignItems: 'flex-end'}}>
      <View style={{width: 11, height: 11, borderRadius: 15, backgroundColor: '#009387', marginTop: 2}}></View>
      </View>
      </View>
      
    </View>)
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#009387" barStyle="light-content"/>
      <View style={{height: 170, backgroundColor: "#009387" , borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()}  style={{color: "#fff", marginRight: 300}}/>
      <View style={{marginLeft: 55}}>
          <Text style={{fontSize: 35, fontWeight: "bold", color: "#fff"}}>Vehicle Type</Text>
        </View>
        </ImageBackground>
      </View>
      <Text style={{marginTop: 30, marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: '#009387'}}>Select the vehicle you provide service for</Text>
      <FlatList 
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={{
        marginTop: 20,
        paddingBottom: 20
      }}
      numColumns={3} 
      data={options} 
      renderItem={({item}) => <Card options={item}/>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height:'100%',
    width:"100%",
    justifyContent:'center',
    alignItems:"center",
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    overflow:'hidden'
    },

    card: {
      height: 150,
      backgroundColor: "#fff",
      width: width/3-10,
      marginHorizontal: 2,
      borderRadius: 10,
      marginBottom: 20,
      padding: 10
    }
})