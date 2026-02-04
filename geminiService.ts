
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  constructor() {
    // Initial instance setup using the mandatory environment variable format.
  }

  async askAboutProject(projectTitle: string, userQuery: string) {
    try {
      // Create a new instance for each call as recommended to ensure latest configuration.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Du bist ein hilfreicher Assistent für das Portfolio von Serhat Yücel, einem UX/UI Designer. 
        Der Nutzer schaut sich gerade das Projekt "${projectTitle}" an.
        Frage des Nutzers: "${userQuery}"
        Beantworte die Frage professionell, kurz und im Stil eines erfahrenen Designers. Falls die Information nicht im Kontext ist, antworte charmant dass Serhat dazu gerne persönlich Auskunft gibt.`,
        config: {
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      });

      // The response.text property directly returns the extracted string.
      return response.text;
    } catch (error) {
      console.error("Gemini API error:", error);
      return "Entschuldigung, ich konnte gerade keine Antwort generieren. Bitte versuche es später noch einmal.";
    }
  }
}

export const geminiService = new GeminiService();
