
const { GoogleGenAI } = require('@google/genai');
const express = require('express');
const airouter = express.Router();
const { middle } = require("../middleware");

// Initialize the AI client
const ai = new GoogleGenAI({
  apiKey: 'AIzaSyApHvm7W5-7iaxwjJ9xumY0cSDF_rrV3vg',
});

airouter.post('/ai', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ msg: 'Prompt is required' });
    }

    // Structured prompt that returns only output or error, no explanation
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Analyze and run the following code:\n\n${prompt}\n\nIf the code is valid, return only its output. If there is a syntax or runtime error, return only the error message. No explanation. No formatting.`
            }
          ]
        }
      ],
    });

    // Extract and clean the response
    if (response?.candidates?.length > 0) {
      let responseText = response.candidates[0]?.content?.parts[0]?.text || 'No response';

      // Clean possible "Output:" or similar prefixes
      responseText = responseText
        .replace(/^(Output:|The output is|Error:|Result:)/i, '')
        .trim();

      res.json({ response: responseText });
    } else {
      res.status(500).json({ msg: 'No valid response from AI model.' });
    }
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ msg: 'AI processing error', error: error.message });
  }
});

module.exports = { airouter };
