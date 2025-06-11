import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import CarroService from './CarroService';
import { ScrollView } from 'react-native-gesture-handler';

export default function CarroForm({ navigation, route }) {
  const carroAntigo = route.params || {};

  const [modelo, setModelo] = useState(carroAntigo.modelo || "");
  const [ano, setAno] = useState(carroAntigo.ano || "");
  const [cor, setCor] = useState(carroAntigo.cor || "");
  const [peca, setPeca] = useState(carroAntigo.peca || "");
  const [imagem, setImagem] = useState(carroAntigo.imagem || null);

  async function abrirCamera() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a câmera é necessária!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagem(uri);
    }
  }

  async function escolherDaGaleria() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImagem(uri);
    }
  }

  async function salvar() {
    const carro = { modelo, ano, cor, peca, imagem };
    if (!modelo || !ano || !cor || !peca) {
      alert('Preencha todos os campos!');
      return;
    }

    if (carroAntigo.id) {
      carro.id = carroAntigo.id;
      await CarroService.atualizar(carro);
      alert('Carro alterado com sucesso!');
    } else {
      await CarroService.salvar(carro);
      alert('Carro cadastrado com sucesso!');
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'CarroLista' }],
    });
  }

  return (
    <ScrollView> 
    <View style={styles.container}>
      <Text variant='titleLarge'>Cadastro de Carro</Text>

      <TextInput
        label="Modelo" value={modelo} onChangeText={setModelo}
        style={styles.input} mode="outlined"
      />
      <TextInput
        label="Ano" value={ano} onChangeText={setAno}
        style={styles.input} mode="outlined" keyboardType="numeric"
      />
      <TextInput
        label="Cor" value={cor} onChangeText={setCor}
        style={styles.input} mode="outlined"
      />
      <TextInput
        label="Peça" value={peca} onChangeText={setPeca}
        style={styles.input} mode="outlined"
      />

      <Button
        icon="camera"
        mode="outlined"
        onPress={abrirCamera}
        style={styles.input}
      >
        Tirar Foto
      </Button>

      <Button
        icon="image"
        mode="outlined"
        onPress={escolherDaGaleria}
        style={styles.input}
      >
        Escolher da Galeria
      </Button>

      {imagem && <Image source={{ uri: imagem }} style={styles.imagemPreview} />}

      <Button
        mode="contained"
        onPress={salvar}
        style={styles.input}
      >
        Salvar
      </Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  input: {
    width: '100%',
    marginTop: 10
  },
  imagemPreview: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 10
  }
});
