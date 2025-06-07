import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import Teste from './src/teste/Teste'
import CarroLista from './src/carros/CarroLista'
import CarroForm from './src/carros/CarroForm'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


function CarrosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CarroLista"
        component={CarroLista}
        options={{ title: 'Lista de Pedidos', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="CarroForm"
        component={CarroForm}
        options={{ title: 'Cadastro de Pedido', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  )
}


function Teste() {
  return null 
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName

              if (route.name === 'Carros') {
                iconName = 'car'
              } else if (route.name === 'Teste') {
                iconName = 'person'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Carros" component={CarrosStack} />
          <Tab.Screen name="Teste" component={Teste} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
