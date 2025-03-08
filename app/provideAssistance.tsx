import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProvideAssistanceMain() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provide Assistance</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/provideAssistance/food')}>
        <Text style={styles.buttonText}>Food Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/provideAssistance/water')}>
        <Text style={styles.buttonText}>Water Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/provideAssistance/medical')}>
        <Text style={styles.buttonText}>Medical Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/provideAssistance/shelter')}>
        <Text style={styles.buttonText}>Shelter Assistance</Text>
      </TouchableOpacity>

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
