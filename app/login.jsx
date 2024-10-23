import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation(); 

  // Login logic (sample lang 'to haha)
  // const handleLogin = async () => {
  //   try {
  //     let phoneNumber = '09612527453';
  //     let password = 'test';
  //     let user;

  //     if(user == phoneNumber && password);
  //       Alert.alert('Success', 'User logged in successfully');
  //       navigation.navigate('Home');
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image source={require('../images/inochi-logo.png')} style={styles.image} />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['#0172B2', '#001645']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.baseText}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue' }}> Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 154,
    width: 260,
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default Login;
