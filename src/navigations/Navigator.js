import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home'
            } else if (route.name === 'News') {
                iconName = 'film'
            } else {
                iconName = 'bars'
            }
            return <Icon name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#81898a',
        size: 24,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#7f5bc7'
        }
    })}
    >
        <Tabs.Screen 
            name='Home' 
            component={() => <HomeScreen logout={() => events(false)}/> }
        />
        <Tabs.Screen name='Purchase'  component={PurchaseScreen}/>
        <Tabs.Screen name='Sale'  component={SaleScreen}/>
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