import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './constants/styles'; // ✅ Corrected import

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circlesContainer}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
        <View style={[styles.circle, styles.circle4]} />
      </View>

      <Text style={styles.title}>Disaster Relief App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/needAssistance')}>
        <Text style={styles.buttonText}>🚨 Need Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/signup')}>
        <Text style={styles.buttonText}>🤝 Provide Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orgButton} onPress={() => router.push('/OrganizationTypeScreen')}>
        <Text style={styles.buttonText}>🏢 Organization Assistance</Text>
      </TouchableOpacity>
    </View>
  );
}
