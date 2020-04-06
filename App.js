import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MainLayout from './src/MainLayout';
import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';

import { THEME } from './src/constants/theme';

const loadFonts = async () => {
  await Font.loadAsync({
    [THEME.FONTS.ROBOTO_REGULAR]: require('./assets/fonts/Roboto-Regular.ttf'),
    [THEME.FONTS.ROBOTO_BOLD]: require('./assets/fonts/Roboto-Bold.ttf'),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout/>
      </TodoState>
    </ScreenState>
  );
}
