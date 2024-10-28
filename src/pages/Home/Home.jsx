import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export const HomePage = ({ navigation }) => {
    const { getTotalItems } = useCart();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            { }
            <View style={styles.header}>
                <Text style={styles.title}>Bem-vindo à Loja Dark Mode</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>

            { }
            <View style={styles.navigation}>
                { }
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProductPage')}>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.navImage} />
                    <Text style={styles.navText}>Ver Produtos</Text>
                </TouchableOpacity>

                { }
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('CartPage')}>
                    <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.navImage} />
                    <Text style={styles.navText}>Carrinho ({getTotalItems()})</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A2421',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color:'#D9A300',
    },
    logoutButton: {
        backgroundColor: '#A4D8E1',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    logoutButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navButton: {
        backgroundColor: '#1E1E1E',
        borderRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#1A2421',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    navImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 30,
    },
    navText: {
        color: '#D9A300',
        fontSize: 20,
    },
});
