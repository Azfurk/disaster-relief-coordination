import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HospitalRegistration() {
  const router = useRouter();
  const [hospitalName, setHospitalName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [certification, setCertification] = useState('');
  
  const handleSubmit = () => {
    if (!hospitalName || !location || !contact || !certification) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate successful registration
    alert('Hospital registered successfully! Proceeding to Help Provided page.');
    router.push('/HospitalHelpPProviding');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospital Registration</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Hospital Name"
        value={hospitalName}
        onChangeText={setHospitalName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Certification/Registration Number"
        value={certification}
        onChangeText={setCertification}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register & Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});