// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { auth } from '../CleanWave/database/firebase'
import { useNavigation } from '@react-navigation/core'

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import CollectionScreen from './pages/CollectionScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import MapScreen from './pages/MapScreen';
import LoginScreen from './pages/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CollectionStack() {
  return (
      <Stack.Navigator
        initialRouteName="Collection"
        screenOptions={{headerShown: false}}
        >

          <Stack.Screen
          name="Collection"
          component={CollectionScreen} />
      </Stack.Navigator>
  );
}

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        >
          <Stack.Screen
          name="Home"
          component={HomeScreen} />
          <Stack.Screen
          name="Details"
          component={DetailsScreen} /> 
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function LoginStack() {
  
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator
      initialRouteName="Map"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Map"
        component={MapScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
 
  const navigation = useNavigation();

  const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          navigation.navigate('Login')       
        })
        .catch(error => alert(error.message))
    }
  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#3c85d9' },
          headerTintColor: '#fff',
          headerRight: () =>  (<Button
            onPress={handleSignOut}
            title="Logout"
            color="#fff"
          />),

          
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'CollectionStack') {
              iconName = focused
                ? 'checkbox-marked-circle'
                : 'checkbox-marked-circle-outline';
            }else if(route.name === 'HomeStack') {
              iconName = focused
                ? 'home-circle'
                : 'home-circle-outline';
            }else if(route.name === 'MapStack') {
              iconName = focused
                ? 'map-marker'
                : 'map-marker-outline';
            }else if(route.name === 'ProfileStack') {
              iconName = focused
                ? 'account-settings'
                : 'account-settings-outline';
            }else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'cog'
                : 'cog-outline';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
        })}>
          

        <Tab.Screen
          name="CollectionStack"
          component={CollectionStack}
          options={{
            tabBarLabel: 'Collected',
            title: 'Collected',
          }}  />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
          }}  />
        <Tab.Screen
          name="MapStack"
          component={MapStack}
          options={{
            tabBarLabel: 'Map',
            title: 'Map'
          }} /> 
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile'
          }} /> 
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            title: 'Setting'
          }} />
      </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Profile" component={HomeTabs} />
        <Stack.Screen name="Maps" component={HomeTabs} />
        <Stack.Screen name="Settings" component={HomeTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
