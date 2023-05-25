/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import { navigatorStyles } from '../theme/navigatorStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface IProps extends NativeStackScreenProps<any,any>{}

export const Pagina3Screen = ({navigation}:IProps) => {
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
