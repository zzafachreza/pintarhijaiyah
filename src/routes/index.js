import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Belajar,
  BelajarSambung,
  Lagu,
  Play,
  Kuis,
  Level_1,
  Hasil,
  History,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: 'Register',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Belajar"
        component={Belajar}
        options={{
          headerShown: true,
          headerTitle: 'BELAJAR',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="BelajarSambung"
        component={BelajarSambung}
        options={{
          headerShown: true,
          headerTitle: 'BELAJAR SAMBUNG HURUF',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Lagu"
        component={Lagu}
        options={{
          headerShown: true,
          headerTitle: 'LAGU ISLAMI',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          headerShown: true,
          headerTitle: 'PUTAR LAGU',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Kuis"
        component={Kuis}
        options={{
          headerShown: true,
          headerTitle: 'KUIS',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Hasil"
        component={Hasil}
        options={{
          headerShown: true,
          headerTitle: 'HASIL',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          headerTitle: 'History',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Level_1"
        component={Level_1}
        options={{
          headerShown: true,
          headerTitle: 'LEVEL 1',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





    </Stack.Navigator>
  );
}
