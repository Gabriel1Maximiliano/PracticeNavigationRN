/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { navigatorStyles } from '../theme/navigatorStyles';




interface IProps extends NativeStackScreenProps<any,any>{}

export const Pagina1Screen = ({navigation}:IProps) => {
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
    </View>
  );
};
