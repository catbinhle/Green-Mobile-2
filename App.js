import { useEffect, useState } from 'react';

import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';


export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  
  useEffect(() => {

  }, [])

  const handleLogin = ({payload}) => {
    setIsLogin(payload)
  }
  
  return (
    isLogin 
    ? 
    <HomeScreen logout={() => handleLogin({payload: false})}/> 
    :
    <LoginScreen onLogin={() => handleLogin({payload: true})}/>
  )
}