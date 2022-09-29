import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function TourScreenTab({
    isActive = false,
    image,
    title,
    onEvent
}) {
    return (
        <TouchableOpacity
            style={styles.tabBar}
            onEvent={() => {
                onEvent(title)
            }}>
            <Image style={styles.image} source={image} />
            <Text style={{
                fontWeight: isActive ? '900' : '400'
            }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        marginBottom: 10
    }
})