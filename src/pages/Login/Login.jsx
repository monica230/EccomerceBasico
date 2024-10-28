import { useState } from "react";
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from "react-native";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {

    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        login(username, password);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor="#aaa"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A2421', 
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#D9A300',
    letterSpacing: 4,
    },
    input: {
        width: '70%',
        height: 45,
        borderColor: '#D9A300)', 
        borderWidth: 3,
        borderRadius: 35,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: '#1E1E1E', 
        color: '#D9A300', 
        fontSize: 20,
    },
    button: {
        width: '65%',
        height: 45,
        backgroundColor: '#3B9EA1',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#121212',
        letterSpacing: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
