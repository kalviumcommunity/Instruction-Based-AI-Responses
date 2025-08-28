const { Groq } = require("groq-sdk");

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function runStructuredOutput() {
  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that outputs data in JSON format."
        },
        {
          role: "user",
          content: "Give me details of a student named Pranav Sharma, age 19, studying Computer Science in Ambala."
        }
      ],
      response_format: { type: "json_object" } // ensures JSON response
    });

    console.log("Structured Output (JSON):");
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

runStructuredOutput();
