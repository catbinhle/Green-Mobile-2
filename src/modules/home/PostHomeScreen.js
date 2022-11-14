import React, { useState } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';

import EnterText from '../../components/EnterText';

function PostHomeScreen() {

    const [postInform, setPostInform] = useState()

    const dispatch = useDispatch()
    
    const handlePost = async () => {
        // dispatch(homePostAPI(postInform))
        await launchImageLibrary()
    }

    return (
        <View style={styles.container}>

            <EnterText 
                style={{}} 
                placeholder={'Title'} 
                onChange={(text) => {
                    setPostInform({...postInform, title: text})
                }}
            />
            <EnterText 
                style={{}} 
                placeholder={'Description'} 
                onChange={(text) => {
                    setPostInform({...postInform, describe: text})
                }}
            />
            <EnterText 
                style={{}} 
                placeholder={'Images'} 
                onChange={(text) => {
                    setPostInform({...postInform, images: [text]})
                }}
            />
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
                        onPress={handlePost}
                    >
                        <Text style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: 15
                        }}>Post</Text>
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

export default PostHomeScreen