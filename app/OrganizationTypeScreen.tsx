import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrganizationTypeScreen() {
  const router = useRouter();

  const handleSelection = (type) => {
    router.push({ pathname: '/organizationDetails', params: { type } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What type of organization are you?</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/NGORegistrationScreen')}>
        <Text style={styles.buttonText}>🌍 NGO</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/HospitalRegistrationPage')}>
        <Text style={styles.buttonText}>🏥 Hospital</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/CompanyRegistrationScreen')}>
        <Text style={styles.buttonText}>🏢 Company</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, width: '80%', alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
});
