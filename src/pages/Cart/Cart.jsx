import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {

    const { items, removeItem, addItem, getTotalItems, valorTotal } = useCart();

    const renderProduct = (item) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>

                {}
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => removeItem(item.id)}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>{item.quantity}</Text>

                    <TouchableOpacity style={styles.quantityButton} onPress={() => addItem(item)}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                    <Text style={styles.removeButtonText}>Remover do Carrinho</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {getTotalItems() === 0 && <Text style={styles.emptyText}>Não existem itens no carrinho</Text>}
            {items.map(item => renderProduct(item))}
            <Text style={styles.totalText}>Valor Total: R$ {valorTotal().toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1A2421',
    },
    card: {
        backgroundColor: '#1A2421',
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
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#D9A300',
    },
    price: {
        fontSize: 16,
        color: '#3B9EA1',
        marginBottom: 8,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    quantityButton: {
        backgroundColor: '#3B9EA1',
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    quantityButtonText: {
        color: '#121212',
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityText: {
        color: '#FFFFFF',
        fontSize: 16,
        marginHorizontal: 10,
    },
    removeButton: {
        backgroundColor: '#D9A300',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#121212',
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 20,
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
        marginTop: 50,
    },
});
