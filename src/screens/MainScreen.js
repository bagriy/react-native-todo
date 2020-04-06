import React, { useContext, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import { TodoContext } from '../context/todo/TodoContext';
import { ScreenContext } from '../context/screen/ScreenContext';
import AppLoader from '../components/ui/AppLoader';
import AppText from '../components/ui/AppText';
import AppButton from '../components/ui/AppButton';
import { THEME } from '../constants/theme';

const MainScreen = () => {
  const { todos, addTodo, removeTodo, fetchTodos, loading, error } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading) {
    return <AppLoader />
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <AppText  style={styles.error}>{error}</AppText>
        <AppButton onPress={loadTodos}>Reload</AppButton>
      </View>
    );
  }

  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />}
      keyExtractor={item => item.id.toString()}
    />
  );

  if (!todos.length) {
    content = (
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/original.png')} style={styles.image} />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onAdd={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  error: {
    color: THEME.COLORS.RED,
    fontSize: 20,
    paddingBottom: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
