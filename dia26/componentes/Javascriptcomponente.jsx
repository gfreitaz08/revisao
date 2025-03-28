import { StyleSheet, Text, Button, View } from 'react-native'
import React from 'react'

export default function Javascriptcomponente() {

    // logica do componente
    const nome = "Gabriel"
    const idade= "19"

    function ChecarMaiorIdade(){ 
        if(idade >= 18 ){
            return "maior idade"
        } else {
            return" Menor de idade "
        }
    }
    function alerta (){ 
        alerta('CLIQUE CARAI')
    }
    

  return (
    <View style={styles.container}> 
      <Text style={ styles.texto}>NOME: {nome}</Text>
      <Text style={ styles.texto}>IDADE: {idade}</Text>
      <Text style={ styles.texto}>ANO DE NASCIMENTO: {2025 - idade }</Text>
      <Text> 18+ : {ChecarMaiorIdade}</Text>

      <Button title= ' ENVIAR' onPress={alerta} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: 'grey',
    borderWidth: 5, 
    padding: 10 
    },
    texto: { 
        fontSize:20,
        fontWeight: 600
    }
})