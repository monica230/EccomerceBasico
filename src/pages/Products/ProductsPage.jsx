import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const products = [
  { id: '1', name: 'Volante esportivo', price: 299.99, image: 'https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/kit-volante-e-cubo-lotse-maxx-competition-camurca.png' },
  { id: '2', name: 'Kit Nitro Nos', price: 7999.99, image: 'https://turbogarage.com.br/wp-content/uploads/2021/03/kit_nitro.jpg' },
  { id: '3', name: 'Rodas BBS', price: 3789.99, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYgm4gEsyQH98DPu0ZowbLHSCR0vXO-28K76-mQiiHRgk6jcQx7N6OvrT90dnjEiYLyt5M9yCpDFtwa68w0ZJDGMxpLyyn80SNztgnsVkRwggc_FoPHhIjjw&usqp=CAE' },
  { id: '4', name: 'Camiseta Paul Walker', price: 99.99, image: 'https://www.gtscustoms.com.br/cdn/shop/files/camiseta-em-homenagem-a-paul-walker-gts10-loja-gts-customs-1.png?v=1721310733&width=800' },
  { id: '5', name: 'Kit Eibach', price: 1951.99, image: 'https://images.tcdn.com.br/img/img_prod/1301610/kit_sportline_molas_esportivas_eibach_vw_novo_polo_1_0_1_6_1_0_tsi_1_4_tsi_2017_em_diante_985012_1_5f0c3275ea5753c9a129f183ca1ac9a3.jpg' },
];

export const ProductPage = () => {
  const { logout } = useAuth();
  const { addItem } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  };

  function handleAddCart(item) {
    addItem(item);
    alert(`${item.name} adicionado ao carrinho!`);
  }

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleAddCart(item)}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="#ccc"
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#1A2421', 
  },
  searchInput: {
    width: '100%',
    height: 45,
    borderColor: '#D9A300', 
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#1E1E1E', 
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 25,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFFFFF', // Texto branco
  },
  price: {
    fontSize: 16,
    color: '#888', // Cinza para o preço
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#D9A300', // Botão roxo destaque
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212', // Texto escuro no botão claro
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B9EA1',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#121212', // Texto escuro no botão claro
    fontSize: 16,
    fontWeight: 'bold',
  },
});
