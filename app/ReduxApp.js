import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header_shown, ScreenNames} from './constants/Constants';
import Splashscreen from './Splashscreen';
import ReduxEx from './ReduxEx';
import Main from './screens/Main';

const ReduxApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.SPLASH_SCREEN}>
        <Stack.Screen
          name={ScreenNames.SPLASH_SCREEN}
          component={Splashscreen}
          options={Header_shown}
        />
        <Stack.Screen
          name={ScreenNames.MAIN}
          component={Main}
          options={Header_shown}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ReduxApp;
