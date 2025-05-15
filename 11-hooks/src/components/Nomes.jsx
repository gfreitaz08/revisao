import { StyleSheet, View } from 'react-native'
import React from 'react'
import{ Card, Text, Button} from 'react-native-paper'
export default function Nomes() {

     const [nome, setNome] =  useState ('?????')
     function esconder (){
        setNome('?????')
        setNome(numero +1)
        console.log(nome)
     }
     function revelar () {
        setNome('Gabriel')
        setNome(numero + 1)
        console.log(nome)

    }
  return (
    <View>
    <Card>
        <Card.Content>
           <Card.Title title="Componente Nome" />
           <Text variant='displayMedium'> Nome: {nome}</Text> 
           <Text variant='displaySmall'> Contador de Clicks: {numero}</Text>
           <Card.Actions>
           <Button> esconder</Button>
           
           </Card.Actions>
           
    </Card>
    </View>
  )
}

