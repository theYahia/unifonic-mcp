import { z } from "zod";
import { UnifonicClient } from "../client.js";
const client = new UnifonicClient();
export const makeVoiceCallSchema = z.object({
    recipient: z.string().describe("Recipient phone number"),
    content: z.string().describe("Text-to-speech content"),
    language: z.enum(["english", "arabic"]).default("english").describe("TTS language"),
    repeat: z.number().int().min(1).max(5).default(1).describe("Number of repeats"),
});
export async function handleMakeVoiceCall(params) {
    const result = await client.request("POST", "/Voice/Call", {
        Recipient: params.recipient,
        Content: params.content,
        Language: params.language,
        Repeat: String(params.repeat),
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=make-voice-call.js.map