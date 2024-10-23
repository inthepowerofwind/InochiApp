import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native'; 
import { Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [value, setValue] = useState(null);
  const navigation = useNavigation(); 

  // Handle registration logic
  // const handleRegister = async () => {
  //   if (password !== confirmPassword) {
  //     Alert.alert('Error', 'Passwords do not match');
  //     return;
  //   }
  //   
  // };

  // For combo box
  const data = [
    { label: 'Retailer', value: 'retailer' },
    { label: 'Company', value: 'company' },

  ];

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
    >
      <Image source={require('../images/inochi-logo.png')} style={styles.image} />
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Type of Customer"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}       
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <LinearGradient
          colors={['#0172B2', '#001645']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.baseText}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'blue' }}> Login</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  image: {
    height: 154,
    width: 260,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  input: {
    height: 47,
    width: 358,
    borderColor: '#0167A5',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    height: 48,
    width: 318,
    padding: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 10,
  },
  dropdown: {
    height: 47,
    width: 358,
    borderColor: '#0167A5',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  baseText: {
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
});

export default Register;
