import { useEffect, useState } from 'react';

import { LogBox } from 'react-native';

import Navigator from './src/navigations/Navigator';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {

  }, [])

  const handleLogin = ({payload}) => {
    setIsLogin(payload)
  }

  return (
    <Navigator 
      isLogin={isLogin}
      events = {(payload) => handleLogin({payload: payload})}
    />
  )
}