import { Injectable } from '@angular/core';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chatSession: Chat | null = null;

  private readonly systemInstruction = `
    Du är en hjälpsam och professionell AI-assistent för företaget Dödsbopartner Stockholm AB.
    Ditt mål är att hjälpa kunder med frågor om tömning av dödsbo, värdering, städning och sanering.

    Information om Dödsbopartner Stockholm AB:
    - Vi erbjuder helhetslösningar i Stockholm och Uppsala.
    - Tjänster: Tömning, Värdering (vi köper upp säljbara föremål), Flyttstädning (med garanti), Sanering (lukt/grovstäd).
    - Vi samarbetar med välgörenhet och återvinner det som inte kan säljas.
    - Kontakt: 08-123 45 67, info@dodsbopartner.se.
    - Adress: Drottninggatan 12, Stockholm.
    - Vi erbjuder kostnadsfria hembesök för värdering.

    Tonläge: Vänligt, respektfullt, professionellt och empatiskt (då kunder ofta är i sorg).
    Svara kortfattat och uppmana gärna till att boka ett hembesök för exakt prisbild.
    Svara alltid på Svenska.
  `;

  constructor() {}

  private getAi(): GoogleGenAI {
    if (!this.ai) {
        // Fallback or ensure process.env exists
        // Note: process.env.API_KEY is used as strictly required.
        // A polyfill in index.html ensures process.env exists in browser.
        this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return this.ai;
  }

  private initChat() {
    if (this.chatSession) return;
    
    this.chatSession = this.getAi().chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: this.systemInstruction,
        temperature: 0.7,
      }
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      this.initChat();
      const response: GenerateContentResponse = await this.chatSession!.sendMessage({ 
        message: message 
      });
      return response.text || 'Tyvärr, jag kunde inte generera ett svar just nu.';
    } catch (error) {
      console.error('Gemini API Error:', error);
      return 'Ett fel uppstod vid kontakten med AI-tjänsten. Vänligen prova igen senare eller ring oss.';
    }
  }
}