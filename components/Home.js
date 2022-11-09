import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default Home = () => {
  return(
      <View style={styles.container}>
          <Text style={styles.text}>HomeScreen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  text: {
      fontSize:20,
  },
});