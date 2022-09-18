import React, { useEffect, useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EnterText from './components/EnterText';

// const useTracking = () => {
//     const [tracking, setTracking] = useState();
  
//     const onTracking = (payload) => setTracking(payload)
  
//     return [ tracking, onTracking ];
//   }

const useTracking = (Component) => {
    
    const WrapperComponent = (props) => {
        
        // const newProps = Object.keys(props).reduce((wrappedProps, key) => {
        //     const value = props[key];
        //     if (typeof value === `function`) {
        //         return {
        //             ...wrappedProps,
        //             [key]: (...args) => {
        //                 // console.log(`Event for: ${idKey} on ${key} with args ${args}`);
        //                 value(...args)
        //                 console.log('*******************')
        //             }
        //         };
        //     } else {
        //         console.log('*******************')
        //         return { ... wrappedProps, [key]: value}
        //     }
        //     // console.log(Component)
        // }, {})
        useEffect(() => console.log('*******************'), [])
        return <Component {...props}/>
    }

    return WrapperComponent
}

// function Login({
//     onLogin
// }) {
function Login({
        onLogin
}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    console.log('---------------')

    const handleLogin = () => {
        if (email === '' || password === '') {
            setError(true)
        } else {
            onLogin()
        }
    }

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmail("Validate")
        }
        else {
            setEmail("Not validate")
        }
      }

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImg}
                source={require('../assets/welcomes/bg.png')} />

            <View style={styles.centerObj}>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    padding: 32
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 25,
                    }}>
                        {'Welcome,'}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '400',
                        marginTop: 4
                    }}>
                        {'Sign in to continue'}
                    </Text>
                </View>
                <View style={{
                    flex: 3
                }}>
                    <EnterText error={error} style={{}} placeholder={'Email'} onChange={(text) => {
                        setEmail(text)
                    }}/>
<<<<<<< HEAD
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 25,
                    }}>
                        
                    </Text>
                    <EnterText isSecurity={true} placeholder={'Password'} onChange={(text) => {
=======
                    <EnterText error={error} isSecurity={true} placeholder={'Password'} onChange={(text) => {
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
                        setPassword(text)
                    }}/>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 25,
                    }}>
                        
                    </Text>
                    <TouchableOpacity style={{
                        marginHorizontal: 32,
                        marginTop: 10,
                        height: 52,
                        backgroundColor: '#0E4A86',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        shadowColor: '#8C8C98',
                        shadowOffset: {
                            width: 1,
                            height: 1
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 4,
                        elevation: 10 // only Android
                    }}
                        onPress={handleLogin}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 25,
                    }}>
                        {email} {email.length > 0 && password.length > 0 && 'and'} {password}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    centerImg: {
        width: 240,
        height: 240,
        resizeMode: 'contain',
        flex: 1
    },
    centerObj: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    titleStyle: {
        fontWeight: '800',
        fontSize: 20,
        marginVertical: 15,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15,
    },
});

const LoginScreen = useTracking(Login)

export default LoginScreen