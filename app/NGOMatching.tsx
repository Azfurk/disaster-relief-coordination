import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const ngoList = [
  { id: '1', name: 'Helping Hands Foundation' },
  { id: '2', name: 'Global Relief Network' },
  { id: '3', name: 'Food for All Initiative' },
  { id: '4', name: 'Medical Aid Society' },
];

export default function NGOMatching() {
  const router = useRouter();
  const [selectedNGO, setSelectedNGO] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find NGOs to Assist</Text>

      <FlatList
        data={ngoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.ngoItem, selectedNGO === item.id && styles.selectedNGO]}
            onPress={() => setSelectedNGO(item.id)}
          >
            <Text style={styles.ngoText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[styles.proceedButton, !selectedNGO && styles.disabledButton]}
        onPress={() => selectedNGO && router.push(`/NGOMatchthanks`)}
        disabled={!selectedNGO}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  ngoItem: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginVertical: 10, width: '90%', alignItems: 'center', borderWidth: 1, borderColor: '#ccc' },
  selectedNGO: { backgroundColor: '#28A745', borderColor: '#1E7E34' },
  ngoText: { fontSize: 18, fontWeight: 'bold' },
  proceedButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 10, width: '90%', alignItems: 'center' },
  disabledButton: { backgroundColor: '#A0A0A0' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backButton: { backgroundColor: '#DC3545', padding: 15, borderRadius: 8, marginTop: 10, width: '90%', alignItems: 'center' },
});
