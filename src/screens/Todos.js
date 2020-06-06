import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/Card';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }, []);

  function renderCards() {
    return todos.map((todo) => (
      <Card description={todo.description} date={todo.createdAt} />
    ));
  }
  return (
    <View style={styles.styles}>
      <Text>Todos</Text>
      {renderCards()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
  },
});
