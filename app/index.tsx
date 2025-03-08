import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disaster Relief App</Text>

      {/* Need Assistance → Goes Directly to itinerary */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/needAssistance')}>
        <Text style={styles.buttonText}>Need Assistance</Text>
      </TouchableOpacity>

      {/* Provide Assistance → Goes to Login first */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Provide Assistance</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
