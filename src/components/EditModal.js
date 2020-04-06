import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal, Alert } from 'react-native';

import AppButton from './ui/AppButton';

import { THEME } from '../constants/theme';

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [newTitle, setNewTitle] = useState(value);

  const saveHandler = () => {
    if (newTitle.trim().length < 3) {
      Alert.alert(
        'Warning!',
        `Min length of title is 3 chars. There are ${newTitle.trim().length}`
      );
    } else {
      onSave(newTitle);
    }
  };

  const cancelHandler = () => {
    setNewTitle(value);
    onCancel();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false} >
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Something to do"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <View style={styles.buttonsContainer}>
          <AppButton onPress={cancelHandler} color={THEME.COLORS.RED}>Cancel</AppButton>
          <AppButton onPress={saveHandler}>Save</AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.COLORS.DARK_PURPLE,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

export default EditModal;
