import { useEffect, useState } from 'react';

import { LogBox } from 'react-native';

import Navigator from './src/navigations/Navigator';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
<<<<<<< HEAD
  const [isSales, setSales] = useState(false)
  const [isPurch, setPurch] = useState(false)

  const handleLogin = () => {
    setIsLogin(true)
=======

  useEffect(() => {

  }, [])

  const handleLogin = ({payload}) => {
    setIsLogin(payload)
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
  }
  const handleLogout = () => {
    setIsLogin(false)
  }
  return (
<<<<<<< HEAD
    isLogin 
    ? 
    <HomeScreen logOut={handleLogout} /> 
    :
    <LoginScreen onLogin={handleLogin}/>
=======
    <Navigator 
      isLogin={isLogin}
      events = {(payload) => handleLogin({payload: payload})}
    />
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
  )
}