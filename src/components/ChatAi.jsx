import React, { useEffect, useState } from 'react'
import axios from 'axios'
import conf from '../conf/conf';
import { GoogleGenerativeAI } from "@google/generative-ai";
import parse from 'html-react-parser'
function ChatAi() {
const genAI = new GoogleGenerativeAI(conf.geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const [prompt, setPrompt] = useState("")
const [respons, setRespons] = useState("");
async function generateResponse(){ 
    try{
        const result = await model.generateContent(prompt);
        setRespons(result.response.text())
        
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

  return (
    <div>
      <input 
        type="text" 
        name="" 
        id="" 
        className='border border-gray-300 bg-fuchsia-300' 
        onChange={(e)=>setPrompt(e.target.value)}
        value={prompt} 
       />
      <button onClick={generateResponse}>
        Click here
      </button>
      {
        respons && 
        <div>
            <p>{parse(respons)}</p>
        </div>
      }
    </div>
  )
}

export default ChatAi
