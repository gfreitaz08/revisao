import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Avatar, Button } from 'react-native-paper'

export default function Teste() {
  return (
    <View style={styles.container}>
      <Avatar.Icon size={100} icon="account" style={{ backgroundColor: '#6200ee' }} />
      <Text variant="titleLarge" style={styles.title}>Bem-vindo à aba Teste!</Text>
      <Text variant="bodyMedium" style={styles.text}>
        Aqui você pode colocar informações de teste, exemplos ou qualquer conteúdo.
      </Text>

      <Button
        mode="contained"
        onPress={() => alert('Você clicou no botão!')}
        style={styles.button}
      >
        Exemplo de Ação
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    width: '60%',
  },
})
