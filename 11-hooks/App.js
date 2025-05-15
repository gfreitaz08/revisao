import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = route.name === 'Mega-Sena' ? 'numeric' : 'dog';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Mega-Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
