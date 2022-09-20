
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import PackageScreen from './components/Package';
import Navigator from './navigations/Navigator';

import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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
      
      <Navigator/>
    
  );
}


