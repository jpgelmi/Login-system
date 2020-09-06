import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {validateEmail} from "../utils/validations"
import firebse from "../utils/firebase"

export default function LoginForm(props) {
    const {changeForm} = props

    const [formData, setFormData] = useState(defaultValue())
    const [formError, setFormError] = useState({})

    const login = () => {
        let errors = {}

    if(!formData.mail || !formData.password){
        if(!formData.mail) errors.mail = true
        if(!formData.password) errors.password = true
    }else if(!validateEmail(formData.mail)){
        errors.mail = true
    }else{
        firebase.auth()
        .signInWithEmailAndPassword(formData.mail, formData.password)
        .catch(() => {
            setFormError({
                mail: true,
                password: true
            })
        })
    }
        setFormError(errors)
    }
    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    }
    return (
        <>
            <TextInput
                style = {[styles.input, formError.mail && styles.error]}
                placeholder = "Correo electronico"
                onChange = {(e) => onChange(e, "mail")}
                placeholderTextColor = "#969696"
            />
            <TextInput
                style ={[styles.input, formError.password && styles.error]}
                placeholder = "Contraseña"
                onChange = {(e) => onChange(e, "password")}
                placeholderTextColor = "#969696"
                secureTextEntry = {true}
            />
            <TouchableOpacity onPress = {login}>
                <Text style = {styles.btnText}>ingresar</Text>
            </TouchableOpacity>
            <View style = {styles.register}>
                <TouchableOpacity onPress = {changeForm}>
                    <Text style = {styles.register}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue(){
    return{
        mail: "" ,
        password: "",
    }
}

const styles = StyleSheet.create({
    btnText:{
        color: "black",
        fontSize: 18, 
    },
    input:{
        height: 50,
        color: "#fff",
        width: "80%",
        marginBottom: 20,
        //backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
       // borderColor: "light-grey"
    },
    register: {
        flex:1,
        justifyContent:"center",
        marginVertical: 10,
        fontSize: 18
    },
    error:{
        borderColor: "#940c0c"
    }
})

