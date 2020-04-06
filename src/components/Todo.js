import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import AppText from './ui/AppText';
import { THEME } from './../constants/theme';

const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.container}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: THEME.COLORS.LIGHT_GRAY,
    borderRadius: 5,
    marginBottom: 10,
  }
});

export default Todo;
