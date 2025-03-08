import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProvideAssistanceMain() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provide Assistance</Text>

      {/* NGO Matching Option */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/NGOMatching')}>
        <Text style={styles.buttonText}>Find NGOs to Assist</Text>
      </TouchableOpacity>

      {/* Donation Option */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/DonateResources')}>
        <Text style={styles.buttonText}>Donate Resources</Text>
      </TouchableOpacity>

      {/* Back to Home */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#28A745', padding: 15, borderRadius: 8, marginVertical: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backButton: { backgroundColor: '#DC3545', padding: 15, borderRadius: 8, marginTop: 20, width: '80%', alignItems: 'center' },
});
