const { generateAiResponse } = require('../services/ai.service.js');

module.exports.getReview = async (req, res) => {
  const code = req.body.code;
  
  if(!code){
    return res.status(400).send('Code is required');
  }

  try {
    // ✅ Use the exact name of the function you imported at the top
    const response = await generateAiResponse(code);
    res.send(response);
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).send("An error occurred while communicating with the AI.");
  }
}