import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from './components/styles';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import { useState } from 'react';
import PackageScreen from './components/Package';

export default function App() {
  const [login, setLogin] = useState(false)
  const handleLogin = () => {
    setLogin(true)
  }
  const handleLogout = () => {
    setLogin(false)
  }
  return (
    //login?<HomeScreen onLogout={handleLogout}/>:<LoginScreen onLogin={handleLogin}/>
    <PackageScreen/>
  );
}


