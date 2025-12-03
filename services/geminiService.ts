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
    
    // Improved parsing logic to extract JSON array
    try {
      // First try direct parse
      return JSON.parse(jsonText) as BookRecommendation[];
    } catch (e) {
      // If direct parse fails, try to find the array bounds
      const firstBracket = jsonText.indexOf('[');
      const lastBracket = jsonText.lastIndexOf(']');
      
      if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
        const cleanedText = jsonText.substring(firstBracket, lastBracket + 1);
        return JSON.parse(cleanedText) as BookRecommendation[];
      }
      throw new Error("Could not parse JSON response");
    }
  } catch (error) {
    console.error("Failed to get recommendations", error);
    return [];
  }
};