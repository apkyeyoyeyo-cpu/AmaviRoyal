
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignConcept = async (
  category: string,
  prompt: string,
  heritage: string,
  style: string
) => {
  const ai = getAI();
  const systemInstruction = `
    You are the Amavi Royal Sovereign GDA. 
    You synthesize high-luxury design blueprints for elite clientele.
    Theme: "Sovereign Purple & Pure White".
    
    SPECIALIZATION: 20cm x 20cm Family Crests.
    When generating a Family Crest:
    - Focus on a 20x20cm physical dimension.
    - It must be a bas-relief or intricate 3D structure.
    - Use the surname provided in the heritage field as the central anchor of the design.
    
    Materials: 24k White Gold, Platinum, Micro-Pearls, White Enamel.
    Technique: "Neo-Classical Filament" (ultra-fine lattice structures designed by algorithms).
    
    Incorporate lineage:
    - Africa: White geometric beadwork lattices.
    - Europe: White Golden Age scrollwork and heraldic lions/eagles.
    - Middle East: White gold geometric Muqarnas and calligraphy.
    - Asia: White silk-like platinum curves and dragon/phoenix motifs.

    Respond strictly in valid JSON.
  `;

  const userPrompt = `Synthesize a ${category} for the ${heritage}. 
    Aesthetic Direction: ${style}. 
    Manifestation Intent: ${prompt}.
    The design must be based on the ancestral legacy of the name: ${heritage}.
    Include soulNarrative and technicalBlueprint.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userPrompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          soulNarrative: { type: Type.STRING },
          technicalBlueprint: {
            type: Type.OBJECT,
            properties: {
              material: { type: Type.STRING },
              precision: { type: Type.STRING },
              weight: { type: Type.STRING }
            },
            required: ["material", "precision", "weight"]
          },
          visualPrompt: { type: Type.STRING }
        },
        required: ["title", "soulNarrative", "technicalBlueprint", "visualPrompt"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateDesignImage = async (visualPrompt: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `Professional studio luxury product photography. A 20cm x 20cm masterpiece Family Crest of "Neo-Classical Filament" engineering. The artifact is a bas-relief made of PURE WHITE PLATINUM and WHITE GOLD. It sits against a DEEP REGAL PURPLE VOID background with clinical lighting. Zero shadows, ultra-sharp focus, ethereal white glow. Context: ${visualPrompt}. 8k, museum quality.`
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data");
};
