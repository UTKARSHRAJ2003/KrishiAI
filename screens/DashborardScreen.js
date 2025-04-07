import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌾 Welcome to Krishi AI</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Weather')}
      >
        <Text style={styles.cardText}>🌦️ Weather Agent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Market')}
      >
        <Text style={styles.cardText}>🛒 Market Agent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Voice')}
      >
        <Text style={styles.cardText}>🎙️ Voice Assistant</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#f4fff1',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#006400',
  },
  card: {
    width: '100%',
    backgroundColor: '#cdeccd',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#003300',
  },
});
