import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default Image = () => {
  return(
      <View style={styles.container}>
          <Text style={styles.text}>ImageScreen</Text>
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