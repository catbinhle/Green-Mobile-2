import React from 'react';

import {
  Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity,
  View,
} from 'react-native';

// const homeListScreen = ['Home', 'Sale', 'Purchase']
const width = Dimensions.get('window').width

function HomeScreen({
}) {

    const homeView = () => (
        <View style={styles.container}>

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