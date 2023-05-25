/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { navigatorStyles } from '../theme/navigatorStyles';



export const Pagina2Screen = ({navigation}:any) => {
  return (
    <View>
        <Text style={ navigatorStyles.text } >Pagina2Screen</Text>
        <Button
        title="Go back.."
        onPress={() => navigation.goBack()}
      />
       <Button
        title="Go to page 1.."
        onPress={() => navigation.navigate('Página 1')}
      />
    </View>
  );
};
