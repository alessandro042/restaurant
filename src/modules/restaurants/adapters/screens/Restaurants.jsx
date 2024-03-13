import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Icon } from '@rneui/themed';
import { Image } from '@rneui/base';
import FlatListRestaurant from './components/FlatListRestaurant';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import Loading from '../../../../kernel/components/Loading';

export default function Restaurants() {

  useEffect(() => {

    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "restaurants"));
      const arrayRestaurants = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data("title")}`);
        arrayRestaurants.push({
          uid: doc.id,
          title: doc.data()["title"],
          description: doc.data()["description"],
          rating: doc.data()["rating"],
          image: doc.data()["image"]
        });
        setRestaurants(arrayRestaurants);
      });
      } catch (e) {
        console.error("Error reading document: ", e);
      }finally{
        setLoading(false);
      }

    })()
  }, []);
  const db = getFirestore();
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => 
        <FlatListRestaurant
      image={item.image}
      title={item.title}
      description={item.description}
      rating={item.rating}
      />
      }
        keyExtractor={item => item.uid}
      />
      <Loading isShow={loading} title='Cargando restaurants...' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  
})