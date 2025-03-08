import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Chatbot = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.chatbase.co/chatbot-embed/YOUR_CHATBOT_ID" }} 
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});

export default Chatbot;
