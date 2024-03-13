import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/base'
import ListAction from '../../../../../kernel/components/ListAction'

export default function ActionProfile(props) {
    const {infoUser} = props
    const actions =[
        {
            id: 1,
            title: 'Cambiar foto de perfil',
            iconName: 'camera',
            action: () => console.log('Cambiar foto de perfil')
        },
        {
            id: 2,
            title: 'Cambiar nombre',
            iconName: 'account',
            action: () => console.log('Cambiar nombre')
        },
        {
            id: 3,
            title: 'Cambiar correo',
            iconName: 'email',
            action: () => console.log('Cambiar correo')
        },
        {
            id: 4,
            title: 'Cambiar contraseña',
            iconName: 'lock',
            action: () => console.log('Cambiar contraseña')
        },
    ]
  return (
    <View style={{marginVertical: 18}}>
      <FlatList
        data={actions}
        renderItem={({item}) =>(
            <ListAction
            action={item.action}
            title={item.title}
            iconName={item.iconName}
            />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({})