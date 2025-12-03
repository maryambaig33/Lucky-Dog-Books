import { GoogleGenAI, Type } from "@google/genai";
import { BookRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBookRecommendations = async (userQuery: string): Promise<BookRecommendation[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a knowledgeable and friendly bookseller at Lucky Dog Books in East Dallas. 
      The customer is looking for book recommendations based on this query: "${userQuery}".
      Recommend exactly 3 books that are generally available or classics. 
      Keep descriptions punchy and inviting.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              author: { type: Type.STRING },
              description: { type: Type.STRING },
              reason: { type: Type.STRING, description: "Why this fits the user's request" }
            },
            required: ["title", "author", "description", "reason"]
          }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    // Clean up potential markdown code blocks from the response
    const cleanedText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    return JSON.parse(cleanedText) as BookRecommendation[];
  } catch (error) {
    console.error("Failed to get recommendations", error);
    return [];
  }
};