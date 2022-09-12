import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PurchaseScreen from './PurchaseScreen';
import SaleScreen from './SaleScreen';

const homeListScreen = ['Home', 'Sale', 'Purchase']

function HomeScreen({
    logout
}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleLogout = () => {
        logout()
    }

    const handleScreenPress = (index) => {
        setCurrentIndex(index)
    }

    const homeView = () => (
        <View style={styles.container}>
            <Text>Welcome Home Screen</Text>
            <TouchableOpacity style={{

                justifyContent: 'center',
                alignItems: 'center',
            }}
                onPress={() => handleScreenPress(1)}
            >
                <Text style={{
                    fontWeight: '700',
                    fontSize: 15
                }}>Sale</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{

                justifyContent: 'center',
                alignItems: 'center',
            }}
                onPress={() => handleScreenPress(2)}
            >
                <Text style={{
                    fontWeight: '700',
                    fontSize: 15
                }}>Purchase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{

                justifyContent: 'center',
                alignItems: 'center',
            }}
                onPress={handleLogout}
            >
                <Text style={{
                    fontWeight: '700',
                    fontSize: 15
                }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        currentIndex === 0 ? homeView() : currentIndex === 1 ? <SaleScreen /> : <PurchaseScreen />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

export default HomeScreen