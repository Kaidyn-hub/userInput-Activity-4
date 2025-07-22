import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    if (emailOrPhone && password) {
      setLoginSuccess(true);
    } else {
      alert('Please fill out all fields.');
    }
  };


  const handleClear = () => {
    setEmailOrPhone('');
    setPassword('');
    setLoginSuccess(false);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="E-mail or phone number"
        keyboardType="email-address"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.cancelButton} onPress={handleClear}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      </View>

      <Text style={styles.orText}>OR</Text>

      <View style={styles.buttonContainer}>
      <Pressable style={styles.facebookButton} onPress={() => alert('Login with Facebook')}>
        <Text style={styles.facebookText}>Login with Facebook</Text>
      </Pressable>
      </View>

      {loginSuccess && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputTitle}>Login Details:</Text>
          <Text style={styles.outputText}>Email/Phone: {emailOrPhone}</Text>
          <Text style={styles.outputText}>Password: {password}</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#ff4f5a",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  orText: {
    marginVertical: 15,
    color: "#aaa",
    fontWeight: "bold",
  },
  facebookButton: {
    backgroundColor: "#1877F2",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  facebookText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  output: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },
  clearButton: {
    backgroundColor: "#ccc",
    marginTop: 10,
  },
  outputText: {
    fontSize: 16,
    color: "#333",
  },
  outputContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },

});
