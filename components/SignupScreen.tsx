import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignupScreen() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (fullName && phoneNumber && email && password && confirmPassword) {
      setSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleClear = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>

        {submitted && (
          <View style={styles.output}>
            <Text style={styles.outputTitle}>Submitted Information:</Text>
            <Text>Name: {fullName}</Text>
            <Text>Phone: {phoneNumber}</Text>
            <Text>Email: {email}</Text>
            <Text>Password: {password}</Text>
            <Text>Confirm Password: {confirmPassword}</Text>
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
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },

  button: {
    backgroundColor: "#ff4f5a",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
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
