import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import MobileScreen from '../Screens/MobileScreen';
import EmailSignUp from '../Screens/EmailSignUp';
import OnBoardScreen from '../Screens/OnBoardScreen';
import SignUpOption from '../Screens/SignUpOption';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboardscreen"
        screenOptions={{contentStyle: {backgroundColor: 'dark'}}}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mobile"
          component={MobileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailSignUp"
          component={EmailSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboardscreen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpOption"
          component={SignUpOption}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
