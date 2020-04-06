import React, { useState, useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import AppCard from '../components/ui/AppCard';
import EditModal from './../components/EditModal';
import AppTextBold from '../components/ui/AppTextBold';
import AppButton from '../components/ui/AppButton';

import { THEME }  from './../constants/theme';
import { TodoContext } from '../context/todo/TodoContext';
import { ScreenContext } from '../context/screen/ScreenContext';

const TodoScreen = () => {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modalState, setModalState] = useState(false);

  const todo = todos.find(todo => todo.id === todoId);

  const saveHandler = async title => {
    await updateTodo(todo.id, title);
    setModalState(false);
  };

  return (
    <View>
      <EditModal
        visible={modalState}
        onCancel={() => setModalState(false)}
        value={todo.title}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModalState(true)}><FontAwesome name="edit" size={20} /></AppButton>
      </AppCard>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <AppButton onPress={() => changeScreen(null)} color={THEME.COLORS.GRAY}>
            <AntDesign name="back" size={20} color={THEME.COLORS.WHITE} />
          </AppButton>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton onPress={() => removeTodo(todo.id)} color={THEME.COLORS.RED}>
            <FontAwesome name="remove" size={20} color={THEME.COLORS.WHITE} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  }
});

export default TodoScreen;
