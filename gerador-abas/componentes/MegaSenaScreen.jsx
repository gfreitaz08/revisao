
import { StyleSheet, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Card, Button, Text } from 'react-native-paper';

export default function Megasena() {
  const [megasena, setMegasena] = useState('');
  const [listaNumeros, setListaNumeros] = useState([]);

  function gerar() {
    const gerarNumeros = (quantidade, max) => {
      const numeros = new Set();
      while (numeros.size < quantidade) {
        const numeroGerado = Math.floor(Math.random() * (max + 1));
        numeros.add(numeroGerado);
      }
      return [...numeros].sort((a, b) => a - b);
    };

    const novosNumeros = gerarNumeros(5, 60);
    setMegasena(novosNumeros.join(', '));
    setListaNumeros([...listaNumeros, novosNumeros.join(', ')]);
  }

  return (
    <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71JHxD8U7HqsoG1OaZno3UczNsj3NoVaMug&s' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium">Gerador de Números da Mega-Sena</Text>
            <Text variant="displaySmall" style={{ marginVertical: 10 }}>
              {megasena ? `Números: ${megasena}` : 'Clique em Gerar'}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button onPress={gerar}>Gerar</Button>
          </Card.Actions>
        </Card>
        
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineSmall">Números Gerados:</Text>
            {listaNumeros.length > 0 ? (
              listaNumeros.map((numero, index) => (
                <Text key={index}>{numero}</Text>
              ))
            ) : (
              <Text>Nenhum número gerado ainda.</Text>
            )}
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  container: {
    width: '100%',
    height: '',
  },
  card: {
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
});
