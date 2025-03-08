import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function NGORegistrationScreen() {
  const router = useRouter();
  const [ngoName, setNgoName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [assistanceType, setAssistanceType] = useState('');

  const handleSubmit = () => {
    if (!ngoName || !contactPerson || !contactNumber || !assistanceType) {
      alert('Please fill all fields');
      return;
    }
    alert('NGO Registered Successfully!');
    router.push('/NgoHelpProviding');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NGO Registration</Text>
      
      <TextInput style={styles.input} placeholder="NGO Name" value={ngoName} onChangeText={setNgoName} />
      <TextInput style={styles.input} placeholder="Contact Person" value={contactPerson} onChangeText={setContactPerson} />
      <TextInput style={styles.input} placeholder="Contact Number" keyboardType="phone-pad" value={contactNumber} onChangeText={setContactNumber} />
      <TextInput style={styles.input} placeholder="Type of Assistance" value={assistanceType} onChangeText={setAssistanceType} />
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/NgoHelpProviding')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
