import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function DetailScreen( { route }) {
    const {params} = route
  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <Image style={styles.imageDetail} source={{uri:params.image}}/>
            <Text style={styles.textDetail}>{params.title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    bottom:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    imageDetail:{
        width:'85%',
        height:'85%',
        borderRadius:30,
    },
    textDetail:{
        position:'absolute',
        bottom:'10%',
        fontSize:30,
        fontWeight:'bold',
        color:'red'
    },  
})