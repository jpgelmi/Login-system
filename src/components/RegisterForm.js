import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'

import {validateEmail} from "../utils/validations"
import firebase from "firebase"


export default function RegisterForm(props) {

    const{changeForm} = props
    const[formData, setFormData] = useState(defaultValue())
    const[formError, setFormErrors] = useState({})

    const register = () => {
        let errors = {}
        if(!formData.mail || !formData.password || !formData.repassword){
            if(!formData.mail) errors.mail = true
            if(!formData.password) errors.password = true
            if(!formData.repassword) errors.repassword = true
        }else if(!validateEmail(formData.mail)){
            errors.mail = true
        }else if (formData.password !== formData.repassword){
            errors.password = true
            errors.repassword = true
        }else if(formData.password.length < 6) {
            errors.password = true
            errors.repassword = true
        }else{
            firebase.auth().createUserWithEmailAndPassword(formData.mail, formData.password)
            .catch(()=>{
                setFormErrors({
                    mail:true,
                    password: true,
                    repassword: true
                })
            })
        }
        setFormErrors(errors)
    }
    

    return (
        <>
          <TextInput
                style = {[styles.input, formError.mail && styles.error]}
                //Que aparece cómo default 
                placeholder = "Correo electronico"
                placeholderTextColor = "#969696"
                //Al cambiarse actualizamos el objeto y le damos el "e.nativeEvent" en forma de texto
                //El "e.nativeEvent" es lo que se pasa por el componente
                onChange = {e => setFormData({...formData, mail: e.nativeEvent.text})}
            />  

            <TextInput
                style = {[styles.input, formError.password && styles.error]}
                placeholder = "Contraseña"
                placeholderTextColor = "#969696"
                secureTextEntry = {true}
                //Actualizamos el objeto
                onChange = {e => setFormData({...formData, password: e.nativeEvent.text})}
            />
            <TextInput
                style = {[styles.input, formError.repassword && styles.error]}
                style = {styles.input}
                placeholder = "Repetir contraseña"
                placeholderTextColor = "#969696"
                secureTextEntry = {true}
                onChange ={e => setFormData({...formData,repassword: e.nativeEvent.text})} 
            />
            {/*Se vuelve de color negro al apretar, y tiene las propiedades de un botón
               al precionar tambíen, se ejecuta la función register*/}
            <TouchableOpacity onPress = {register}> 
                <Text style = {styles.btntext}>Registraste</Text>
            </TouchableOpacity>

            <View style = {styles.login}>
                {/*Al presionar, se ejecuta la función cambiar formulario*/}
                <TouchableOpacity onPress = {changeForm}> 
                    <Text style = {styles.btntext}>Login</Text>
                </TouchableOpacity>
            </View>  
        </>
    )
}

function defaultValue(){
    return{
            mail: "",
        password: "",
        repassword: "",
        }
}

const styles = StyleSheet.create({
    btntext: {
        color: "black",
        fontSize: 18,
    },
    input:{
        height: 50,
        color: "black",
        width: "80%",
        marginBottom: 20,
        //backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040"
    },

    login:{
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 20
    },
    error:{
        borderColor:"#940c0c"

    }
})
 