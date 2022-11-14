import React, { useEffect } from 'react';

import {
  Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { homeGetAPI } from '../../actions/HomeAction';
import ItemView from '../../components/ItemView';
import useSettingMode from '../../hooks/settingMode';

// const homeListScreen = ['Home', 'Sale', 'Purchase']
const width = Dimensions.get('window').width

function HomeScreen({navigation}) {
    const {mode, settingMode} = useSettingMode()
    const dispatch = useDispatch()
    const app = useSelector(state => state.app)  
    const home = useSelector(state => state.home)  

    useEffect(() => {
        dispatch(homeGetAPI())
    }, [])

    const handleItem = (item) => {
        navigation.navigate('[Home]Detail', item)
    }

    const handlePost = () => {
        navigation.navigate('[Home]Post')
    }

    const handleRefresh = () => {
        dispatch(homeGetAPI())
    }

    const renderItemView = ({ item, index }) => <ItemView item={item} width={width} onEvent={(item) => handleItem(item)}/>

    return (
        <SafeAreaView style={{
            backgroundColor: mode === 0 ? 'black' : 'white'
        }}>
            <View style={styles.headerView}>
                <Text style={{
                    fontWeight: '700',
                    fontSize: 15,
                    margin: 20
                }}>Maui bay Popular Destination</Text>
                <TouchableOpacity style={{
                        height: 40,
                        width: 40,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                        onPress={handlePost}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 22
                        }}>+</Text>
            </TouchableOpacity>
            </View>

            <FlatList
                style={{
                    marginHorizontal: 4
                }}
                numColumns={2}
                data={home?.homeData}
                renderItem={renderItemView}
                keyExtractor={(item, index) => index.toString()}
                refreshing = {app?.isLoadng}
                onRefresh = {handleRefresh}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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