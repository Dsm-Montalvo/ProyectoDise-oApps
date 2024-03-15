import React, {useState} from 'react';
import { View, Text, TextInput, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { styles } from './LoginScreenStyles';
import { useNavigation } from '@react-navigation/native';
import { MyColors } from '../../theme/AppTheme';

/*  FC= FunctionComponent
    FCE=FunctionComponentElement
    FCF=FunctionComponentFactory
*/
const LoginScreen: React.FC = () =>{
    const [username, setUsername] = useState('');
    /* useState: el estado en que va a inicializar */
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () =>{
        console.log('informacion :', {username, password});
    } 

    const handleRegister = () => {
        navigation.navigate('RegisterScreen');

        console.log('register');
    }

    return(
        <View style={[styles.container, {backgroundColor: MyColors.background}]}>
            <Text style={styles.titulo}>Login</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}  
                value={username}
                placeholder='ingresa email' />
            <Text style={styles.label}>Password</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder='ingresa password'
            />

            <View style = {styles.buttonContainer}>
           {/*  <Button title='LOGIN' onPress={handleLogin}/> */}

           <TouchableOpacity style = {[styles.button, styles.loginButton]}
           onPress={handleLogin}>
                <Text style={styles.buttonText}>
                    Iniciar Sesion
                </Text>
           </TouchableOpacity>
            </View>
            
            <View style = {styles.registerContainer}>

            <Text style = {styles.registerText}>No Tiene Cuenta?</Text>
            <Text style = {styles.link} onPress={handleRegister}>Registraté</Text>
            {/* <Button title='REGISTER' onPress={handleRegister} /> */}
            </View>

        </View>
    );

}

export default LoginScreen;



  /* 
  Terminos a investigar
  camelCase  kebab-case snake_case PascalCase
  
  helper
  */