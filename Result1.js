import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FetchData from './index1';
import AddData from './project/project2';
export default function Fetch({ navigation }) {
  return (
    <View style={styles.container}>
      <FetchData />
      <Button title="Go to ADD PAGE" onPress={() => navigation.navigate("AddData")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});