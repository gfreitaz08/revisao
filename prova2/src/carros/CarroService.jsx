import AsyncStorage from '@react-native-async-storage/async-storage';

async function listar() {
  const jsonValue = await AsyncStorage.getItem('@carros');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
}

async function salvar(carro) {
  carro.id = new Date().getTime();
  const carros = await listar();
  carros.push(carro);
  await AsyncStorage.setItem('@carros', JSON.stringify(carros));
}

async function buscar(id) {
  const carros = await listar();
  return carros.find(carro => carro.id === id);
}

async function remover(id) {
  const carros = await listar();
  const novaLista = carros.filter(carro => carro.id !== id);
  await AsyncStorage.setItem('@carros', JSON.stringify(novaLista));
}

async function atualizar(novoCarro) {
  const carros = await listar();
  const novaLista = carros.map(carro => carro.id === novoCarro.id ? novoCarro : carro);
  await AsyncStorage.setItem('@carros', JSON.stringify(novaLista));
}

export default {
  listar,
  salvar,
  buscar,
  atualizar,
  remover
};
