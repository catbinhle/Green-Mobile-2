import React from 'react';

import {
  Dimensions, FlatList, SafeAreaView, StyleSheet, Text,
} from 'react-native';

import ItemView from '../../components/ItemView';
import useSettingMode from '../../hooks/settingMode';

// const homeListScreen = ['Home', 'Sale', 'Purchase']
const width = Dimensions.get('window').width

function HomeScreen({navigation}) {
    const {mode, settingMode} = useSettingMode()
    const handleItem = (item) => {
        navigation.navigate('[Home]Detail', item)
    }

    // const homeView = () => (
    //     <View style={styles.container}>
    //         <Text>Welcome Home Screen</Text>
    //         <TouchableOpacity style={{
    //                     marginHorizontal: 32,
    //                     marginTop: 10,
    //                     height: 52,
    //                     backgroundColor: '#0E4A86',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     borderRadius: 10,
    //                     shadowColor: '#8C8C98',
    //                     shadowOffset: {
    //                         width: 1,
    //                         height: 1
    //                     },
    //                     shadowOpacity: 0.4,
    //                     shadowRadius: 4,
    //                     elevation: 10 // only Android
    //                 }}
    //                      onPress={SalesIn}
    //                 >
    //                     <Text style={{
    //                         color: '#ffffff',
    //                         fontWeight: '700',
    //                         fontSize: 15
    //                     }}>Sales Screen</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={{
    //                     marginHorizontal: 32,
    //                     marginTop: 10,
    //                     height: 52,
    //                     backgroundColor: '#0E4A86',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     borderRadius: 10,
    //                     shadowColor: '#8C8C98',
    //                     shadowOffset: {
    //                         width: 1,
    //                         height: 1
    //                     },
    //                     shadowOpacity: 0.4,
    //                     shadowRadius: 4,
    //                     elevation: 10 // only Android
    //                 }}
    //                      onPress={PurchIn}
    //                 >
    //                     <Text style={{
    //                         color: '#ffffff',
    //                         fontWeight: '700',
    //                         fontSize: 15
    //                     }}>Purchase Screen</Text>
    //                 </TouchableOpacity>                            
    //         <TouchableOpacity style={{
    //                     marginHorizontal: 32,
    //                     marginTop: 10,
    //                     height: 52,
    //                     backgroundColor: '#0E4A86',
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     borderRadius: 10,
    //                     shadowColor: '#8C8C98',
    //                     shadowOffset: {
    //                         width: 1,
    //                         height: 1
    //                     },
    //                     shadowOpacity: 0.4,
    //                     shadowRadius: 4,
    //                     elevation: 10 // only Android
    //                 }}
    //                      onPress={logOut}
    //                 >
    //                     <Text style={{
    //                         color: '#ffffff',
    //                         fontWeight: '700',
    //                         fontSize: 15
    //                     }}>Sign out</Text>
    //                 </TouchableOpacity>
    //     </View>
    // )

    const renderItemView = ({ item, index }) => <ItemView item={item} width={width} onEvent={(item) => handleItem(item)}/>

    return (
        <SafeAreaView style={{
            backgroundColor: mode === 0 ? 'black' : 'white'
        }}>
            <Text style={{
                fontWeight: '700',
                fontSize: 15,
                margin: 20
            }}>Maui bay Popular Destination</Text>
            <FlatList
                style={{
                    marginHorizontal: 4
                }}
                numColumns={2}
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
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
    },
    {
        name: 'Phu Quoc - Kien Giang - Vietnam',
        image: 'https://statics.vinpearl.com/du-lich-phu-quoc-2-ngay-1-dem-1_1645345403.jpg',
        desc: 'Phu Quoc\'s gleaming white sand beaches have earned it the nickname "Pearl Island", but the island\'s environmental conservation efforts and cultural heritage deserve as much attention as its picturesque sand and surf. Fishing and agriculture remain primary industries, and more than half the laid-back island has been protected by a UNESCO Biosphere Reserve since 2006.'
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