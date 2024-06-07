import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { RegisterScreen } from './src/configs/screens/RegisterScreen';
import { LoginScreen } from './src/configs/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const  App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <LoginScreen/>
        {/* <RegisterScreen/> */}
      </PaperProvider>
    </NavigationContainer>
  )
}

export default App;

