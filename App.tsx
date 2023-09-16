/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './src/Navigations/Routes';
import ApiClientProvider from './src/APIServices/apiServices';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App(): JSX.Element {
  const queryClient = new QueryClient()
  return (
    // <ApiClientProvider>
    <QueryClientProvider client={queryClient}>
    <View style={styles.container}>

          <Toast />
      <Routes />

    </View>
    </QueryClientProvider>
    // </ApiClientProvider>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1,
}
});

export default App;
