import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const WeatherScreen = () => {
  const [city, setCity] = useState('Delhi');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'YOUR_API_KEY_HERE'; // <-- Replace this

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getAdvice = (temp) => {
    if (temp < 20) return 'Too cold! Protect young crops.';
    if (temp >= 20 && temp <= 32) return 'Ideal for sowing and irrigation.';
    return 'High temperature! Ensure proper watering.';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌦️ Weather Agent</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />

      {loading && <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 20 }} />}

      {weather && weather.main && (
        <View style={styles.result}>
          <Text style={styles.info}>City: {weather.name}</Text>
          <Text style={styles.info}>Temperature: {weather.main.temp}°C</Text>
          <Text style={styles.info}>Condition: {weather.weather[0].description}</Text>
          <Text style={styles.advice}>{getAdvice(weather.main.temp)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
  advice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginTop: 10,
  },
});

export default WeatherScreen;
