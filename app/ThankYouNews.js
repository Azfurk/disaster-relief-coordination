import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

export default function ThankYouNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching latest news (Replace this with API call)
    setTimeout(() => {
      setNews([
        { id: 1, title: 'Emergency relief team deployed in flood-hit regions.' },
        { id: 2, title: 'New shelters set up for displaced families.' },
        { id: 3, title: 'NGOs and hospitals coordinate to provide medical aid.' },
        { id: 4, title: 'Volunteers urgently needed in affected areas.' },
        { id: 5, title: 'Food and water supplies reaching remote locations.' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.thankYouText}>Thanks for your assistance!</Text>
      <Text style={styles.subtitle}>Latest Disaster Relief Updates:</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        news.map((item) => (
          <View key={item.id} style={styles.newsItem}>
            <Text style={styles.newsText}>• {item.title}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  thankYouText: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#28a745' },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  newsItem: { width: '100%', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  newsText: { fontSize: 16, color: '#333' },
});
