import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';

import { Http } from '../../api/http';
import { TodoContext } from './TodoContext';
import { ScreenContext } from './../screen/ScreenContext';
import { todoReducer } from './TodoReducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODOS
} from '../types';

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };

  const { changeScreen } = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const data = await Http.get('https://react-native-todoapp-72d1a.firebaseio.com/todos.json');

      let todos = [];

      if (data) {
        todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
      }

      dispatch({ type: FETCH_TODOS, todos });
    } catch (error) {
      showError('Something went wrong...');
    } finally {
      hideLoader();
    }
  };

  const addTodo = async title => {
    clearError();
    try {
      const data = await Http.post(
        'https://react-native-todoapp-72d1a.firebaseio.com/todos.json',
        { title }
      );

      dispatch({ type: ADD_TODO, title, id: data.name });
    } catch (error) {
      showError(error);
    }
  };

  const removeTodo = id => {
    const todo = state.todos.find(todo => todo.id === id);

    Alert.alert(
      'Removing todo',
      `Are you sure that you want to delete todo ${todo.title}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            changeScreen(null);
            try {
              await Http.delete(`https://react-native-todoapp-72d1a.firebaseio.com/todos/${id}.json`);

              dispatch({ type: REMOVE_TODO, id });
            } catch (error) {
              showError(error);
            }
          },
        }
      ],
      { cancelable: false }
    );
  };

  const updateTodo = async (id, title) => {
    try {
      await Http.patch(`https://react-native-todoapp-72d1a.firebaseio.com/todos/${id}.json`, { title });

      dispatch({ type: UPDATE_TODO, id, title });
    } catch (error) {
      showError('Something went wrong...');
    }
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = error => dispatch({ type: SHOW_ERROR, error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};
