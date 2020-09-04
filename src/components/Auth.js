import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function Auth() {
    const[islogin, setIslogin] = useState(true)

    const changeForm = () => {
        setIslogin(!islogin)
    }

    return (
        <View style = {styles.view}>
            {islogin ? (
                <LoginForm
                changeForm = {changeForm}/>
            ):(
                <RegisterForm
                changeForm = {changeForm}/>  
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1, 
        alignItems: "center"
    },
})
