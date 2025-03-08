import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const router = useRouter();
  const [chatbotVisible, setChatbotVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background Circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      <View style={styles.circle4} />
      <View style={styles.circle5} />
      <View style={styles.circle6} />

      <Text style={styles.title}>Disaster Relief App</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/needAssistance')}>
        <Text style={styles.buttonText}>Need Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/auth')}>
        <Text style={styles.buttonText}>Provide Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/organizations')}>
        <Text style={styles.buttonText}>Organizations</Text>
      </TouchableOpacity>

      {/* Floating Chatbot Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => setChatbotVisible(true)}>
        <Text style={styles.floatingButtonText}>💬</Text>
      </TouchableOpacity>

      {/* Chatbot Modal */}
      <Modal visible={chatbotVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.chatbotWrapper}>
            <WebView source={{ uri: "https://www.chatbase.co/chatbot-embed/b7D-t9ot5s8mVaG_M37mW" }} style={styles.webview} />
            <TouchableOpacity style={styles.closeButton} onPress={() => setChatbotVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    position: 'relative',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Floating Chatbot Button
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#28A745',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Background Circles
  circle1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    top: 50,
    left: 30,
    zIndex: 100,
  },
  circle2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    top: 200,
    right: 40,
    zIndex: 10,
  },
  circle3: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    bottom: 150,
    left: 50,
    zIndex: -1,
  },
  circle4: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'rgba(255, 255, 0, 0.3)',
    bottom: 100,
    right: 60,
    zIndex: -1,
  },
  circle5: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(255, 0, 255, 0.3)',
    top: 100,
    right: 90,
    zIndex: -1,
  },
  circle6: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(0, 255, 255, 0.3)',
    bottom: 50,
    left: 80,
    zIndex: -1,
  },
  // Chatbot Modal
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatbotWrapper: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});