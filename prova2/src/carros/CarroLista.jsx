import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import CarroService from './CarroService'

export default function CarroLista({ navigation }) {

  const [carros, setCarros] = useState([])

  useEffect(() => {
    buscarCarros()
  }, [])

  async function buscarCarros() {
    const listaCarros = await CarroService.listar()
    setCarros(listaCarros)
  }

  async function removerCarro(id) {
    await CarroService.remover(id)
    alert('Carro excluído!')
    buscarCarros()
  }

  return (
    <View>
      <Button
        style={{ marginTop: 10 }}
        icon='plus'
        mode='contained'
        onPress={() => navigation.navigate('CarroForm')}
      >
        Cadastrar
      </Button>

      <FlatList
        data={carros}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <Text>ID: {item.id}</Text>
              <Text>Modelo: {item.modelo}</Text>
              <Text>Ano: {item.ano}</Text>
              <Text>Cor: {item.cor}</Text>
              <Text>Peça: {item.peca}</Text>
              <Text>Data de Entrada: {item.dataEntrada}</Text>
            </Card.Content>
            <Card.Actions>
              <Button icon='pencil' onPress={() => navigation.navigate('CarroForm', item)}>Editar</Button>
              <Button icon='delete' onPress={() => removerCarro(item.id)}>Excluir</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  )
}


