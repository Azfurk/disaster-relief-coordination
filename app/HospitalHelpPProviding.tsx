import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HospitalHelpProviding() {
  const router = useRouter();
  const [helpItems, setHelpItems] = useState({
    beds: '',
    medicalSupplies: '',
    ambulance: '',
    blood: '',
    financial: '',
  });
  const [newItem, setNewItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleInputChange = (key, value) => {
    setHelpItems({ ...helpItems, [key]: value });
  };

  const addHelpItem = () => {
    if (newItem && quantity) {
      setHelpItems({ ...helpItems, [newItem]: quantity });
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
      <Text style={styles.title}>Provide Assistance - Hospital</Text>

      <Text style={styles.subtitle}>Select what you can provide:</Text>

      <View style={styles.helpItem}>
        <Text style={styles.listItem}>🏥 Hospital Beds</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Quantity"
          value={helpItems.beds}
          onChangeText={(text) => handleInputChange('beds', text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.helpItem}>
        <Text style={styles.listItem}>💉 Medical Supplies</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Quantity"
          value={helpItems.medicalSupplies}
          onChangeText={(text) => handleInputChange('medicalSupplies', text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.helpItem}>
        <Text style={styles.listItem}>🚑 Ambulance Services</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Number of Vehicles"
          value={helpItems.ambulance}
          onChangeText={(text) => handleInputChange('ambulance', text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.helpItem}>
        <Text style={styles.listItem}>🩸 Blood Donations</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Units"
          value={helpItems.blood}
          onChangeText={(text) => handleInputChange('blood', text)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.helpItem}>
        <Text style={styles.listItem}>💰 Financial Assistance</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="Amount (in $)"
          value={helpItems.financial}
          onChangeText={(text) => handleInputChange('financial', text)}
          keyboardType="numeric"
        />
      </View>

      <Text style={styles.subtitle}>Add Custom Assistance:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type of assistance (e.g., emergency staff, oxygen tanks)"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity (e.g., 5 ventilators, 20 units of blood)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.addButton} onPress={addHelpItem}>
        <Text style={styles.buttonText}>Add Assistance</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Selected Help:</Text>
      {Object.keys(helpItems).map((key, index) =>
        helpItems[key] ? (
          <Text key={index} style={styles.selectedItem}>
            ✅ {key.replace(/([A-Z])/g, ' $1')} - {helpItems[key]}
          </Text>
        ) : null
      )}

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
  helpItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5, width: '90%' },
  listItem: { fontSize: 16, flex: 1 },
  quantityInput: { width: '30%', borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 5, textAlign: 'center' },
  input: { width: '90%', borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 },
  addButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginVertical: 10 },
  submitButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 20 },
  buttonText: { color: '#fff', fontSize: 16 },
  selectedItem: { fontSize: 16, marginVertical: 5, fontWeight: '500' }
});
