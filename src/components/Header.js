import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props){
    const{name} = props
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        shadowColor: "black",
        shadowOffset:{ width: 0, height: 2},
        shadowOpacity: 0.2,
    },
    textStyle:{
        fontSize:20
    }
})
