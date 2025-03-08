import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const helpCategories = [
  'Food & Water',
  'Clothing & Blankets',
  'Shelter & Housing',
  'Manpower & Volunteers',
  'Medical Aid',
  'Transportation & Evacuation'
];

export default function NGOHelpProviding() {
  const router = useRouter();
  const [selectedHelp, setSelectedHelp] = useState({});
  const [customHelp, setCustomHelp] = useState('');

  const handleInputChange = (category, value) => {
    setSelectedHelp({ ...selectedHelp, [category]: value });
  };

  const handleSubmit = () => {
    console.log('Help Provided:', selectedHelp, 'Custom Help:', customHelp);
  }
  const submitHelp = () => {
    alert('Help details submitted successfully!');
    router.push('/ThankYouNews');  // Redirects to the Thank You page
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>NGO Help Providing</Text>
      {helpCategories.map((category, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{category}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Quantity"
            onChangeText={(value) => handleInputChange(category, value)}
          />
        </View>
      ))}
      <Text style={styles.label}>Custom Help</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe any additional help"
        value={customHelp}
        onChangeText={setCustomHelp}
      />
      <TouchableOpacity style={styles.donateButton} onPress={() => alert('Redirecting to donation portal...')}>
        <Text style={styles.buttonText}>Donate Money 💰</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={submitHelp}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { width: '100%', marginBottom: 15 },
  label: { fontSize: 16, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginTop: 5 },
  donateButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginVertical: 10 },
  submitButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 }
});
