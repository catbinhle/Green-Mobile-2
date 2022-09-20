import {Text, StyleSheet, Image } from 'react-native'

import HomeScreen from '../components/HomeScreen'
import LoginScreen from '../components/LoginScreen'
import PackageScreen from '../components/Package'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const LoginStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator()

const LoginStackNavigator = () => {
    <LoginStack.Navigator screenOptions={{headerShown:false}}>
        <LoginStack.Screen name='LoginScreen' component={LoginScreen}/>
        <LoginStack.Screen name='HomeScreen' component={HomeScreen}/>
        <LoginStack.Screen name='PackageScreen' component={PackageScreen}/>
    </LoginStack.Navigator>
}

const Navigator = () => {
    return (
        
    <NavigationContainer>
        <LoginStackNavigator/>
    </NavigationContainer>
            
    )
}

export default Navigator