import { z } from "zod";
import { UnifonicClient } from "../client.js";

const client = new UnifonicClient();

export const sendSmsSchema = z.object({
  recipient: z.string().describe("Recipient phone number (international format, e.g. 966501234567)"),
  body: z.string().max(1600).describe("SMS message body"),
  sender_id: z.string().optional().describe("Sender ID (registered with Unifonic)"),
});

export async function handleSendSms(params: z.infer<typeof sendSmsSchema>): Promise<string> {
  const body: Record<string, string> = {
    Recipient: params.recipient,
    Body: params.body,
  };
  if (params.sender_id) body.SenderID = params.sender_id;
  const result = await client.request("POST", "/Messages/Send", body);
  return JSON.stringify(result, null, 2);
}
