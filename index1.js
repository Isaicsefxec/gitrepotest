import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { db } from './config'
import { ref, onValue } from 'firebase/database'

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Code to fetch data and set it to state
    const starCountRef = ref(db, 'posts/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]

      }));
      setData(newPosts);

    });

  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fetch Data</Text>
      {data.map(item => (
        <View style={styles.item} key={item.id}>
          <Text>CR.NO: {item.title}</Text>
          <Text>Selection of Law: {item.body}</Text>
         
          <Text></Text>

        </View>
      ))}
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#afeeee',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FetchData;
