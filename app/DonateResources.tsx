import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { useRouter } from 'expo-router';

export default function DonateResources() {
  const router = useRouter();
  const [selectedNGO, setSelectedNGO] = useState('');
  const [donationType, setDonationType] = useState('');
  const [quantity, setQuantity] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donate Resources</Text>

      <Text style={styles.label}>Select NGO:</Text>
      <Picker
        selectedValue={selectedNGO}
        onValueChange={(itemValue) => setSelectedNGO(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Choose an NGO" value="" />
        <Picker.Item label="NGO 1" value="ngo1" />
        <Picker.Item label="NGO 2" value="ngo2" />
        <Picker.Item label="NGO 3" value="ngo3" />
      </Picker>

      <Text style={styles.label}>Donation Type:</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Food, Medical Supplies, Money"
        value={donationType}
        onChangeText={setDonationType}
      />

      <Text style={styles.label}>Quantity/Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount or quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/ThankYouNews')}>
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, alignSelf: 'flex-start', marginLeft: '10%', marginTop: 10 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, backgroundColor: '#fff', marginVertical: 10 },
  picker: { width: '80%', backgroundColor: '#fff', marginVertical: 10 },
  button: { backgroundColor: '#28A745', padding: 15, borderRadius: 8, marginTop: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
