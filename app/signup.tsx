
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

export default function SignupScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [skills, setSkills] = useState('');

  const handleSignup = () => {
    if (!username || !password || !confirmPassword || !phoneNumber || !bloodGroup || !skills) {
      alert('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    alert("Signup successful! Redirecting to Provide Assistance.");
    router.push("/provideAssistance");

    

  };

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ffffffbb"
          value={username}
          onChangeText={setUsername}
        />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

<View style={styles.input}>
  <RNPickerSelect
    onValueChange={(value) => setBloodGroup(value)}
    items={[
      { label: 'A+', value: 'A+' },
      { label: 'A-', value: 'A-' },
      { label: 'B+', value: 'B+' },
      { label: 'B-', value: 'B-' },
      { label: 'O+', value: 'O+' },
      { label: 'O-', value: 'O-' },
      { label: 'AB+', value: 'AB+' },
      { label: 'AB-', value: 'AB-' },
    ]}
    placeholder={{ label: 'Select Blood Group', value: null }}
    style={pickerSelectStyles}
  />
</View>

<View style={styles.input}>
  <RNPickerSelect
    onValueChange={(value) => setSkills(value)}
    items={[
      { label: 'First Aid', value: 'first_aid' },
      { label: 'Cooking', value: 'cooking' },
      { label: 'Logistics', value: 'logistics' },
      { label: 'Childcare', value: 'childcare' },
    ]}
    placeholder={{ label: 'Select Skills', value: null }}
    style={pickerSelectStyles}
  />
</View>


      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />


        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ffffffbb"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 15,
    borderRadius: 12,
    backgroundColor: "rgba(17, 25, 40, 0.75)", // Glass effect
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.125)",
    color: "#fff",
    marginBottom: 15,
    fontSize: 16,
    textAlign: "center",
    shadowColor: "#fff",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  button: {
    backgroundColor: "rgba(0, 123, 255, 0.7)", // Semi-transparent button
    padding: 15,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.125)",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
const pickerSelectStyles = {
  inputIOS: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    color: 'black',
    textAlign: 'left', // Align text like inputs
    backgroundColor: 'white', // Make it look like input fields
  },
  inputAndroid: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    color: 'black',
    textAlign: 'left', // Align text like inputs
    backgroundColor: 'white', // Make it look like input fields
  },
};
