import Recat,{useState} from 'react';
import { Text, View,ScrollView } from 'react-native';

export default function StaffScreen({ navigation }) {
  const [people,setPeople] =useState([
    {name:'karabo',jobTitle:'CEO',email:'k@gmail.com',key:'1'},
    {name:'Alex',key:'2'},
    {name:'Gomolemo',key:'3'},
    {name:'Shaun',key:'4'},
    {name:'Mpho',key:'5'},
    {name:'Innocent',key:'6'},
  ]);
  return (
    <ScrollView>
      {people.map(item =>(
        <View key={item.key}>
          <Text >{item.name}</Text>
        </View>
      ))}
    
    </ScrollView>
  );
}
