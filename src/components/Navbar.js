import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import AppTextBold from './ui/AppTextBold';
import { THEME } from '../constants/theme';

const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: THEME.COLORS.PURPLE,
    paddingBottom: 10,
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: 20,
  },
});

export default Navbar;
