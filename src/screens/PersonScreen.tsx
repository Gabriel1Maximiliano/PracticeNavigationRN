/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';
import { navigatorStyles } from '../theme/navigatorStyles';
export const PersonScreen = ({navigation}:any) => {
    return (
        <View>
          <Text style={ navigatorStyles.text } >PersonNavigator</Text>
          <Button
        title="Go to Person.."
        onPress={() => navigation.navigate('Página 3')}
      />
       <Button
        title="Go back.."
        onPress={() => navigation.goBack()}
      />
        </View>
      );
};
