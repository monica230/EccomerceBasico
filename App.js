import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import './gesture-handler.native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import { HomePage } from './src/pages/Home/Home.jsx';
import { CartPage } from './src/pages/Cart/Cart.jsx';
import { ProductPage } from './src/pages/Products/ProductsPage.jsx';
import { Login } from './src/pages/Login/Login.jsx';

import { ThemeProvider } from './src/context/ThemeContext.jsx';
import { CartProvider, useCart } from './src/context/CartContext.jsx';
import { AuthProvider, useAuth } from './src/context/AuthContext.jsx';


const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <AuthProvider>
        <ThemeProvider>
          <CartProvider>
            <NavigationContainer>
              <StatusBar
                backgroundColor="transparent"
                translucent={true}
                barStyle="dark-content"
              />
              <Navigation />
            </NavigationContainer>
          </CartProvider>
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaView>

  )
}

const Navigation = () => {

  const { user } = useAuth()


  return (
    <>
      {user ?
        <Drawer.Navigator initialRouteName="Products">
          <Drawer.Screen
            name="E-Commerce"
            component={HomePage}
            options={{
              headerRight: () => <CartIconWithNavigation />,
              title: 'Dark Mode Store',
            }} />
          <Drawer.Screen name="Products" component={ProductPage} options={{
            headerRight: () => <CartIconWithNavigation />,
            title: 'Produtos',
          }} />
          <Drawer.Screen name="Cart" component={CartPage} />
        </Drawer.Navigator> : <Login />}
    </>
  )
}

const CartIconWithNavigation = () => {
  const navigation = useNavigation();
  const { getTotalItems } = useCart()

  return (
    <TouchableOpacity
      style={styles.cartContainer}
      onPress={() => navigation.navigate('Cart')}
    >
      <Icon name="cart-outline" size={24} color="#000" />
      <Text style={styles.cartCount}>{getTotalItems()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  cartCount: {
    marginLeft: 4,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});