import { useState } from 'react';

import HomeScreen from './src/HomeScreen';
import MainScreen from './src/LoginScreen';

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const handleLogin = () => {
    setIsLogin(true)
  }
  const handleLogout = () => {
    setIsLogin(false)
  }
  return (
    // isLogin
    //   ?
    //   <HomeScreen onLogout={handleLogout} />
    //   :
    //   <MainScreen onLogin={handleLogin} />
    <MainScreen /> 
  )
}