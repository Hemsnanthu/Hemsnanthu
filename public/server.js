// Requires: npm i express node-fetch dotenv
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, messages } = req.body;

    // Example: call OpenAI Chat Completions (modify according to provider)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an assistant that answers about the portfolio owner, his projects and skills.' },
          ...(messages || []), // forward conversation if provided
          { role: 'user', content: prompt }
        ],
        max_tokens: 400
      })
    });

    const data = await response.json();

    // Normalize reply
    const reply = data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || 'No response';
    res.json({ reply, raw: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI call failed' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`AI proxy running on ${port}`));
