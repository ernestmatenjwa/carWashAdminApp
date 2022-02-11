import * as React from 'react';
import { Text, View } from 'react-native';

export default function DashBoadScreen({ navigation }) {
  return (
    <View>
       <Text onPress={() =>  navigation.push("HistoryScreen")} style={{fontSize:20}}>HistoryScreen</Text>
       <Text onPress={() =>  navigation.push("BusinessProfileScreen")} style={{fontSize:20}}>BusinessProfileScreen</Text>
       <Text onPress={() =>  navigation.push("RequestScreen")} style={{fontSize:20}}>RequestScreen</Text>
    </View>
  );
}