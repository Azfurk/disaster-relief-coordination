import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import styles from "./constants/styles";
import { Stack } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")} // ✅ Check Path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Disaster Relief App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/needAssistance")}
        >
          <Text style={styles.buttonText}>🚨 Need Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.buttonText}>🤝 Provide Assistance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orgButton}
          onPress={() => router.push("/OrganizationTypeScreen")}
        >
          <Text style={styles.buttonText}>🏢 Organization Assistance</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
