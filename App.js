import React, { useState } from 'react';

import { LogBox } from 'react-native';

import LoginContext from './src/contexts/LoginContext';
import Navigator from './src/navigations/Navigator';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  // useEffect(() => {

  // }, [])

  // const handleLogin = ({payload}) => {
  //   setIsLogin(payload)
  // }

  return (
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
      <Navigator />
    </LoginContext.Provider>
  )
}