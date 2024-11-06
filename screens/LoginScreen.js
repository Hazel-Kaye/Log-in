import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/butterfly.jpg')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('ResetPassword')} style={styles.link}>
        Forgot Password?
      </Text>
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        Don’t have an account? Sign Up
      </Text>
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
  logo: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
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
  link: { 
    color: 'white',  // Changed link text color to white
    textAlign: 'center', 
    marginTop: 10 
  },
});
