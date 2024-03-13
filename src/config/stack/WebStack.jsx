import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Icon } from '@rneui/themed';
import { Image } from '@rneui/base';
import FlatListRestaurant from '../../modules/restaurants/adapters/screens/components/FlatListRestaurant';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import Loading from '../../../../kernel/components/Loading';
import axios from 'axios '

export default function WebStack() {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/paises')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {data ? (
            <Text>{JSON.stringify(data)}</Text>
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      )}
    </View>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  
})