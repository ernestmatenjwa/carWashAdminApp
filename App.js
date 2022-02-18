import "react-native-gesture-handler"
import React from "react"
import HomeScreen from "./Screens/HomeScreen";
import SignupScreen from "./components/Signup";
import LoginScreen from "./components/Login";
import DashBoadScreen from "./Screens/dashBoard";
import MessagesScreen from "./Screens/messagesScreen";
import HistoryScreen from "./components/history";
import BusinessProfileScreen from "./components/BusinessProfile";
import RequestScreen from "./components/requests";
import AdminProfileScreen from "./components/adminProfile"
import ChatScreen from "./components/chatScreen";
import InformationScreen from "./components/information";
import DocumentsScreen from "./components/documents";
import StaffScreen from "./components/staff";
import VehicleTypeScreen from "./components/vehicletype";
import BusinessPageScreen from "./components/businesspage";
import AdminEdit from "./Screens/adminEdit";
import BusineEdit from "./Screens/busEdit";

import Iconicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// const Stack = createNativeStackNavigator();
// const MaterialBottomTabs = createBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();
// const MaterialDrawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const locationStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const DashStackScreen = () => {
  return(
    <locationStack.Navigator>
        <locationStack.Screen name="Home" 
        component={DashBoadScreen} 
        options={{header: () => null}} />
        <locationStack.Screen name="Messanger" 
        component={MessagesScreen} />
        <locationStack.Screen name="AdminProfileScreen" component={AdminProfileScreen} />
    </locationStack.Navigator>
  )
}

const TabScreen = () => {
  return(
    <Tabs.Navigator
     screenOptions={({route}) => ({
       tabBarIcon: ({focused, color, size}) => {
         let iconName;
         let rn = route.name;

         if (rn === 'LocationScreenStack') {
           iconName = focused ? 'home' : 'home-outline'
         } else if (rn === 'Messanger') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
         } else if (rn === 'businessPage') {
          iconName = focused ? 'person' : 'person-outline'
         }
      
        return <Iconicons name={iconName} size={size} color={"#064451"} />
       },
      //https://ionic.io/ionicons
     })}
    >
        <Tabs.Screen name="LocationScreenStack" 
        component={DashStackScreen}
        options={{
          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600",
            fontSize: 30,
            padding: 20,
          },
          headerStyle: {
            height: 100,
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerBackTitleVisible: false,
        }}
        />
        <locationStack.Screen 
        name="Messanger" 
        component={MessagesScreen}
        options={{
          title: 'Messages',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600",
            fontSize: 30,
          },
          headerStyle: {
            height: 120,
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
          headerBackTitleVisible: false,
        }}
        />
        <locationStack.Screen name="businessPage" 
        children={TabScreen2}
        options={{
          title: 'Business Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 40,
            padding: 20,
          },
          headerStyle: {
            height: 140,
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        }}
        />
    </Tabs.Navigator>
  )
}

const TabScreen2 = () => {
  return(
    <MaterialTopTabs.Navigator
    screenOptions={{
      tabBarLabelStyle: {
         fontSize: 12, 
         fontWeight: "bold",
         textTransform: "none",
         color: "#064451"
        },
      tabBarStyle: { 
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
       },
       tabBarIndicatorStyle:{
         backgroundColor: "#064451",
         width: 100,
         marginHorizontal: 40,
       },
    }}
    >
        <ProfileStack.Screen name="Admin Profile" 
        component={AdminProfileScreen} />
        <ProfileStack.Screen name="business Profile" component={BusinessProfileScreen}  />
    </MaterialTopTabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Splash" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{header: () => null}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}} />
        <Stack.Screen 
        name="AdminEdit" 
        component={AdminEdit}
        options={{
          title: 'Edit Admin profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 40,
            padding: 20,
          },
          headerStyle: {
            height: 140,
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        }}
         />
        <Stack.Screen 
        name="BusineEdit" 
        component={BusineEdit} 
        options={{
          title: "Edit Business Profile",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600"
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
            height: 200
          },
        }} 
        />
        <Stack.Screen name="BusinessProfileScreen" component={TabScreen2} />
        <Stack.Screen name="DashBoadScreen" component={TabScreen} options={{header: () => null}} />
        <Stack.Screen name="HistoryScreen" 
        component={HistoryScreen}
        options={({route}) => ({
          title: "History",
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600"
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })}
        />
        <Stack.Screen 
          name="RequestScreen" 
          component={RequestScreen}
          options={({route}) => ({
            title: "Requests",
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: "#064451",
              fontWeight: "700",
              fontSize: 25,
            },
            headerStyle: {
               backgroundColor: "lightgrey",
            }
          })} 
        />
        <Stack.Screen 
        name="ChatScreen"
        component={ChatScreen} 
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "white",
            fontWeight: "600"
          },
          headerStyle: {
            backgroundColor: '#064451',
            shadowColor: '#064451',
            elevation: 0,
          },
        })}
        />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
        <Stack.Screen name="DocumentsScreen" component={DocumentsScreen} />
        <Stack.Screen name="StaffScreen" component={StaffScreen} />
        <Stack.Screen name="VehicleTypeScreen" component={VehicleTypeScreen} />
        <Stack.Screen name="BusinessPageScreen" component={BusinessPageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}