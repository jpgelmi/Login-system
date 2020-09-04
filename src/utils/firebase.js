import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBy46MF55qeyraAIyJ4ObeNsThHZTm8LVs",
    authDomain: "login-app-cf99d.firebaseapp.com",
    databaseURL: "https://login-app-cf99d.firebaseio.com",
    projectId: "login-app-cf99d",
    storageBucket: "login-app-cf99d.appspot.com",
    messagingSenderId: "608593787683",
    appId: "1:608593787683:web:eb6fc199723698173d6a96"
};

export default firebase.initializeApp(firebaseConfig)