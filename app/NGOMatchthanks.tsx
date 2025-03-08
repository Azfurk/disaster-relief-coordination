import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ThankYou() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank You for Volunteering!</Text>
      <Text style={styles.message}>The NGO member will soon be in touch with you.</Text>

      <TouchableOpacity style={styles.homeButton} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  message: { fontSize: 18, textAlign: 'center', color: '#555', marginBottom: 30 },
  homeButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, width: '90%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
