import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import AppTextBold from './AppTextBold';
import { THEME } from '../../constants/theme';

const AppButton = ({ children, onPress, color = THEME.COLORS.PURPLE }) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Wrapper onPress={onPress} activeopacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: THEME.COLORS.WHITE,
  }
});

export default AppButton;
