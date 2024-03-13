
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings';
import { Image } from '@rneui/base';

export default function FlatListRestaurant(props) {
    const { image, title, description, rating } = props;
    return (
        <View style={styles.listRestaurant}>
            <Image
                source={{ uri: `${image}` }}
                style={styles.image}
            />
            <View style={styles.containerText}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.title}>{title}</Text>
                    <AirbnbRating
                        count={5}
                        isDisabled={true}
                        defaultRating={rating}
                        size={12}
                        showRating={false}
                
                    />
                </View>

                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listRestaurant: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 16,
        elevation: 5,
        padding: 3,
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        color: 'gray',
        fontSize: 16
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
    }
})