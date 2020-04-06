import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const AppTextBold = props => {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
  }
});

export default AppTextBold;
