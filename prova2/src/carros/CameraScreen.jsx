import React, { useState } from 'react';
import { View, Image, StyleSheet, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function CameraScreen() {
  const [foto, setFoto] = useState(null);

  async function tirarFoto() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Você precisa permitir o uso da câmera');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      quality: 0.5,
      base64: false,
      allowsEditing: true,
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  function removerFoto() {
    Alert.alert(
      'Remover foto',
      'Tem certeza que deseja remover a foto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => setFoto(null),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Tirar Foto</Text>

      {foto ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: foto }} style={styles.imagem} />
          <Button
            icon="delete"
            mode="outlined"
            onPress={removerFoto}
            style={{ marginTop: 10 }}
          >
            Remover Foto
          </Button>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Nenhuma foto tirada.</Text>
      )}

      <Button
        icon="camera"
        mode="contained"
        onPress={tirarFoto}
        style={{ marginTop: 30 }}
      >
        Tirar Foto
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  previewContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
});
