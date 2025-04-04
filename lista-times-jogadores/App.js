import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <View style={styles.timeContainer}>
      <Image source={{ uri: imagem }} style={styles.timeImage} />
      <Text style={styles.timeNome}>{nome}</Text>
      <Text style={styles.timeInfo}>Fundado em: {anoFundacao}</Text>
      <Text style={styles.timeInfo}>Mascote: {mascote}</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.jogadorContainer}>
            <Image source={{ uri: item.imagem }} style={styles.jogadorImagem} />
            <Text style={styles.jogadorNome}>{item.nome}</Text>
            <Text style={styles.jogadorNumero}>#{item.numero}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.jogadoresLista}
      />
    </View>
  );
};

export default function App() {
  const times = [
    {
      nome: "Flamengo",
      anoFundacao: 1895,
      mascote: "Urubu",
      imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
      jogadores: [
        { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
        { nome: "Arrascaeta", numero: 14, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" },
        { nome: "Everton Ribeiro", numero: 7, imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg" },
        { nome: "Plata", numero: 50, imagem: "https://i.pinimg.com/474x/74/5c/ac/745cac71c034579b042e60ec9a014d9c.jpg" },
        { nome: "Pedro", numero: 21, imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg" },
      ],
    },
    {
      nome: "Atlético Mineiro",
      anoFundacao: 1908,
      mascote: "Galo",
      imagem: "https://i.pinimg.com/236x/0b/00/31/0b0031de783db64c86272078ba9eb72e.jpg",
      jogadores: [
      { nome: "Hulk", numero: 7, imagem: "https://i.pinimg.com/474x/ff/9b/38/ff9b384ca6fd51ce56afbdfe14e5b67d.jpg" },
      { nome: "Nacho Fernández", numero: 26, imagem: "https://i.pinimg.com/474x/63/fa/af/63faaf414f6278f7187f73bad233ccf2.jpg" },
      { nome: "Everson", numero: 22, imagem: "https://i.pinimg.com/236x/2d/2f/f8/2d2ff8cad95ac498721d23269ba9540c.jpg" },
      { nome: "Keno", numero: 11, imagem: "https://i.pinimg.com/236x/6b/1c/c2/6b1cc2d9050291b69b7e6b3be1341a8a.jpg" },
      { nome: "Jair", numero: 8, imagem: "https://i.pinimg.com/236x/f8/55/29/f8552940089ced07181f7cbff4d6b7f7.jpg" },
      ],
      },
    {
      nome: "Palmeiras",
      anoFundacao: 1914,
      mascote: "Porco",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
      jogadores: [
        { nome: "Felipe Anderson", numero: 7, imagem: "https://i.pinimg.com/736x/fb/bc/dd/fbbcdd7e0f1cc7eeed3583edc711c32c.jpg" },
        { nome: "Rony", numero: 10, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgUdYFxVZ_Xcbxu5oH1kEW901k6CBlo5HqQ&s" },
        { nome: "Gustavo Gómez", numero: 15, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSDoMd92gRlpFWvRkRogzve_Ha0GmochkTA&s" },
        { nome: "Weverton", numero: 1, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAUutKhsGHVCEVgk8Zj65IwHCkFsDkfaMYg&s" },
        { nome: "Raphael Veiga", numero: 23, imagem: "https://lncimg.lance.com.br/uploads/2024/10/raphael-veiga-100-gol-palmeiras-fortaleza-campeonato-brasileiro-scaled-aspect-ratio-512-320.jpg" },
      ],
    }
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={times}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Time {...item} />}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  timeContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  timeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  timeNome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  timeInfo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  jogadoresLista: {
    marginTop: 10,
    paddingLeft: 10,
  },
  jogadorContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 120,
  },
  jogadorImagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  jogadorNome: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  jogadorNumero: {
    fontSize: 12,
    color: '#666',
  },
});