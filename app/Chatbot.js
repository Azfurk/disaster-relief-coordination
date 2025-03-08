import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const ChatbotScreen = () => {
  const [chatbotUrl, setChatbotUrl] = useState(null);

  useEffect(() => {
    // Fetch HMAC token from your backend
    fetch('https://your-backend.com/api/getChatToken')
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          setChatbotUrl(`https://www.chatbase.co/chatbot-embed/b7D-t9ot5s8mVaG_M37mW?hmac=${data.token}`);
        }
      })
      .catch(error => console.error('Error fetching token:', error));
  }, []);

  if (!chatbotUrl) {
    return <ActivityIndicator size="large" color="#007BFF" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: chatbotUrl }} 
        javaScriptEnabled={true} 
        style={{ flex: 1 }}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ChatbotScreen;
