import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from "./Header"

export default function MainComponent(props) {
    const{user} = props

    console.log(user.email)
    return (
        <View>
            <Header/>
            <Text>{user.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
