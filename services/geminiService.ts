import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeProjectFeasibility = async (projectDescription: string): Promise<any> => {
  if (!apiKey) {
    console.warn("API Key missing, returning mock data");
    return {
      analysis: "API Key missing. System assumes offline feasibility is high based on heuristics.",
      feasibilityScore: 85,
      recommendation: "Proceed with local LLM integration."
    };
  }

  try {
    const prompt = `
      You are a senior solutions architect for a privacy-focused, offline-first mobile app studio.
      Analyze the following app idea for "Offline AI" feasibility. 
      Focus on: Can this run on-device (NPU)? Does it strictly require cloud? How private is it?
      
      App Idea: "${projectDescription}"
      
      Return JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            feasibilityScore: { type: Type.INTEGER, description: "0 to 100" },
            recommendation: { type: Type.STRING }
          }
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini analysis failed", error);
    return {
      analysis: "Unable to connect to Neural Link. Analysis failed.",
      feasibilityScore: 0,
      recommendation: "Retry connection."
    };
  }
};