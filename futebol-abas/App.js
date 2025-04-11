import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EscudoScreen from "./Componentes/EscudoScreen";
import JogadoresScreen from "./Componentes/JogadoresScreen";
import TitulosScreen from "./Componentes//TitulosScreen";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>

        <Tab.Navigator>
          
          <Tab.Screen 
          name='EscudoScreen' 
          component={EscudoScreen} 
          options={{
            title: 'Escudo ',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'red'
            },
          tabBarIcon: ({color, size}) => <Ionicons name="shield" color={color} size={size} />
          }}
          />

          <Tab.Screen 
          name='JogadorScreen' 
          component={JogadoresScreen}
          options={{
            title: 'Jogadores',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'red'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
          }}/>

          <Tab.Screen 
          name='TitulosScreen' 
          component={TitulosScreen}
          options={{
            title: 'Titulos ',
            headerTitleAlign: 'center',
            headerTitleColor: 'white',
            headerStyle:{
              backgroundColor: 'red'
            },
            tabBarIcon: ({color, size}) => <Ionicons name="trophy" color={color} size={size} />
          }}
          />

        </Tab.Navigator>

      </NavigationContainer>
    </PaperProvider>
  );
}