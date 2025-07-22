import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say hello to your new app</Text>

      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/signup" asChild>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </Link>
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
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ff4f5a",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff4f5a",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: "#ff4f5a",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 76,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonOutlineText: {
    color: "#ff4f5a",
    fontWeight: "600",
    fontSize: 16,
  },
});