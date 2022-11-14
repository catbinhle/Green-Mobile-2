import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { appLogout } from '../../actions/AppAction';

function ProfileScreen() {

    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(appLogout())
        AsyncStorage.removeItem('@AppAccount')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{
                        marginHorizontal: 32,
                        marginTop: 10,
                        height: 52,
                        backgroundColor: 'red',
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
                        onPress={handleLogout}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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

export default ProfileScreen