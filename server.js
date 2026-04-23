const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. SAFETY CHECK: Prevents the crash if the variable is missing
if (!process.env.GROQ_API_KEY) {
    console.error("❌ CRITICAL ERROR: GROQ_API_KEY is missing in Railway Variables!");
}

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY || "dummy_key", 
    baseURL: "https://api.groq.com/openai/v1" 
});

app.get('/', (req, res) => res.send('Alpha AI is Live on Groq!'));

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
            // Using the most stable model name
            model: "llama-3.3-70b-versatile", 
            messages: [
                { role: "system", content: "You are Alpha AI, built by a student." },
                { role: "user", content: message }
            ],
        });
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("API ERROR:", error.message);
        res.status(500).json({ reply: "Alpha AI is thinking. Try again!" });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(✅ Server started successfully on port ${PORT});
});
