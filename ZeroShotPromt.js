const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.GROQ_API_KEY;

async function zeroShotPrompt() {
  const prompt = "Translate the following sentence into French: 'I am learning Artificial Intelligence'";

  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'llama-3.3-70b-versatile',  // Choose a valid Groq model
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Prompt:', prompt);
    console.log('Response:', response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

zeroShotPrompt();
