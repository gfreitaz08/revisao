import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState({});

  const animais = [
    {
    numero: 1,
    nome: 'Avestruz',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AOpu0_92EJQAnFZYVM_DKNooBF41fillIA&s',
    },
    {
    numero: 2,
    nome: 'Águia',
    imagem: 'https://preview.redd.it/anyone-have-this-terrifying-image-of-a-edited-eagle-but-hd-v0-75ngtm5p990b1.png?width=750&format=png&auto=webp&s=54d858add8ab19b4f52790f2466764ace4da8fec',
    },
    {
    numero: 3,
    nome: 'Burro',
    imagem: 'https://us-tuna-sounds-images.voicemod.net/ee964716-276e-4021-8007-10ba59141c2b-1720382678747.png',
    },
    {
    numero: 4,
    nome: 'Borboleta',
    imagem: 'https://e7.pngegg.com/pngimages/274/698/png-clipart-ulysses-butterfly-insect-swallowtail-butterfly-gatekeeper-fall-from-the-sky.png',
    },
    {
    numero: 5,
    nome: 'Cachorro',
    imagem: 'https://i.pinimg.com/474x/f1/df/dd/f1dfdda94f87aa15489ca239c1d71a89.jpghttps://i.pinimg.com/474x/f1/df/dd/f1dfdda94f87aa15489ca239c1d71a89.jpg',
    },
    {
    numero: 6,
    nome: 'Cabra',
    imagem: 'https://img.freepik.com/fotos-gratis/fazenda-de-cabras-fotorrealista_23-2151450320.jpg?semt=ais_hybrid&w=740',
    },
    {
    numero: 7,
    nome: 'Carneiro',
    
    imagem: 'https://img.freepik.com/fotos-gratis/retrato-de-ovelhas-com-oculos-de-sol-frios_23-2151195462.jpg?semt=ais_hybrid&w=740',
    },
    {
    numero: 8,
    nome: 'Camelo',
    imagem: 'https://st.depositphotos.com/1000423/2642/i/950/depositphotos_26423657-stock-photo-portrait-of-a-funny-camel.jpg',
    },
    {
    numero: 9,
    nome: 'Cobra',
    imagem: 'https://pbs.twimg.com/media/CoFQNPQW8AAKYC9.jpg',
    },
    {
    numero: 10,
    nome: 'Coelho',
    imagem: 'https://s2-g1.glbimg.com/bU-nP4uEY6OVjfJcSExl7LRvPCU=/0x0:460x284/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/5/v/oVPf8EQnahHK33RqZZXQ/whatsapp-image-2023-10-16-at-17.21.13.jpeg',
    },
    ];

  const gerarAnimal = () => {
    const indiceAleatorio = Math.floor(Math.random() * animais.length);
    setAnimalGerado(animais[indiceAleatorio]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do Bicho</Text>
      <Button title="Gerar Animal" onPress={gerarAnimal} />

      {animalGerado.nome ? (
        <View style={styles.resultContainer}>
          <Text style={styles.animalName}>{animalGerado.nome}</Text>
          <Image 
            source={{ uri: animalGerado.imagem }} 
            style={styles.animalImage} 
            resizeMode="contain" 
          />
        </View>
      ) : (
        <Text style={styles.placeholder}>Nenhum animal gerado ainda.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  animalName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  animalImage: {
    width: 200,
    height: 200,
  },
  placeholder: {
    fontSize: 18,
    marginTop: 20,
    color: 'gray',
  },
});