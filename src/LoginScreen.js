import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import EnterText from './components/EnterText';

function LoginScreen({
    onLogin
}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const hanldeLogin = () => {
        if (email === '' || password === '') {
            setError(true)
        } else {
            onLogin()
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
                        {'Sigin to contunue'}
                    </Text>
                </View>
                <View style={{
                    flex: 3
                }}>
                    <EnterText error={error} style={{}} placeholder={'Email'} onChange={(text) => {
                        setEmail(text)
                    }}/>
                    <EnterText isSecurity={true} placeholder={'Password'} onChange={(text) => {
                        setPassword(text)
                    }}/>
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
                        onPress={hanldeLogin}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Signin</Text>
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

export default LoginScreen