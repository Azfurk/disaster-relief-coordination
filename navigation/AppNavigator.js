import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../app/screens/HomeScreen';
import NeedAssistanceScreen from '../app/screens/NeedAssistanceScreen';
import ProvideAssistanceScreen from '../app/screens/ProvideAssistanceScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NeedAssistance" component={NeedAssistanceScreen} />
        <Stack.Screen name="ProvideAssistance" component={ProvideAssistanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
