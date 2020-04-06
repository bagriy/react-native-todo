import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { THEME }  from './../constants/theme';

const AddTodo = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onAdd(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Todo can not be blank');
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Something to do"
        autoCorrect={false}
      />
      {/*<Button title="Add" onPress={pressHandler} />*/}
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">Add</AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.DARK_PURPLE,
    padding: 10,
  }
});

export default AddTodo;
