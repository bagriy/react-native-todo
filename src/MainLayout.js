import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import Navbar from './components/Navbar';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { ScreenContext } from './context/screen/ScreenContext';

const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  let content = todoId ? <TodoScreen /> : <MainScreen />;

  return (
    <View style={styles.wrapper}>
      <Navbar title={'Todo App'} />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
  },
  wrapper: {
    flex: 1,
  }
});

export default MainLayout;
