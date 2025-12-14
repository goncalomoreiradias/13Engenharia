import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendToGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `És um consultor sénior de engenharia e arquitetura da "13 Engenharia".
        O teu tom é sofisticado, profissional, minimalista e direto (High-End).
        Ajudas potenciais clientes a entender o escopo inicial dos seus projetos de construção ou renovação.
        Responde em Português de Portugal. Sê breve e elegante.
        Não dês orçamentos específicos, mas sim estimativas de complexidade e sugestões de próximos passos.`,
      },
    });

    return response.text || "Não foi possível gerar uma resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, ocorreu um erro ao processar o seu pedido. Tente novamente mais tarde.";
  }
};