Instruction-Based AI Responses
📌 Project Overview

This project demonstrates different prompt engineering techniques using Node.js and OpenAI’s GPT model. The goal is to explore how different types of prompts affect the quality, creativity, and accuracy of AI-generated responses.

The project is divided into multiple sections where each prompt type is implemented and tested with sample queries.

🚀 Features Implemented

Zero-Shot Prompting – Asking the model to perform a task without any prior examples.

Few-Shot Prompting – Providing a few examples in the prompt to guide the model’s response.

Instruction-Based Prompting – Using direct instructions for structured responses.

Chain-of-Thought Prompting – Forcing the model to reason step by step.

Role/Persona Prompting – Making the AI take on a role (e.g., teacher, doctor, coder).

Self-Consistency – Generating multiple outputs and selecting the most consistent answer.

Generated Knowledge Prompting – Expanding knowledge within the prompt before answering.

Reflexion (Feedback Loop) – Asking the model to review and refine its own response.

🛠️ Tech Stack

Node.js (Backend runtime)

Express.js (Server framework, optional)

OpenAI API (for AI responses)

📂 Project Structure
├── index.js              # Main entry point  
├── prompts/              # Folder for prompt examples  
│   ├── zeroShot.js  
│   ├── fewShot.js  
│   ├── chainOfThought.js  
│   └── roleBased.js  
├── package.json  
└── README.md  

⚡ How to Run

Clone this repo:



Install dependencies:

npm install


Create a .env file and add your OpenAI API key:

OPENAI_API_KEY=your_api_key_here


Run the project:

node index.js

📖 Example Usage

Zero-Shot Prompting

prompt = "Translate 'How are you?' into French.";


Few-Shot Prompting

prompt = `
English: Hello → French: Bonjour
English: Thank you → French: Merci
English: Good morning → French: 
`;


Chain-of-Thought Prompting

prompt = "If a train leaves at 3 PM and arrives at 6 PM, how long is the journey? Think step by step.";

🎯 Learning Outcomes

Understand the differences between multiple prompt engineering techniques.

Learn how AI behavior changes with structured instructions.

Explore practical applications of prompt engineering in real-world apps.

📌 Future Scope

Add support for advanced prompt chaining.

Integrate LangChain.js for structured workflows.

Deploy as an interactive web app.