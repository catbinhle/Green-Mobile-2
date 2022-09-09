import { useState } from 'react';

import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const handleLogin = () => {
    setIsLogin(true)
  }
  return (
    isLogin 
    ? 
    <HomeScreen /> 
    :
    <LoginScreen onLogin={handleLogin}/>
  )
}