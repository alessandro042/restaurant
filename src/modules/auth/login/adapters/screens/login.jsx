import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button, Image } from '@rneui/base'
import Logo from '../../../../../../assets/img/Logo.png'
import { isEmpty } from 'lodash'
import Loading from '../../../../../kernel/components/Loading'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = getAuth();
    const Login = async () => {
        if (!isEmpty(email) && !isEmpty(password)) {
            console.log('Iniciando sesion ', email, password)
            setShowErrorMessage('');
            setLoading(true);
            try {
                const user = await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate('UserLogged')
            } catch (error) {
                setShowErrorMessage('Error al iniciar sesion :((')
            } finally {
                setLoading(false)
            }
        } else {
            setShowErrorMessage('todos los campos son obligatorios >:(')
        }
    }
    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logo}
                resizeMode='contain'

            />
            <Input
                placeholder="00000tn000@utez.edu.mx"
                onChange={({ nativeEvent: { text } }) => setEmail(text)}
                label="Correo electronico *"
                labelStyle={styles.label}
                containerStyle={styles.input}
                keyboardType='email-address'
                rightIcon={<Icon type='material-community' name='email-outline' />}
                errorMessage={showErrorMessage}
            />


            <Input
                placeholder="****************"
                onChange={({ nativeEvent: { text } }) => setPassword(text)}
                label="Contraseña *"
                labelStyle={styles.label}
                containerStyle={styles.input}
                secureTextEntry={showPassword}
                rightIcon={<Icon type='material-community' name={showPassword ? 'eye-outline' : 'eye-off-outline'} onPress={() => setShowPassword(!showPassword)} />}
                errorMessage={showErrorMessage}
            />

            <Button
                title="Iniciar sesion"
                onPress={Login}
                containerStyle={styles.btnContainer}
                btnStyle={styles.btn}

            />
            <Loading
                isShow={loading}
                title="Iniciando sesion"

            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 16
    },
    logo: {
        width: 120,
        height: 120
    },
    input: {
        marginVertical: 16,
    },
    label: {
        color: 'gray',
        fontSize: 16
    },
    btnContainer: {
        width: "80%"
    },
    btn: {
        backgroundColor: 'gray',
    }
})
