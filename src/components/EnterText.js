import React from 'react';

import { TextInput, View } from 'react-native';

function EnterText({
    isSecurity = false,
    placeholder,
    onChange,
    error = false,
    style,
}) {
    return (
        <View style={[{
            marginTop: 10,
            height: 52,
            backgroundColor: 'white',
            marginHorizontal: 32,
            paddingHorizontal: 28,
            alignItems: 'flex-start',
            justifyContent: 'center',
            borderRadius: 10,
            shadowColor: '#8C8C98',
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            elevation: 10, // only Android
            borderColor: 'red',
            borderWidth: error ? 1 : 0
        },style]}>
            <TextInput
                style={{
                    fontSize: 15,
                    fontWeight: '400',
                }}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={isSecurity}
            />
        </View>
    )
}

export default EnterText