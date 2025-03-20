import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';


//componente principal
// Retornar oq sera redenrizado na tela
export default function App() {

  function Alerta (){
    alert("GOOOOOL")
  }
  return (

    <ScrollView>
    <View style={styles.container}>

      {/*  comentario dentro do template JSX */}
      <Text> </Text>
      <Text style={styles.TextoGrande}>Ronaldo Nazário</Text>
      <Text style={styles.SegundoTexto}>Ronaldo Luís Nazário de Lima, popularmente conhecido como Ronaldo Fenômeno, é um empresário e ex-futebolista brasileiro que atuava como centroavante, amplamente reconhecido como um dos melhores de todos os tempos. Atualmente é proprietário e presidente do Valladolid, da Espanha, que comprou em 2021.</Text>
      
      
      <Image
      source={{uri:'https://i.pinimg.com/236x/b0/f8/d6/b0f8d6745b7c8b644ec60a5767562f6f.jpg'}}
    style={{
    height : 600,
    width:400,
  
    }}
    />
    <Text> Ronaldo atualmente também é dono do Cruzeiro, time mineiro no qual foi revelado  </Text>
    <Image
      source={{uri:'https://i.pinimg.com/236x/06/fa/c6/06fac66ff50728ee14eb678069ae9f55.jpg'}}
    style={{
    height : 600,
    width:400
    }}
    /> 
    <Text> Ronaldo e Pele, apos conquista do penta</Text>
    <Image
      source={{uri:'https://i.pinimg.com/736x/09/10/f7/0910f7c2e26a8c6888ad5b60ed6b99c7.jpg'}}
    style={{
    height : 600,
    width:400
    }}
    />
    <Text> Ronaldo no Real Madrid, após ganhar a bola de ouro !</Text>
    <Image
      source={{uri:'https://i.pinimg.com/236x/0a/b6/d0/0ab6d0788284d87d97b409c7f959454f.jpg'}}
    style={{
    height : 700,
    width:400
    }}
    />
<Text> Ronaldo com a Copa do mundo </Text>
    <Image
      source={{uri:'https://i.pinimg.com/736x/b2/db/2d/b2db2de263daf0c4df58225ea6e164da.jpg'}}
    style={{
    height : 600,
    width:400
    }}
    />
    <Text>Ronaldo fenômeno é reconhecido por muitor brasileiros como o melhor jogador brasileiro </Text>
    <Button title='Gol' onPress={Alerta}></Button>
   <StatusBar style="auto"/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle:'italic'
  },
  SegundoTexto :{
    fontSize: 20,
    fontWeight:900,
    fontStyle: 'italic'
  }

});
