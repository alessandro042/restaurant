import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccount from "../../modules/auth/account/adapters/screens/CreateAccount";
import Login from "../../modules/auth/login/adapters/screens/login";
import UserGuest from "../../modules/auth/login/adapters/screens/UserGuest";
import Profile from "../../modules/auth/account/adapters/screens/Profile";
import UserLogged from "../../modules/auth/account/adapters/screens/UserLogged";

const Stack = createStackNavigator();

export default function LoginStack(){
    return(
        <Stack.Navigator initialRouteName="UserLogged">
            <Stack.Screen name="Login" component={Login} options={{title: "Inicia sesion"}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title: "Crea tu cuenta :)"}}/>
            <Stack.Screen name="UserGuest" component={UserGuest} options={{title: "Vamos crea tu cuenta :)"}}/>
            <Stack.Screen name="Profile" component={Profile} options={{title: "Perfil"}}/>
            <Stack.Screen name="UserLogged" component={UserLogged} options={{title: "Cuenta"}}/>
        </Stack.Navigator>
    )
}