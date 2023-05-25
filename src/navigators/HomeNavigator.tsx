/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonScreen } from '../screens/PersonScreen';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagina 2" >
        <Stack.Screen name="Página 1" component={Pagina1Screen} />
        <Stack.Screen name="Página 2" component={Pagina2Screen} />
        <Stack.Screen name="Página 3" component={Pagina3Screen} />
        <Stack.Screen name="Person" component={PersonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
