import {} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function Login(props) {
    const {name, lastname, age} = props;
    return (
        <View style={styles.container}>
            <Text >{name}</Text>
            <Text >{lastname}</Text>
            <Text >{age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
        alignItems: 'center',
    },
})
