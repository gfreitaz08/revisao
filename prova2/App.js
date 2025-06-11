import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarroStack from './src/carros/CarroStack';
import CameraScreen from './src/carros/CameraScreen';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen 
            name="CarroStack" 
            component={CarroStack}
            options={{
              title: 'Cadastro',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: 'red' },
              tabBarIcon: ({ color, size }) => <Ionicons name="car" color={color} size={size} />
            }}
          />

          <Tab.Screen 
            name="CameraScreen" 
            component={CameraScreen}
            options={{
              title: 'Câmera',
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: 'blue' },
              tabBarIcon: ({ color, size }) => <Ionicons name="camera" color={color} size={size} />
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  
  );
}
