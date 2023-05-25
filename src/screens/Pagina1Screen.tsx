/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { navigatorStyles } from '../theme/navigatorStyles';


export const Pagina1Screen = ({navigation}:any) => {
  return (
    <View>
        <Text style={ navigatorStyles.text } >Pagina1Screen</Text>
        <Button
        title="Go to page 2.."
        onPress={() => navigation.navigate('Página 2')}
      />
       <Button
        title="Go to page 3.."
        onPress={() => navigation.navigate('Página 3')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Página 1')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
