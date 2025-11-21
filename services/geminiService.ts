import { GoogleGenAI } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

// Initialize client ONLY if key exists to avoid immediate runtime errors, 
// but handle missing key gracefully in the function.
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!ai) {
    return "API Keyが設定されていないため、AI機能を利用できません。";
  }

  try {
    const model = 'gemini-2.5-flash'; 
    
    // Construct chat history for context
    // We map our internal role 'model' to the API's expected 'model' role
    // However, GoogleGenAI Chat usually handles history internally if we use ai.chats.create
    // For a simple stateless-like turn or re-building history:
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response = await chat.sendMessage({ message });
    return response.text || "申し訳ありません、応答を生成できませんでした。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "現在アクセスが集中しており、応答できません。しばらく経ってからお試しください。";
  }
};
