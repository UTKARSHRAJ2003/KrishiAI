import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeatherScreen from './screens/WeatherScreen';


const Stack = createNativeStackNavigator();

// ✅ Login Screen
function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.112:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        Alert.alert('Login successful');
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Login failed', 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👨‍🌾 Krishi AI Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

// ✅ Dashboard Screen
function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌾 Welcome to Krishi AI</Text>

      <View style={styles.card}>
        <Button title="🌦️ Weather Agent" onPress={() => navigation.navigate('Weather')} />
      </View>
      <View style={styles.card}>
        <Button title="🛒 Market Agent" onPress={() => navigation.navigate('Market')} />
      </View>
      <View style={styles.card}>
        <Button title="🎙️ Voice Assistant" onPress={() => navigation.navigate('Voice')} />
      </View>
    </View>
  );
}



function MarketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market Agent Feature Coming Soon</Text>
    </View>
  );
}

function VoiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Assistant Feature Coming Soon</Text>
    </View>
  );
}

// ✅ App Wrapper
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Market" component={MarketScreen} />
        <Stack.Screen name="Voice" component={VoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0fff0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});





