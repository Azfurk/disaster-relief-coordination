import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function NeedAssistance() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Request Assistance</Text>
      <Text style={styles.subtitle}>Select what you need</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/assistanceDetails?category=food')}>
          <Text style={styles.buttonText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/assistanceDetails?category=water')}>
          <Text style={styles.buttonText}>Water</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/assistanceDetails?category=medical')}>
          <Text style={styles.buttonText}>Medical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/assistanceDetails?category=labor')}>
          <Text style={styles.buttonText}>Labor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/assistanceDetails?category=sos')}>
          <Text style={styles.buttonText}>SOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
  buttonContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  optionButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, margin: 10, width: 120, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
