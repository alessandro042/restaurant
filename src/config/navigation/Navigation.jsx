import * as react from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../../modules/auth/login/adapters/screens/login'
import CreateAccount from '../../modules/auth/account/adapters/screens/CreateAccount'
import LoginStack from '../stack/LoginStack'
import RestaurantStack from '../stack/RestaurantStack'
import FavoritesStack from '../stack/FavoritesStack'
import WebStack from '../stack/WebStack'
import {Icon} from '@rneui/base'


const Tab = createBottomTabNavigator()
export default function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            // Retornar un Icon de React Native Elements
            return <Icon name={iconName} type={iconType} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>

                <Tab.Screen name="RestaurantsStack" component={RestaurantStack} options={{ title: "Inicio" }} />
                <Tab.Screen name="FavoritesStack" component={FavoritesStack} options={{ title: "Favs" }} />
                <Tab.Screen name="LoginStack" component={LoginStack} options={{ title: "Perfil" }} />
                <Tab.Screen name="WebStack" component={WebStack} options={{ title: "Web" }} />


            </Tab.Navigator>
        </NavigationContainer>
    )
}
const getIconName = (routeName, focused) => {
    let iconName = '';
    let iconType = 'material-community';
  
    switch (routeName) {
      case 'RestaurantsStack':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'FavoritesStack':
        iconName = focused ? 'heart' : 'heart-outline';
       break;
        case 'LoginStack':
        iconName = focused ? 'account' : 'account-outline';
        break;
        case 'WebStack':
        iconName = focused ? 'web' : 'web-outline';
    }
  
    return { iconName, iconType };
  };