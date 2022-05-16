import React from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider } from './hooks/auth';
import { Routes } from './Routes';

export function App() {
  return (
    <AuthProvider>
      <StatusBar
        barStyle='dark-content'
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Routes />
    </AuthProvider>
  );
}

