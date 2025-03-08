import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CompanyHelpProviding() {
  const router = useRouter();
  const [helpItems, setHelpItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const predefinedItems = [
    'Food & Water',
    'Medical Supplies',
    'Shelter & Tents',
    'Transportation',
    'Financial Assistance',
    'Power Supply',
    'Clothing'
  ];

  const addHelpItem = () => {
    if (newItem && quantity) {
      setHelpItems([...helpItems, { item: newItem, quantity }]);
      setNewItem('');
      setQuantity('');
    }
  };

  const submitHelp = () => {
    alert('Help details submitted successfully!');
    router.push('/thankYou');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Provide Assistance - Company</Text>
      
      <Text style={styles.subtitle}>Select what you can provide:</Text>
      {predefinedItems.map((item, index) => (
        <View key={index} style={styles.helpItemRow}>
          <Text style={styles.listItem}>{item}</Text>
          <TextInput
            style={styles.quantityInput}
            placeholder="Quantity"
            keyboardType="numeric"
            onChangeText={(text) => {
              setHelpItems(prevItems => {
                const updatedItems = [...prevItems];
                const existingItem = updatedItems.find(help => help.item === item);
                if (existingItem) {
                  existingItem.quantity = text;
                } else {
                  updatedItems.push({ item, quantity: text });
                }
                return updatedItems;
              });
            }}
          />
        </View>
      ))}
      
      <Text style={styles.subtitle}>Add Custom Assistance:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type of assistance"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
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

      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.buttonText}>Donate Money</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
  listItem: { fontSize: 16, marginVertical: 5, flex: 1 },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 },
  quantityInput: { width: 80, borderWidth: 1, borderColor: '#ccc', padding: 8, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
  addButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginVertical: 10 },
  submitButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 20 },
  donateButton: { backgroundColor: '#FF4500', padding: 15, borderRadius: 8, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 16 },
  selectedItem: { fontSize: 16, marginVertical: 5, fontWeight: '500' },
  helpItemRow: { flexDirection: 'row', alignItems: 'center', width: '90%', marginVertical: 5 }
});
