import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../../modules/auth/login/adapters/screens/login";
import Restaurants from "../../modules/restaurants/adapters/screens/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen name="Restaurants" component={Restaurants} options={{title: "Restaurants"}}/>
            <Stack.Screen name="Login" component={Login} options={{title: "Inicio de sesion"}}/>
        </Stack.Navigator>
    )
}