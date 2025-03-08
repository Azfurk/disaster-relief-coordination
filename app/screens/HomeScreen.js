import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster Relief App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/needAssistance')}>
        <Text style={styles.buttonText}>Need Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/auth')}>
        <Text style={styles.buttonText}>Provide Assistance</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
});
