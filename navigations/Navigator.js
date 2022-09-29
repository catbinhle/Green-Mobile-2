import {Text, StyleSheet, Image } from 'react-native'

import HomeScreen from '../components/HomeScreen'
import LoginScreen from '../components/LoginScreen'
import PackageScreen from '../components/Package'
import DetailScreen from '../components/DetailScreen'
import TourScreen from '../components/TourScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const LoginStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator()

const LoginStackNavigator = () => (
    <LoginStack.Navigator screenOptions={{headerShown:false}}>
        <LoginStack.Screen name='LoginScreen' component={LoginScreen}/>
        <LoginStack.Screen name='HomeScreen' component={TabsNavigator}/>
        <LoginStack.Screen name='PackageScreen' component={PackageScreen}/>
        <LoginStack.Screen name='DetailScreen' component={DetailScreen}/>
    </LoginStack.Navigator>
)

const TabsNavigator = () => (
    <Tabs.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused,color,size}) => {
            let iconName
            if(route.name === 'HomeScreen'){
                iconName = 'home'
                focused?size=35:size=20
                
            }else if(route.name === 'PackageScreen'){
                iconName = 'cube'
                focused?size=35:size=20

            }else if(route.name === 'TourScreen'){
                iconName = 'plane'
                focused?size=35:size=20
            }
            return <Icon name={iconName} size={size} color={color} />
        },
        tabBarLabelStyle:{
            fontSize:13,
        },
        tabBarStyle:{
            position:'absolute',
            margin:20,
            borderRadius:15,
        },
        headerShown:false,
        tabBarActiveTintColor:'steelblue',
        tabBarInactiveTintColor:'lightgray',
    })}
    >
        <Tabs.Screen name='HomeScreen' component={HomeScreen}/>
        <Tabs.Screen name='PackageScreen' component={PackageScreen}/>
        <Tabs.Screen name='TourScreen' component={TourScreen}/>
    </Tabs.Navigator>
)

const Navigator = () => {
    return (
        
    <NavigationContainer>
        <LoginStackNavigator/>
    </NavigationContainer>
            
    )
}

export default Navigator