import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "teste@email.com" && password === "123456") {
      alert("Login bem-sucedido!");
      navigation.navigate("Preferences"); // Redireciona para a tela de Preferências
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Alinha o conteúdo no topo
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: "10%", // Cria um espaço superior
  },
  welcomeTextContainer: {
    width: "100%",
    height: "40%", // Área de 40% da tela
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A8FFF", // Cor do topo
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  loginContainer: {
    width: "100%",
    height: "60%", // O restante da tela (60%)
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
