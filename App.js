import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Button title="Entrar" onPress={() => alert('Opa')}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
  },
  title: {
    fontSize: 30,
  },
});
