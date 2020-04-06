import React from 'react';
import { View, StyleSheet } from 'react-native';

import { THEME} from '../../constants/theme';

const AppCard = props => {
  return (
    <View style={{ ...styles.default, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    // shadow for iOS
    shadowColor: THEME.COLORS.BLACK,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2},
    // shadow for Android
    elevation: 8,
  }
});

export default AppCard;
