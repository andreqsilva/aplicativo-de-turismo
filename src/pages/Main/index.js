import React, {useState, useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MatrialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { 
  StyleSheet, 
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Message from '../../components/Message';
import Movements from '../../components/Movements';

/*
const list = [
  {
    codigo: 1,
    titulo: 'Salvador',
    localizacao: 'Aeroporto de Salvador',
    cidade: 'Salvador',
    tipo: 0
  },
  {
    codigo: 2,
    titulo: 'Hotel Atlântico Tower',
    localizacao: 'Centro',
    cidade: 'Rio de Janeiro',
    tipo: 1
  },
  {
    codigo: 3,
    titulo: 'Passeio de Barco',
    localizacao: 'Praia do Pontal',
    cidade: 'Rio de Janeiro',
    tipo: 2
  },
  {
    codigo: 4,
    titulo: 'Apê da Lapa',
    localizacao: 'Bairro da Lapa',
    cidade: 'Rio de Janeiro',
    tipo: 3
  },
]
*/

export default function App() {

  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  /* Conexão com o API */
  useEffect( () => {
    fetch("http://localhost:8080/listar")
    .then(response => response.json())
    .then(convet_response => setList(convet_response));
  }, []);

  /* Filtragem por palavra chave */ 
  const searchFilter = (text) => {
    if (text) {
      const newData = list.filter(
        function (item) {
          if (item.titulo) {
            const itemData = item.titulo.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        });
        setFilteredData(newData)
    } else {
      setFilteredData(list);
    }
    setSearch(text);
  };

  /* Filtragem por categoria */
  const categoryFilter = (filterType) => {
    const newData = list.filter(
      function(item) {
        return item.tipo === filterType;
      }
    );
    setFilteredData(newData);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Logo />
      <Message />

      <View style={styles.section}>
        <Ionicons style={{marginRight: 10}} name='search' size={32} color='gray' />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid='transparent'
          placeholder='O que você procura?'
        />
      </View>

      <View style={styles.filters}>
        <TouchableOpacity onPress={() => categoryFilter(0)} style={styles.filterButton} 
            activeOpacity={0.5}>
              <View style={styles.areaButton_ticket}>
                <FontAwesome name='plane' size={32} color='#FFF'/>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => categoryFilter(1)} style={styles.filterButton} activeOpacity={0.5} >
              <View style={styles.areaButton_accommodations}>
                <Ionicons name='md-bed-outline' size={32} color='#FFF'/>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => categoryFilter(2)} style={styles.filterButton} activeOpacity={0.5}>
              <View style={styles.areaButton_leisures}>
                <MatrialCommunityIcons name='umbrella-beach-outline' size={32} color='#FFF'/>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => categoryFilter(3)} style={styles.filterButton} activeOpacity={0.5}>
              <View style={styles.areaButton_restaurants}>
                <Ionicons name='restaurant-outline' size={32} color='#FFF'/>
              </View>
          </TouchableOpacity>
      </View>

      <FlatList 
        style={styles.list}
        data={filteredData.length > 0 ? filteredData : list}
        keyExtractor={(item) => String(item.codigo)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list:{
    marginStart: 30,
    marginEnd: 30,
    marginBottom: 20
  },
  section:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E1E1',
    borderColor: '#000',
    height: 42,
    width: 350,
    alignSelf: 'center',
    paddingStart: 14,
    paddingEnd: 14,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 30
  },
  textInput:{
    width: 290,
    height: 44,
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    borderRadius: 5
  },
  filters:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 84,
    marginBottom: 30,
    paddingStart: 30,
    paddingEnd: 30
  },
  filterButton:{
    alignItems: 'center'
  },
  areaButton_ticket:{
    backgroundColor: '#9DD8FA',
    height: 60,
    width: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaButton_accommodations:{
    backgroundColor: '#F5A860',
    height: 60,
    width: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaButton_leisures:{
    backgroundColor: '#48D1CC',
    height: 60,
    width: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaButton_restaurants:{
    backgroundColor: '#FA5555',
    height: 60,
    width: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center'
  },
});
