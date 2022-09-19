// import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Images from '../../assets';
import HomeScreen from '../HomeScreen';
import LoginScreen from '../LoginScreen';
import PurchaseScreen from '../PurchaseScreen';
import SaleScreen from '../SaleScreen';
import WelcomeScreen from '../WelcomeScreen';

const LoginStack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const LoginStackNavigator = ({events}) => (
    <LoginStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <LoginStack.Screen 
            name='Welcome' 
            component={WelcomeScreen}/>
        <LoginStack.Screen 
            name='Login' 
            component={() => <LoginScreen onLogin={() => events(true)}/>}/>
    </LoginStack.Navigator>
)

const TabsNavigator = ({events}) => (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            // let iconName;

            // if (route.name === 'Home') {
            //     iconName = 'home'
            // } else if (route.name === 'News') {
            //     iconName = 'film'
            // } else {
            //     iconName = 'bars'
            // }
            // return <Icon name={iconName} size={size} color={color}/>
            let tabIcon

            if (route.name === 'Home') {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            } else if(route.name === 'Purchase') {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            } else {
                tabIcon = focused ? Images.tabs.homeActive : Images.tabs.homeInactive
            }
            return <Image source={tabIcon} style={{width: size, height: size, resizeMode: 'cover'}}/>
        },
        // tabBarActiveTintColor: 'white',
        // tabBarInactiveTintColor: '#81898a',
        size: 20,
        headerShown: false,
        tabBarStyle: {
            // backgroundColor: '#7f5bc7'
            backgroundColor: 'white'
        }
    })}
    >
        <Tabs.Screen 
            options={{title: ""}} 
            name='Home' 
            component={() => <HomeScreen logout={() => events(false)}/> }
        />
        <Tabs.Screen options={{title: ""}}  name='Purchase'  component={PurchaseScreen}/>
        <Tabs.Screen options={{title: ""}}  name='Sale'  component={SaleScreen}/>
    </Tabs.Navigator>
)

const Navigator = ({
    isLogin,
    events
}) => {
    return (
        <NavigationContainer>
            {
            isLogin 
            ? 
            <TabsNavigator events={events}/> 
            :
            <LoginStackNavigator events={events}/>
            }
        </NavigationContainer>
    )
}

export default Navigator