import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import App from '../App'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const loginScreen = ({
    onLogin
}) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [secure, setSecure] = useState(true)

    const handleLogin = () => {
        if(email.length === 0){   
            setErrorEmail(true)
            alert('Please input your email')
        }
        else if(pass.length === 0){
            setErrorPass(true)
            alert('Please input your password')
        }
        else
            onLogin()
    }

    const handleShowPass = () => {
        setSecure(!secure)
    }
  return (
    <View style={styles.container}>
      <View style={styles.top}>

        <View style={styles.backgroundimg}>
          <Image source={require('../assets/background.jpg')} />
        </View>

        <View style={styles.titleWelcome}>        
          <Text style={{fontSize:30,fontWeight:'bold',marginLeft:20}}>Welcome,</Text>
          <Text style={{fontSize:20,marginLeft:20}}>Sign in to continue!</Text>
          
        <View style={{
            borderColor:'red',
            borderWidth: errorEmail?1:0,
            marginHorizontal:20,
            marginTop:20,
            padding:15,
            borderRadius:15,
            backgroundColor:'white',
            elevation:5,
            shadowColor:'gray',
            shadowOpacity:5,
            shadowRadius:5,
            shadowOffset:{
              height:5,
              width:5,
            }
        }}>
            <TextInput 
            onChangeText={(email)=>{setEmail(email)}}
            style={{fontSize:15}} 
            placeholder='Email Address'
            ></TextInput>
        </View>

        <View style={{
            borderColor:'red',
            borderWidth: errorPass?1:0,
            marginHorizontal:20,
            marginTop:15,
            padding:15,
            borderRadius:15,
            backgroundColor:'white',
            elevation:5,
            hadowColor:'gray',
            shadowOpacity:1,
            shadowRadius:5,
            shadowOffset:{
              height:5,
              width:5,
            },
            flexDirection:'row',
            justifyContent:'space-between',
            right:0
        }}>
            <TextInput 
            onChangeText={(pass) =>{setPass(pass)}}
            secureTextEntry={secure} 
            style={{fontSize:15,width:'92%'}} 
            placeholder='Password'
            ></TextInput>

            <TouchableOpacity onPress={handleShowPass} style={{alignItems:'center',justifyContent:'center'}}>
                {
                secure?
                <Icon name="eye" size={25} color="black" />
                :
                <Icon name="eye-slash" size={25} color="black"/>
                }
            </TouchableOpacity>

        </View>

            <View style={{marginTop:10,right:20,alignSelf:'flex-end'}}>
                    <Text style={{fontSize:15,color:'#0E4A86'}}>Forgot Password?</Text>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <View style={styles.signInButton}>
                    <Text style={{fontSize:18,color:'white'}}>Sign in</Text>
                </View>
            </TouchableOpacity>
          <View style={styles.signUpLink}>
              <Text style={{fontSize:15}}>Don't have account?</Text>
              <Text style={{fontSize:15,color:'#0E4A86'}}>Sign up</Text>
          </View>
        </View>

      </View>

      <View style={styles.bottom}>
          <Image style={{width:'100%',height:'100%'}} source={require('../assets/wave.jpg')} />
      </View>
    </View>
  )
}

export default loginScreen