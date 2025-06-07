import { createStackNavigator } from '@react-navigation/stack'

import CarroForm from './CarroForm'
import CarroLista from './CarroLista'

const Stack = createStackNavigator()

export default function CarroStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='CarroLista'
        component={CarroLista}
        options={{
          title: "Automov App",
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='CarroForm'
        component={CarroForm}
        options={{
          title: "Cadastro de Pedidos",
          headerTitleAlign: 'center'
        }}
      />

    </Stack.Navigator>
  )
}
