const Groq = require("groq-sdk");
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function runTopKExample() {
  const completion = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a story generator." },
      { role: "user", content: "Write a short fantasy story in 3 sentences." }
    ],
    model: "llama3-8b-8192",
    top_k: 5, // 👈 Controlling randomness with Top-K
  });

  console.log(completion.choices[0].message.content);
}

runTopKExample();
