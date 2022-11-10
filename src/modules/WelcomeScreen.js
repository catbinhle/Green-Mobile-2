import React from 'react';

import {
  Image, StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function WelcomeScreen({navigation}) {

    // useEffect(() => {
    //     getIsFirstLaunchStore()
    // }, [])

    const start = async () => {
        try {
            await AsyncStorage.setItem('isFirstLaunch', JSON.stringify(true))
            handleMoveLoginScreen()
          } catch (e) {
            // saving error
          }
    }

    const handleMoveLoginScreen = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.backgroundImg}
                source={require('../../assets/welcomes/bg.png')} />
            <View style={styles.centerObj}>
                <Image style={styles.centerImg}
                    source={require('../../assets/welcomes/welcome1.png')} />
                <View style={{
                    flex: 1,
                    width: '100%',
                }}>
                    <Text style={{
                        fontWeight: '800',
                        fontSize: 18,
                    }}>Best Service</Text>
                    <Text style={{
                        fontSize: 14,
                        textAlign: 'center',
                        marginTop: 16
                    }}>
                        We promise to provide the best services when it comes to customer experiences.
                    </Text>
                </View>
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
                        onPress={start}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Start</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'center',
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

export default WelcomeScreen