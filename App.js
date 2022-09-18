import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './components/styles';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PackageScreen from './components/Package';

export default function App() {
  const [login, setLogin] = useState(false)
  const handleLogin = () => {
    setLogin(true)
  }
  const handleLogout = () => {
    setLogin(false)
  }
  const Stack = createNativeStackNavigator();
  
  return (
      //login?<HomeScreen onLogout={handleLogout}/>:<LoginScreen onLogin={handleLogin}/>
      //<PackageScreen/>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='PackageScreen' component={PackageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    
  );
}


