import React, { useState } from 'react'
import { styles } from './RegisterScreenStyle';
import { View,Text, TextInput, Button} from 'react-native';
import axios from 'axios';
import { RegisterViewModel } from './ViewModel';

const RegisterScreen = () => {
   /*  const [name, setName] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */

    const {name, password, apellidoPaterno, apellidoMaterno, email,onChange, register}=RegisterViewModel();
/* 
    const handleRegister = () =>{

    axios.post('URL_API', {
        name: name,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        email:email,
        password: password
    }).then(response => {
      console.log('then');  
    }).catch(error => {
        console.log('error');
    });

    } */

    return(
        <View style={styles.titulo}>
            <Text style={styles.titulo}> Bienvenido ala Pantalla de registro ..</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Usuario: '
            value={name}
            onChangeText={ (text) => onChange('name',text)}
            />
            <TextInput 
            style={styles.input}
            placeholder='Apellido Paterno: '
            value={apellidoPaterno}
            onChangeText={ (text) => onChange('apellidoPaterno',text)}
            />
            <TextInput 
            style={styles.input}
            placeholder='Apellido Materno: '
            value={apellidoMaterno}
            onChangeText={ (text) => onChange('apellidoMaterno',text)}
            />

            <TextInput 
            style={styles.input}
            placeholder='Email: '
            value={email}
            onChangeText={ (text) => onChange('email',text)}
            />

            <TextInput 
            style={styles.input}
            placeholder='Password: '
            value={password}
            onChangeText={ (text) => onChange('password',text)}
            secureTextEntry={true}
            />

            <Button title='Guardar' onPress={()=> register()} />
        </View>
    )
}

export default RegisterScreen;