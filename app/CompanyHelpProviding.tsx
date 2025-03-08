import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CompanyHelpProviding() {
  const router = useRouter();
  const [helpItems, setHelpItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const addHelpItem = () => {
    if (newItem && quantity) {
      setHelpItems([...helpItems, { item: newItem, quantity }]);
      setNewItem('');
      setQuantity('');
    }
  };

  const submitHelp = () => {
    alert('Help details submitted successfully!');
    router.push('/ThankYouNews');  // Redirects to the Thank You page
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Provide Assistance - Company</Text>
      
      <Text style={styles.subtitle}>Select what you can provide:</Text>
      <Text style={styles.listItem}>📦 Food & Water</Text>
      <Text style={styles.listItem}>🏥 Medical Supplies</Text>
      <Text style={styles.listItem}>🏕 Shelter & Tents</Text>
      <Text style={styles.listItem}>🚛 Transportation</Text>
      <Text style={styles.listItem}>💰 Financial Assistance</Text>
      
      <Text style={styles.subtitle}>Add Custom Assistance:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type of assistance (e.g., clothing, power supply)"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity (e.g., 500 units, 10 trucks)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.addButton} onPress={addHelpItem}>
        <Text style={styles.buttonText}>Add Assistance</Text>
      </TouchableOpacity>
      
      <Text style={styles.subtitle}>Selected Help:</Text>
      {helpItems.map((help, index) => (
        <Text key={index} style={styles.selectedItem}>
          ✅ {help.item} - {help.quantity}
        </Text>
      ))}
      
      <TouchableOpacity style={styles.submitButton} onPress={submitHelp}>
        <Text style={styles.buttonText}>Submit Assistance</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
  listItem: { fontSize: 16, marginVertical: 5 },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 },
  addButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginVertical: 10 },
  submitButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
  selectedItem: { fontSize: 16, marginVertical: 5, fontWeight: '500' }
});
