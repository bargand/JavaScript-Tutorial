const axios = require('axios');

async function aiToHumanConversion(aiContent) {
  const apiKey = 'your_api_key';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';  // Use the appropriate API endpoint

  // The prompt to provide context for the conversion
  const prompt = "The following AI-generated content needs to be converted into human-like writing:\n\n";

  // Combine the prompt and AI-generated content
  const inputText = prompt + aiContent;

  try {
    // Make a request to OpenAI GPT-3 for human-like conversion
    const response = await axios.post(apiUrl, {
      prompt: inputText,
      max_tokens: 150,  // Adjust as needed
      temperature: 0.7  // Adjust as needed (higher values for more randomness)
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    // Extract the converted content from the response
    const humanContent = response.data.choices[0].text;

    return humanContent;
  } catch (error) {
    console.error('Error during AI to human conversion:', error.response ? error.response.data : error.message);
    return null;
  }
}

// Example usage
const aiGeneratedContent = "The AI has generated the following text...";
aiToHumanConversion(aiGeneratedContent)
  .then(humanWrittenContent => {
    console.log("AI-generated content:\n", aiGeneratedContent);
    console.log("\nHuman-written content:\n", humanWrittenContent);
  })
  .catch(error => console.error('Error during example usage:', error));
