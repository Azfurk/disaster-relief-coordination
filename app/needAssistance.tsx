import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function NeedAssistance() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Request Assistance</Text>
        <Text style={styles.subtitle}>Select what you need</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/assistanceDetails?category=food")}
          >
            <Text style={styles.buttonText}>🍽️ Food</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/assistanceDetails?category=water")}
          >
            <Text style={styles.buttonText}>💧 Water</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/assistanceDetails?category=medical")}
          >
            <Text style={styles.buttonText}>🩺 Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/assistanceDetails?category=labor")}
          >
            <Text style={styles.buttonText}>⚒️ Labor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sosButton}
            onPress={() => router.push("/assistanceDetails?category=sos")}
          >
            <Text style={styles.buttonText}>🚨 SOS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.7)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  optionButton: {
    width: 130,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 123, 255, 0.85)", // Blue with slight transparency
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  sosButton: {
    width: 130,
    paddingVertical: 12,
    margin: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(220, 0, 0, 0.85)", // Red for emergency SOS
    shadowColor: "#ff4d4d",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
