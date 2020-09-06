import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from "./Header"
import firebase from "../utils/firebase"

export default function MainComponent(props) {
    const{user} = props

    console.log(user.email)
    return (
        <View>
            <Header/>
            <Text>{user.email}</Text>
            <View style = {styles.viewCoulse}>
                {/*Al apretar el botón... Hacemos un LogOut*/}
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
        paddingHorizontal: 30
    },
    text:{
        fontSize: 16,
        color: "#fff",
        textAlign: "center"
    },
})
