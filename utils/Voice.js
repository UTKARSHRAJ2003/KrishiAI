import * as Speech from 'expo-speech';

export const speak = (text) => {
  Speech.speak(text, {
    language: 'hi-IN',
    rate: 1.0,
    pitch: 1.0,
  });
};

