import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useStyle } from './style';
import { useTheme } from '../../theme';

const LogIn = () => {
  const theme = useTheme();
  const styles = useStyle(theme);
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign-up
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
    if (!name || !email || !username || !password || !confirmPassword || !mobileNo) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    console.log('Signing up with:', name, email, username, password, mobileNo);
    // Example: Call an API or perform sign-up operations
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ backgroundColor: 'white', flexGrow: 1 }}>
        <Image
          source={require('../../public/bg-2.jpeg')}
          style={styles.imgContainer}
          resizeMode="stretch"
        />
        <View style={styles.container}>
          <Image
            source={require('../../public/logo.png')}
            style={styles.logoContainer}
            resizeMode="contain"
          />

          {isSignUp ? (
            // Sign Up fields
            <>
              <TextInput
                placeholder="Full Name"
                style={styles.input}
                placeholderTextColor="black"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Email"
                style={styles.input}
                placeholderTextColor="black"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TextInput
                placeholder="Username"
                style={styles.input}
                placeholderTextColor="black"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                placeholder="Password"
                style={styles.input}
                placeholderTextColor="black"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                placeholder="Confirm Password"
                style={styles.input}
                placeholderTextColor="black"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TextInput
                placeholder="Mobile Number"
                style={styles.input}
                placeholderTextColor="black"
                value={mobileNo}
                onChangeText={setMobileNo}
                keyboardType="phone-pad"
              />
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.signinbtn}
                onPress={handleSignUp}
              >
                <Text style={styles.signinText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          ) : (
            // Login fields
            <>
              <TextInput
                placeholder="Enter your username"
                style={styles.input}
                placeholderTextColor="black"
              />
              <TextInput
                placeholder="Enter your password"
                style={styles.input}
                placeholderTextColor="black"
                secureTextEntry
              />
              <TouchableOpacity activeOpacity={0.7} style={styles.signinbtn}>
                <Text style={styles.signinText}>Sign In</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Toggle between Sign Up and Login */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signupBtn}
            onPress={() => setIsSignUp(!isSignUp)}
          >
            <Text style={styles.signupText}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.help}>Need Help?</Text>
      </View>
    </ScrollView>
  );
};

export default LogIn;
