/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { navigatorStyles } from '../theme/navigatorStyles';



export const Pagina3Screen = ({navigation}:any) => {
  return (
    <View>
        <Text style={ navigatorStyles.text } >Pagina3Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
        title="Go to page person.."
        onPress={() => navigation.navigate('Person')}
      />
    </View>
  );
};
