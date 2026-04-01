import { z } from "zod";
import { UnifonicClient } from "../client.js";

const client = new UnifonicClient();

export const sendWhatsappSchema = z.object({
  recipient: z.string().describe("Recipient WhatsApp number"),
  body: z.string().describe("Message body"),
  template_id: z.string().optional().describe("WhatsApp template ID"),
});

export async function handleSendWhatsapp(params: z.infer<typeof sendWhatsappSchema>): Promise<string> {
  const body: Record<string, string> = {
    Recipient: params.recipient,
    Body: params.body,
  };
  if (params.template_id) body.TemplateId = params.template_id;
  const result = await client.request("POST", "/WhatsApp/Send", body);
  return JSON.stringify(result, null, 2);
}
