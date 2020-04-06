import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

const AppText = props => {
  return (
    <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
  }
});

export default AppText;
