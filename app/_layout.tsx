import { Slot, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import '../style/global.css';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
