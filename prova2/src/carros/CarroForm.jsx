import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import CarroService from './CarroService'

export default function CarroForm({ navigation, route }) {

  const carroAntigo = route.params || {}

  const [modelo, setModelo] = useState(carroAntigo.modelo || "")
  const [ano, setAno] = useState(carroAntigo.ano || "")
  const [cor, setCor] = useState(carroAntigo.cor || "")
  const [peca, setPeca] = useState(carroAntigo.peca || "")

  async function salvar() {
    console.log("Salvar chamado com dados:", { modelo, ano, cor, peca });

    if (!modelo || !ano || !cor || !peca) {
      alert('Preencha todos os campos!');
      return;
    }

    let carro = { modelo, ano, cor, peca };

    try {
      if (carroAntigo.id) {
        carro.id = carroAntigo.id;
        await CarroService.atualizar(carro);
        alert('Pedido alterado com sucesso!!!');
      } else {
        await CarroService.salvar(carro);
        alert('Pedido cadastrado com sucesso!!!');
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'CarroLista' }]
      });
    } catch (error) {
      console.error('Erro ao salvar:', error);
      alert('Erro ao salvar dados, veja o console.');
    }
  }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados do pedido:</Text>

      <Text variant='titleLarge'>ID Pedido: {carroAntigo.id || 'NOVO'}</Text>

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Modelo"
        placeholder='Informe o modelo'
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Ano"
        placeholder='Informe o ano'
        value={ano}
        onChangeText={setAno}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Cor"
        placeholder='Informe a cor'
        value={cor}
        onChangeText={setCor}
      />

      <TextInput
        style={styles.input}
        mode='outlined'
        label="Peça"
        placeholder='Informe a peça'
        value={peca}
        onChangeText={setPeca}
      />

      <Button
        style={styles.input}
        mode='contained'
        onPress={salvar}
      >
        Salvar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  input: {
    width: '90%',
    marginTop: 10
  }
})
