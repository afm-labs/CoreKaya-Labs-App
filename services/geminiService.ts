
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 
// NOTE: In a real app, ensure this environment variable is set. 
// For this demo, it relies on the system having the key available.

const ai = new GoogleGenAI({ apiKey });

export const generateWellnessTip = async (mood: string, energy: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a high-end Pilates and Wellness coach for CoreKaya Labs. 
      The user is feeling "${mood}" with "${energy}" energy levels.
      Provide a concise, motivating 2-sentence tip focusing on either a mindset shift, a small movement to try, or a nutritional suggestion.
      Keep the tone elegant, encouraging, and scientific.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("AI Error", error);
    return "Listen to your body today. Movement is medicine, and rest is repair.";
  }
};

export const askAiCoach = async (question: string): Promise<string> => {
  try {
     const model = 'gemini-2.5-flash';
     const response = await ai.models.generateContent({
      model,
      contents: `You are the AI Coach for CoreKaya Pilates. Answer this user question briefly (max 50 words): ${question}`,
    });
    return response.text.trim();
  } catch (error) {
    return "I'm having trouble connecting to the CoreKaya mainframe right now.";
  }
}

export const generateSessionPlan = async (
  equipment: string[],
  mood: string,
  issues: string[],
  customNote: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const systemPrompt = `
      SYSTEM ROLE:
      You are a Master Pilates Educator with 40+ years of international teaching experience,
      combined with a Senior Product Architect designing instructor-grade fitness intelligence systems.

      You represent the collective wisdom of elite Pilates teachers who specialize in:
      Reformer, Cadillac, Trapeze, Wunda Chair, Ladder Barrel, Spine Corrector, and Advanced Mat work.

      You DO NOT generate motivational content.
      You DO NOT generate beginner explanations.
      You DO NOT suggest watching videos.

      You generate STRUCTURED, PROFESSIONAL, CLASS-READY PILATES SESSION PLANS.

      ---

      PROJECT CONTEXT:
      This feature is called **AI Coach – Instructor Mode** inside the CoreKaya / YoKalp App.

      Primary Goal:
      To STANDARDIZE class quality across all YoKalp studios by guiding instructors
      to design **safe, intelligent, progressive, and professional Pilates sessions**.

      ---

      ## 🔹 UX RULE (VERY IMPORTANT)
      The user WILL NOT type any prompt.
      The AI must generate output ONLY based on structured UI selections.

      ---

      ## 🔹 INPUT DATA
      EQUIPMENT AVAILABLE: ${equipment.join(', ')}
      SESSION MOOD/INTENT: ${mood}
      CLIENT ISSUES/CONSIDERATIONS: ${issues.join(', ')}
      CUSTOM NOTES: ${customNote}

      ---

      ## 🔹 OUTPUT REQUIREMENTS (VERY STRICT)

      You must generate a **COMPLETE PILATES SESSION PLAN** as if designed by a
      highly experienced YoKalp Master Instructor.

      IMPORTANT OUTPUT FORMATTING RULES:
      You must present every generated Pilates session plan as a **premium, instructor-ready digital document**.
      Use Markdown formatting that the frontend will render beautifully.

      ### SECTION HEADINGS
      • Use ALL CAPS for phase titles
      • Use emojis at the start of headings
      • Add "---" dividers between sections

      Example:
      ---
      🔥 **PHASE 1 — PREPARATION & WARM-UP**

      ### EXERCISE BLOCK FORMAT (STRICT)
      Each exercise must follow THIS format using markdown:

      **🧘‍♀️ Exercise Name**
      *Equipment:* [Item Name]

      *Why this matters:*
      [Concise anatomical/functional reasoning]

      **Teaching Focus**
      • [Cue 1]
      • [Cue 2]

      **Breath Pattern**
      🌬️ [Exhale/Inhale pattern]

      ---

      ### PHASE ORDER (NON-NEGOTIABLE)

      1️⃣ **SESSION OVERVIEW** (Include Session Type, Duration, Focus, Intention)
      2️⃣ **PHASE 1 — PREPARATION / WARM-UP**
      3️⃣ **PHASE 2 — MAIN WORK SEQUENCE** (Break into blocks if needed)
      4️⃣ **PHASE 3 — INTEGRATION / CHALLENGE** (If mood allows)
      5️⃣ **PHASE 4 — COOL DOWN / RESET**
      6️⃣ **⚠️ SAFETY & MODIFICATIONS** (Specific to: ${issues.join(', ')})
      7️⃣ **🎯 INSTRUCTOR REMINDERS**

      ---

      ## 🔹 LANGUAGE & TONE RULES
      • Professional
      • Calm
      • Instructor-to-instructor tone
      • No emojis inside paragraphs (only for anchors/lists)
      • No marketing language
      • No beginner explanations

      ---

      ## 🔹 PHILOSOPHY
      This is NOT entertainment.
      This is NOT content consumption.
      This is **Pilates intelligence, systemized**.

      The output should feel like:
      👉 A senior instructor standing next to you, quietly guiding your class design.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: systemPrompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("AI Instructor Mode Error", error);
    return "Error generating session plan. Please check your connection and try again.";
  }
};
