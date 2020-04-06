import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { THEME } from '../../constants/theme';

const AppLoader = () => {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" color={THEME.COLORS.PURPLE} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AppLoader;
