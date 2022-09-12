import { useState } from 'react';

import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSales, setSales] = useState(false)
  const [isPurch, setPurch] = useState(false)

  const handleLogin = () => {
    setIsLogin(true)
  }
  const handleLogout = () => {
    setIsLogin(false)
  }
  return (
    isLogin 
    ? 
    <HomeScreen logOut={handleLogout} /> 
    :
    <LoginScreen onLogin={handleLogin}/>
  )
}