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
<<<<<<< HEAD
        <View style={[{
=======
        <View style={{
            flexDirection: 'row',
>>>>>>> bb96392f4a32c7d599b4246f4c26a4bbd74adad4
            marginTop: 10,
            height: 52,
            backgroundColor: 'white',
            marginHorizontal: 32,
            paddingHorizontal: 28,
            alignItems: 'center',
            justifyContent: 'flex-start',
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
                    flex: 1,
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