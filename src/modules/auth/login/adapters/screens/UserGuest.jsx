import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../../../../../assets/img/Logo.png'
import {Image} from '@rneui/base'
import {Button} from '@rneui/base'
export default function UserGuest(props) {
   const {navigation} = props;
  return (
    <View style={styles.container}>
        <Image source = {Logo} style={styles.Logo}/>
        
      <Text style={styles.title}>¡Descubre tu próximo restaurante favorito con nuestra aplicación! 🍽✨</Text>
      <Text style ={styles.description}>
      En nuestra plataforma, explorarás una variedad increíble de restaurantes 
      para cualquier ocasión, gusto o antojo. ¿Amante de la comida italiana, fanático de la comida 
      rápida o en busca de la experiencia gourmet más refinada? Lo tenemos todo cubierto.
      </Text>
      <Button 
      title="Inicia sesion"
      type="clear"
      containerStyle={{padding:16}}
      onPress={() => navigation.navigate("Login")}
      
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'

    },
    Logo:{
        width : 120,
        height : 120,
        resizeMode : 'contain',
        marginBottom : 18
    },
    logoContainer:{
        marginBottom : 16,
    },
    title:{
        fontWeight : 'bold', 
        fontSize : 18,
        padding :16
    },
    description:{
        marginHorizontal : 32,

    },

});