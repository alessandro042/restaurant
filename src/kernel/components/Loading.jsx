import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Overlay } from '@rneui/base'

export default function Loading(props) {
    const {isShow, title} = props
    return (
        <Overlay isVisible={isShow} windowsBackgroundColor='rgb(0,0,0,0.5)' overlayBackgroundColor='transparent' overlayStyle={styles.overlay}>
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
                    color='black'
                />
                <Text style={styles.title}>{title}</Text>
             </View>

        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: '#fff',
        width: 250,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'gray'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'gray',
        textTransform: 'uppercase',
        marginTop: 16,
        textAlign: 'center',
    }
})