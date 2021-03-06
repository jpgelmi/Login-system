import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import firebase from "../utils/firebase"

export default function MainComponent(props) {
    const{user} = props

    console.log(user)
    return (
        <View>
            <Text style = {{paddingVertical: 30, paddingHorizontal: 20}}>{user.email}</Text>
            <View style = {styles.viewCoulse}>
                <Text style = {styles.text}
                onPress ={() => {firebase.auth().signOut()}}>Cerrar sesion</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewCoulse:{
        backgroundColor: "#820000",
        borderRadius: 50,
        paddingVertical:10,
        marginHorizontal: 50,
    },
    text:{
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
})
