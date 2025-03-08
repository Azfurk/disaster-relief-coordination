import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function CompanyHelpProviding() {
  const router = useRouter();
  const [helpItems, setHelpItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const predefinedItems = [
    "🍽️ Food & Water",
    "🩺 Medical Supplies",
    "🏕️ Shelter & Tents",
    "🚗 Transportation",
    "💰 Financial Assistance",
    "⚡ Power Supply",
    "👕 Clothing",
  ];

  const addHelpItem = () => {
    if (newItem && quantity) {
      setHelpItems([...helpItems, { item: newItem, quantity }]);
      setNewItem("");
      setQuantity("");
    }
  };

  const submitHelp = () => {
    alert("Help details submitted successfully!");
    router.push("/thankYou");
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>🤝 Provide Assistance</Text>

        <Text style={styles.subtitle}>Select what you can provide:</Text>
        {predefinedItems.map((item, index) => (
          <View key={index} style={styles.helpItemRow}>
            <Text style={styles.listItem}>{item}</Text>
            <TextInput
              style={styles.quantityInput}
              placeholder="Qty"
              keyboardType="numeric"
              onChangeText={(text) => {
                setHelpItems((prevItems) => {
                  const updatedItems = [...prevItems];
                  const existingItem = updatedItems.find(
                    (help) => help.item === item
                  );
                  if (existingItem) {
                    existingItem.quantity = text;
                  } else {
                    updatedItems.push({ item, quantity: text });
                  }
                  return updatedItems;
                });
              }}
            />
          </View>
        ))}

        <Text style={styles.subtitle}>➕ Add Custom Assistance:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type of assistance"
          value={newItem}
          onChangeText={setNewItem}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={addHelpItem}>
          <Text style={styles.buttonText}>Add Assistance</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>✅ Selected Help:</Text>
        {helpItems.length > 0 ? (
          helpItems.map((help, index) => (
            <Text key={index} style={styles.selectedItem}>
              {help.item} - {help.quantity}
            </Text>
          ))
        ) : (
          <Text style={styles.noItemText}>No items selected yet.</Text>
        )}

        <TouchableOpacity style={styles.submitButton} onPress={submitHelp}>
          <Text style={styles.buttonText}>Submit Assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.donateButton}>
          <Text style={styles.buttonText}>💵 Donate Money</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for readability
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ddd",
    marginVertical: 10,
  },
  listItem: {
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#fff",
  },
  quantityInput: {
    width: 70,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginLeft: 10,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#28a745",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  donateButton: {
    backgroundColor: "#FF4500",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#FF4500",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  selectedItem: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginVertical: 5,
  },
  noItemText: {
    fontSize: 16,
    color: "#bbb",
    fontStyle: "italic",
    marginTop: 5,
  },
  helpItemRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});
