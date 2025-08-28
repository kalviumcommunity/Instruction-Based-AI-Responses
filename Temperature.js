const Groq = require("groq-sdk");

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Make sure your key is set
});

async function generateWithTemperature(temp) {
  const response = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",  // you can change model if needed
    messages: [
      { role: "system", content: "You are a storytelling assistant." },
      { role: "user", content: "Write a short story about a robot learning emotions." }
    ],
    temperature: temp,  // control randomness
  });

  console.log(`\n=== Temperature: ${temp} ===`);
  console.log(response.choices[0].message.content);
}

// Try with different temperatures
generateWithTemperature(0.2); // More logical & deterministic
generateWithTemperature(1.0); // Balanced
generateWithTemperature(1.5); // Very random & creative
