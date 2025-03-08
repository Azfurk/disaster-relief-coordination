import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export default function AssistanceConfirmation() {
  const router = useRouter();
  const chatbotURL = "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/06/17/20250306171203-VEI3KO3R.json"; // Replace with your actual chatbot link

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sit Tight, Help is on the Way</Text>
      <Text style={styles.subtitle}>
        Talk to our AI assistant for urgent advice.
      </Text>

      <TouchableOpacity style={styles.chatButton} onPress={() => Linking.openURL(chatbotURL)}>
        <Text style={styles.buttonText}>Chat with Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' },
  chatButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginTop: 20, width: '80%', alignItems: 'center' },
  backButton: { backgroundColor: '#DC3545', padding: 15, borderRadius: 8, marginTop: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
