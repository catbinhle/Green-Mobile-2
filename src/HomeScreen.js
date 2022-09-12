import React from 'react';

import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import EnterText from './components/EnterText';

function HomeScreen({
    onLogout
}) {

    const handleLogout = () => {
        onLogout()
    }

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1
            }}>
                <Image style={styles.backgroundImg}
                    source={require('../assets/welcomes/bg.png')} />
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <TouchableOpacity style={{
                        top: 30,
                        left: 10,
                        width: 40,
                        height: 40,
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
                        onPress={handleLogout}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 30
                        }}>{'<'}</Text>
                    </TouchableOpacity>
                    <EnterText style={{ marginTop: 90 }} placeholder={'Search'} />
                </View>
            </View>
            <View style={{
                flex: 3,

            }}>
                <Image style={styles.backgroundImg}
                    source={require('../assets/welcomes/bg.png')} />
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <TouchableOpacity style={{
                        top: 30,
                        left: 30,
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#0E4A86',
                        borderWidth: 1,
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
                            color: '#0E4A86',
                            fontWeight: '700',
                            fontSize: 30
                        }}>$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 30,
                        left: 150,
                        right: 150,
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 30,
                        borderColor: '#0E4A86',
                        borderWidth: 1,
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
                            color: '#0E4A86',
                            fontWeight: '700',
                            fontSize: 30
                        }}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 30,
                        right: 30,
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        backgroundColor: '#ffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#0E4A86',
                        borderWidth: 1,
                        borderRadius: 30,
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
                            color: '#0E4A86',
                            fontWeight: '700',
                            fontSize: 30
                        }}>#</Text>
                    </TouchableOpacity>
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
    }
});

export default HomeScreen