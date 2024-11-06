import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ResetPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Enter your new password and confirm it below.</Text>
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#f6b6ca' // Background color
  },
  
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center',
    color: 'white' // Changed text color to white
  },
  
  subtitle: { 
    textAlign: 'center', 
    color: 'white',  // Changed text color to white
    marginBottom: 20 
  },
  
  input: { 
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    marginBottom: 10, 
    paddingHorizontal: 10, 
    borderRadius: 5, 
    backgroundColor: '#fff' // Set the background color to white
  },
  
  button: { 
    backgroundColor: '#A45A52', // Updated button color
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center' 
  },
  
  buttonText: { color: 'white', fontSize: 16 },
});
