const Groq = require("groq-sdk");
require("dotenv").config();

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function runTopP() {
  const response = await client.chat.completions.create({
    model: "llama3-8b-8192", 
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Write a short story about a robot learning emotions." }
    ],
    max_tokens: 100,
    top_p: 0.5 // nucleus sampling: only consider top 50% probability tokens
  });

  console.log("🔹 Top-p Response:");
  console.log(response.choices[0].message.content);
}

runTopP();
