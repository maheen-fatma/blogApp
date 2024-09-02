import React from 'react'
import axios from 'axios'
import conf from '../conf/conf';
import { GoogleGenerativeAI } from "@google/generative-ai";

function ChatAi() {
const genAI = new GoogleGenerativeAI(conf.geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";
async function generateResponse(){ 
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text()); // Assuming 'text' is the property containing the generated content
    } catch (error) {
        console.error("Error generating content:", error);
    }
}
  return (
    <div>
      <button onClick={generateResponse}>
        Click here
      </button>
    </div>
  )
}

export default ChatAi
