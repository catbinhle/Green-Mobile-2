import React from 'react';

<<<<<<< HEAD
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import EnterText from './components/EnterText';

function HomeScreen({
    onLogout
}) {

    const handleLogout = () => {
        onLogout()
    }
=======
<<<<<<< HEAD
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function HomeScreen({
    logOut,
    SalesIn,
    PurchIn
}) {
=======
import {
  Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';
>>>>>>> bb96392f4a32c7d599b4246f4c26a4bbd74adad4

// const homeListScreen = ['Home', 'Sale', 'Purchase']
const width = Dimensions.get('window').width
>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036

function HomeScreen({
}) {

    const homeView = () => (
        <View style={styles.container}>
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
            <Text>Welcome Home Screen</Text>
            <TouchableOpacity style={{
                        marginHorizontal: 32,
                        marginTop: 10,
                        height: 52,
>>>>>>> bb96392f4a32c7d599b4246f4c26a4bbd74adad4
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
<<<<<<< HEAD
                        onPress={handleLogout}
=======
                         onPress={SalesIn}
>>>>>>> bb96392f4a32c7d599b4246f4c26a4bbd74adad4
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
<<<<<<< HEAD
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
=======
                            fontSize: 15
                        }}>Sales Screen</Text>
                    </TouchableOpacity>
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
                         onPress={PurchIn}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Purchase Screen</Text>
                    </TouchableOpacity>                            
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
                        }}>Sign out</Text>
                    </TouchableOpacity>
=======

>>>>>>> 62960f47fb38ff714acba1bc21e8923a3ea7e036
>>>>>>> bb96392f4a32c7d599b4246f4c26a4bbd74adad4
        </View>
    )

    const renderItemView = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                flex: (index !== Data.length - 1) && 1,
                width: (index === Data.length - 1) && (width - 8*4)/3,
                marginHorizontal: 4,
                marginVertical: 4,
                borderRadius: 10,
                shadowColor: '#8C8C98',
                shadowOffset: {
                    width: 1,
                    height: 1
                },
                shadowOpacity: 0.4,
                shadowRadius: 4,
                elevation: 10, // only Android
                borderColor: 'grey',
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'red'

            }}
            onPress={() => {

            }}
            >
                <Image 
                    source={{uri: item.image}}
                    style={{
                        flex: 1,
                        height: (width - 40) * 2 / 3 ,
                        resizeMode: 'cover'
                    }}
                />
                {/* <View style={{
                    flex: 4
                }}>
                    <Text>{item.name}</Text>
                </View>  */}
                {/* <Icon name="angle-right" size={30} color="black" /> */}
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <Text style={{
                fontWeight: '700',
                fontSize: 15,
                margin: 20
            }}>Maui bay Popular Destination</Text>
            <FlatList
                style={{
                    marginHorizontal: 4
                }}
                numColumns={3}
                data={Data}
                renderItem={renderItemView}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
    )
}

const Data = [
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg'
    },
]

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