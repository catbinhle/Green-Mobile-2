import React from 'react';

<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function PurchaseScreen({
    logOut
}) {
=======
import { StyleSheet, Text, View } from 'react-native';

function PurchaseScreen() {
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036

    return (
        <View style={styles.container}>
            <Text>Welcome Purchase Screen</Text>
<<<<<<< HEAD
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
                         onPress={logOut}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Back to Home</Text>
                    </TouchableOpacity>
=======
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: '#fff',
=======
        backgroundColor: 'red',
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
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

export default PurchaseScreen