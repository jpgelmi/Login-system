import React,{useEffect, useState} from "react"
import {SafeAreaView, StatusBar, Text, StyleSheet, View,
Button, YellowBox} from "react-native"
import {decode, encode} from "js-base64"

import Auth from "./src/components/Auth"

import firebase from "./src/utils/firebase.js"
import "firebase/auth";
import MainComponent from "./src/components/MainComponent"


if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode;

export default function App(){
 
  const [user, setUser] = useState(undefined)
  console.log(user)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response)
    })
  })
  if(user === undefined) return null

  return(
    <>
      <StatusBar barStyle = "light-content"/>
      <SafeAreaView style = {styles.background}>
        {user ? <MainComponent user = {user}/> : <Auth/>}
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  background:{
    //backgroundColor: "#15212b",
    height: "100%",
  }
})