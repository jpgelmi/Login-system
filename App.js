import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'

import firebase from "./src/utils/firebase"

import {decode, encode} from "base-64"

import firebase from 'firebase'

if(!global.btoa) global.btoa = encode;
if(!global.atob) global.atob = decode

import HeaderComponent from "./src/components/Header"
import Auth from "./src/components/Auth"

export default function App() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response)
    })
  })

  if(user === undefined) return null

  return (
    <>
      <StatusBar barStyle = "light-content"/>
      <SafeAreaView>
        {user ? <MainComponent user = {user}/> : <Auth/>}
      </SafeAreaView>
      <HeaderComponent/>
    </>
  )
}

const styles = StyleSheet.create({})
