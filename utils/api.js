import axios from 'axios';

export const askAI = async (question) => {
  try {
    const res = await axios.post('http://192.168.0.112/ask', {
      question,
    });
    return res.data.answer;
  } catch (err) {
    return '⚠️ सर्वर से कनेक्ट नहीं हो पाया';
  }
};
export const login = async (username, password) => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      return res.data;
    } catch (err) {
      console.error('Login error:', err.message);
      throw new Error('⚠️ लॉगिन असफल रहा');
    }
  };
