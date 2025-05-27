import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "nazmeen", // Unique app ID
  name: "tausif ansar",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});