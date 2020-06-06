import React from 'react';
import {SafeAreaView, Button, StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default () => {
  return (
    <View>
      <View style={styles.container}>
        <Button title="Entrar" onPress={Actions.todos}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
