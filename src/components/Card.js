import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.description}</Text>
      <Text>{props.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
  },
});
