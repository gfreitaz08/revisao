
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import JogoDoBichoScreen from './Screens/JogoDoBichoScreen';
import MegaSenaScreen from './Screens/MegaSenaScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Jogo do Bicho') {
              iconName = 'paw'; 
            } else if (route.name === 'Mega Sena') {
              iconName = 'logo-usd'; 
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2ecc71',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
